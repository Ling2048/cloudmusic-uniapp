<template>
  <view class='header-wrap'>
    <view class='header'>
      <view class='intro'>
        <view class='intro-cover'>
          <image class='intro-img' :src='playlistInfo.coverImgUrl'/>
          <view class='play_counts'>
            <image class='counts_icon' :src='playCounts'/>
            <text>
              {{count}}
            </text>
          </view>
        </view>
        <view class='intro-content'>
          <view class='content-title'>
            {{playlistInfo.name}}
          </view>
          <view class='content-avatar'>
            <image class='avatar-img' :src='playlistInfo.creator.avatarUrl'/>
            {{playlistInfo.creator.nickname}}
          </view>
          <view class='content-description'>
            <view class='context'>
              {{playlistInfo.description}}
              <image class='arrow' :src='arrow'/>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { getCount } from '../../../../common'
import { arrow, playCounts } from '../../../../common/icons'

export default Vue.extend({
  name: 'play-list-header',
  props: {
    playlistInfo: {}
  },
  data() {
    return {
      arrow,
      playCounts
    }
  },
  computed: {
    count: function() {
      return getCount(this.$props['playlistInfo'].playCount ? this.$props['playlistInfo'].playCount : 0)
    }
  }
})
</script>

<style scoped>
.header-wrap {
  background-color: transparent;
}

.header {
  margin-top: 41.67rpx;
  margin-bottom: 47.9205rpx;
  padding: 0 33.336rpx;
}

.header .intro {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 262.521rpx;
}

.header .intro .intro-cover {
  position: relative;
  height: 100%;
}

.header .intro .intro-cover .intro-img {
  width: 262.521rpx;
  height: 100%;
  border-radius: 12.501rpx;
}

.header .intro .intro-cover .play_counts {
  position: absolute;
  top: 0;
  right: 10.4175rpx;
  color: #fff;
  font-size: 29.169rpx;
}

.header .intro .intro-cover .play_counts .counts_icon {
  margin-right: 3.4725rpx;
  width: 20.835rpx;
  height: 19.446rpx;
}

.header .intro .intro-content {
  width: 381.2805rpx;
  height: 100%;
  vertical-align: top;
}

.header .intro .intro-content .content-title {
  display: -webkit-box;
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  font-size: 35.4195rpx;
  line-height: 1.4;
  line-clamp: 2;
}

.header .intro .intro-content .content-avatar {
  overflow: hidden;
  margin-top: 25.002rpx;
  margin-bottom: 27.0855rpx;
  height: 54.171rpx;
  color: rgba(255,255,255,.8);
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  font-size: 27.0855rpx;
  line-height: 1.5;
}

.header .intro .intro-content .content-avatar .avatar-img {
  display: inline-block;
  margin-right: 12.501rpx;
  width: 54.171rpx;
  height: 100%;
  border-radius: 50%;
  vertical-align: middle;
}

.header .intro .intro-content .content-description {
  position: relative;
  color: rgba(255,255,255,.6);
  font-size: 22.9185rpx;
  line-height: 1.5;
}

.header .intro .intro-content .content-description .context {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
}

.header .intro .intro-content .content-description .arrow {
  right: -18.057rpx;
  bottom: 4.167rpx;
  margin-left: 4.8615rpx;
  width: 20.835rpx;
  height: 20.835rpx;
  vertical-align: -4%;
}
</style>