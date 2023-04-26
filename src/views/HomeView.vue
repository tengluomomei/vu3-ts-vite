<template>
  <div class="home">
    <button @click="openFun">确定</button>
    <HelloView :isShow="isshow" @closeUpdate="closeFun"></HelloView>
    <van-pull-refresh v-model="refreshListLoading" @refresh="getData(true)">
      <van-list
        v-model:loading="listLoading"
        :finished="listFinished"
        finishedText='没有更多了哦~'
        @load="getData"
        offset="100"
      >
        <ul class="list">
          <li v-for="(item,index) in currentPageList" :key="index">
            <van-image fit="contain" :src="item.img" class="pic"/>
            <p class="name">{{ item.nickname }}</p>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
  import {reactive,ref} from 'vue'
  import { awaitWrap } from '@/utils/index';
  import type { ImageItem } from '@/api/model/homeModel';
  import {ImageListApi } from '@/api/home';
  import HelloView from '@/components/HelloWorld.vue'

  const isshow = ref(false)
  const openFun = ()=>{
    isshow.value = true
  }

  const closeFun = (data:boolean)=>{
    console.log(data)
    isshow.value = false
  }

  
  const refreshListLoading = ref(false);

  const listLoading = ref(false); // 是否处于加载状态 默认不处于
  const listFinished = ref(false); // 是否全部数据加载完成
  const listEmpty = ref(false);
  const currentPageList = reactive<ImageItem[]>([]);
  const queryState = reactive({ page: 1, page_size: 10 });
  const getData = async (isRefresh: boolean) => {
    if (isRefresh) {
        queryState.page = 1;
        listLoading.value = true;
      }

      const [error, currentPageData] = await awaitWrap(ImageListApi(queryState));

      if (error || !currentPageData) {
        return;
      }

      if (!currentPageData.rows.length) {
        listFinished.value = true;
        return;
      }

      if (queryState.page === 1) {
        refreshListLoading.value = false;
        listFinished.value = false;
      }

      currentPageList.push(...currentPageData.rows);

      listLoading.value = false;
      queryState.page += 1;
  };

</script>

<style lang="less" scoped>
.home{
  position: relative;

  .list{
    margin: 0 auto;
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
    li{
      width: 244px;
      height: 352px;
      text-align: center;
      border: 1px solid #ccc;
      .pic{
        width: 174px;
        height: 174px;
        margin: 54px auto 0px;
      }
      .name{
        font-size: 22px;
        color: #e8c382;
      }
    }
  }
}
</style>
