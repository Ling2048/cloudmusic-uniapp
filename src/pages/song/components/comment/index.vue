<template>
  <view class='song-comment'>
    <text class='title'>精彩评论</text>
    <view class='comment-list'>
      <view v-for="data in songcomment.slice(0,10)" :key="data.commentId" class='comment-item'>
        <button class='btn-plain avatar'>
          <image class='avatar-img' :src="`${data.user.avatarUrl}?imageView=1&thumbnail=40x0`"/>
        </button>
        <view class='comment-info'>
          <view class='nick-name'>
            {{data.user.nickname}}
          </view>
          <text class='time'>
            {{parseRelativeDate(data.time, false)}}
          </text>
          <view class='content'>
            <view>
              <text>
                {{data.content}}
              </text>
            </view>
          </view>
          <view class='zan'>
            <button class='btn-plain zan-btn'>
              <text class='zan-count'>
                {{getCount(data.likedCount)}}
              </text>
              <image class='zan-img' :src='zan'/>
            </button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { zan } from '@/common/icons'
import { getCount, parseRelativeDate } from '@/common';
export default Vue.extend({
  name: 'comment',
  data() {
    return {
      zan
    }
  },
  computed: {
    ...mapState(['songcomment'])
  },
  methods: {
    getCount,
    parseRelativeDate
  }
})
</script>

<style scoped>
.song-comment {
  position: relative;
  margin-top: 69.45rpx;
  padding: 0 32.6415rpx;
  color: #fff;
}

.song-comment .title {
  font-weight: 500;
  font-size: 35.4195rpx;
  line-height: 1.5;
}

.comment-item {
  position: relative;
  margin-top: 31.2525rpx;
}

.comment-item .avatar {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  padding: 0;
  border: 0;
}

.comment-item .avatar::after,.comment-item .comment-info .zan .zan-btn::after {
  border: 0;
}

.comment-item .avatar .avatar-img {
  display: block;
  width: 62.505rpx;
  height: 62.505rpx;
  border-radius: 50%;
}

.comment-item .avatar .ava-icon {
  position: absolute;
  right: -4.8615rpx;
  bottom: 0;
  width: 29.8635rpx;
  height: 29.8635rpx;
  background-image: url(https://p4.music.126.net/l0FkWHfIqLav4I1oYHIyVQ==/19013854579518977.jpg);
  background-size: 166.68rpx auto;
  background-repeat: no-repeat;
}

.comment-item .avatar .yyr {
  background-position: -43.7535rpx 0;
}

.comment-item .avatar .v {
  background-position: 0 0;
}

.comment-item .avatar .daren {
  background-position: -88.2015rpx 0;
}

.comment-item .comment-info {
  margin-left: 83.34rpx;
  padding-bottom: 31.2525rpx;
  border-bottom: 0.6945rpx solid rgba(255,255,255,.1);
}

.comment-item .comment-info .nick-name {
  display: block;
  color: rgba(255,255,255,.6);
  font-size: 25.002rpx;
  line-height: 1.5;
}

.comment-item .comment-info .nick-name .vip-associator,.comment-item .comment-info .nick-name .vip-package {
  display: inline-block;
  margin-left: 9.0285rpx;
  width: 18.7515rpx;
  height: 18.7515rpx;
}

.comment-item .comment-info .nick-name .vip-package {
  width: 38.892rpx;
}

.comment-item .comment-info .nick-name .vip-annualfee {
  display: inline-block;
  margin-left: 6.2505rpx;
  width: 54.8655rpx;
  height: 18.7515rpx;
}

.comment-item .comment-info .time {
  display: block;
  color: rgba(255,255,255,.3);
  font-size: 18.7515rpx;
  line-height: 1.5;
}

.comment-item .comment-info .content {
  padding: 12.501rpx 0 0;
  color: #fff;
  font-size: 29.169rpx;
  line-height: 1.5;
}

.comment-item .comment-info .content .cmt_emoji {
  width: 29.169rpx;
  height: 29.169rpx;
  vertical-align: middle;
}

.comment-item .comment-info .zan {
  position: absolute;
  top: 0;
  right: 0;
}

.comment-item .comment-info .zan .zan-btn {
  padding: 0;
  border: 0;
  line-height: 1;
}

.comment-item .comment-info .zan .zan-btn .zan-count {
  color: rgba(255,255,255,.4);
  font-size: 25.002rpx;
}

.comment-item .comment-info .zan .zan-btn .zan-img {
  margin-left: 8.334rpx;
  width: 33.336rpx;
  height: 33.336rpx;
  vertical-align: bottom;
}
</style>