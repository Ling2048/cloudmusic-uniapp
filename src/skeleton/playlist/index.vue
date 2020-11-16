<template>
  <view class="m-skeleton-playlist">
    <!-- <view class="empty"/> -->
    <view class="intro">
      <view class="intro-cover"/>
      <view clas="intro-content">
        <view class="content-title"/>
        <view class="content-avatar">
          <view class="avatar-img"/>
          <view class="avatar-name"/>
        </view>
        <view class="content-description"/>
      </view>
    </view>
    <view class="play-all">
      <view class="play-icon"/>
      <view class="title"/>
    </view>
    <view class="playlist-wrap">
      <View v-for="(_, i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i" class="list-item">
        <View class="order"/>
        <View class="content"/>
        <View class="play-icon"/>
      </View>
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
  .m-skeleton-playlist {
    padding: 0 33.336rpx;
  }

  .m-skeleton-playlist .empty {
    height: 170.847rpx;
  }

  .m-skeleton-playlist .intro {
    margin-top: 27.78rpx;
    margin-bottom: 47.9205rpx;
    height: 262.521rpx;
  }

  .m-skeleton-playlist .intro .intro-cover {
    display: inline-block;
    margin-right: 41.67rpx;
    width: 262.521rpx;
    height: 100%;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .intro .intro-content {
    display: inline-block;
    width: 379.197rpx;
    height: 100%;
    vertical-align: top;
  }

  .m-skeleton-playlist .intro .intro-content .content-title {
    height: 34.725rpx;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .intro .intro-content .content-avatar {
    margin-top: 25.002rpx;
    margin-bottom: 25.002rpx;
    height: 54.171rpx;
  }

  .m-skeleton-playlist .intro .intro-content .content-avatar .avatar-img {
    display: inline-block;
    margin-right: 12.501rpx;
    width: 54.171rpx;
    height: 100%;
    border-radius: 50%;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .intro .intro-content .content-avatar .avatar-name,.m-skeleton-playlist .play-all .play-icon {
    display: inline-block;
    width: 120.1485rpx;
    height: 100%;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .intro .intro-content .content-description {
    height: 90.285rpx;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .play-all {
    padding-top: 31.2525rpx;
    padding-bottom: 31.2525rpx;
    height: 50.004rpx;
  }

  .m-skeleton-playlist .play-all .play-icon {
    width: 50.004rpx;
    border-radius: 50%;
  }

  .m-skeleton-playlist .play-all .title {
    display: inline-block;
    margin-left: 54.171rpx;
    width: 69.45rpx;
    height: 100%;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .playlist-wrap .list-item {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    padding-top: 29.169rpx;
    padding-bottom: 32.6415rpx;
    height: 125.01rpx;
  }

  .m-skeleton-playlist .playlist-wrap .list-item .order {
    width: 61.8105rpx;
    height: 61.8105rpx;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .playlist-wrap .list-item .content {
    width: 70%;
    height: 100%;
    background: rgba(0,0,0,.03);
  }

  .m-skeleton-playlist .playlist-wrap .list-item .play-icon {
    width: 61.8105rpx;
    height: 61.8105rpx;
    background: rgba(0,0,0,.03);
  }
</style>