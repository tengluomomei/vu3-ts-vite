<template>
  <!-- <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
   
  </div> -->
  {{  props.isShow }}
  <van-popup
        :modelValue.show="props.isShow" @update:modelValue="abc"
        :style="{ padding: '64px' }" 
        closeable
        @close="closeFun"
    >
        内容
    </van-popup>
</template>

<script setup lang="ts">
    import { ref, defineEmits } from 'vue'
    
    const props = defineProps(['isShow'])
    
    const emit = defineEmits(['closeUpdate'])


    const closeFun = ()=>{
        emit('closeUpdate', false)
    }
    const abc = ()=>{

    }
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
