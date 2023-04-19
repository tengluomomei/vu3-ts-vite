<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts" setup>
  import {reactive,ref} from 'vue'
  import { awaitWrap } from '@/utils/index';
  import type { cardDataItem } from '@/api/model/homeModel';
  import {CardInfoApi } from '@/api/home';

  const props = defineProps({
    cardId: {
      type: Number,
      required: true,
    },
  })
  
  // 卡牌详情
  const cardData = reactive<cardDataItem>({
      card_id: -1,
      nickname: '',
      avatar: '',
      img: '',
      title: '',
      card_name: '',
      words: '',
      likes_number: 0,
      review_status: -1,
      card_status: -1,
      publish_at: 0,
      created_at: 0,
      is_like: 0,
      can_del: 0,
      can_same_clause: 0,
  });
  // 获取卡牌详情
  const getCardInfoData = async () => {
    const queryState = reactive({ card_id: props.cardId });

    const [error, data] =  await awaitWrap(CardInfoApi(queryState));
    if (error || !data) {
      return;
    }
    Object.assign(cardData, data)
    console.log(cardData)
  };
  getCardInfoData();
</script>
