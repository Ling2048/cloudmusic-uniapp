<template>
  <view class='item'>
    <text className='normal'>
      {{title}}
    </text>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'highlight',
  props: {
    title: String,
    highlights: String
  }
})
</script>

<style scoped>
.item {
  display: inline;
}

.item .hightlight {
  display: inline;
  color: #507daf;
}
</style>