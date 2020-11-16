<template>
  <view class="m-skeleton-index">
    <!-- <view class="empty"/> -->
    <view class="search-box"/>
    <view v-for="(_, i) in [1, 2, 3, 4]" :key="i" class="toplist">
      <view class="left"/>
      <view class="right">
        <view v-for="(_, i) in [1, 2, 3]" :key="i" class="song"/>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'skeleton'
})
</script>

<style scoped>
  .m-skeleton-index {
    margin: 0 33.336rpx;
  }

  .m-skeleton-index .empty {
    height: 181.2645rpx;
  }

  .m-skeleton-index .search-box {
    margin: 20.835rpx 0 31.2525rpx;
    height: 72.9225rpx;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-index .toplist {
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 20.835rpx;
  }

  .m-skeleton-index .toplist .left {
    width: 213.906rpx;
    height: 213.906rpx;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-index .toplist .right {
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    margin: 25.002rpx 0 24.3075rpx 20.835rpx;
    width: 415.311rpx;
  }

  .m-skeleton-index .toplist .right .song {
    margin-bottom: 31.947rpx;
    height: 27.0855rpx;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-index .toplist .right .song:last-child {
    margin-bottom: 0;
  }
</style>