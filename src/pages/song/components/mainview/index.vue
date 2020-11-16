<template>
  <view class='song-main'>
    <view class='vinyl-head'>
      <image class='logo' :src='logo'/>
      <image class='vinyl-needle' :src='needle'/>
    </view>
    <view class='vinyl-turntable'>
      <image class='vinyl-mask' :src='picUrl'/>
      <image class='vinyl-bottom' :src='vinyl'/>
    </view>
    <lyrics-view/>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import LyricsView from '../lyricsview/index.vue'
import logo from '@/images/logo.svg'
import needle from '@/images/needle.png'
import vinyl from '@/images/vinyl.png'
export default Vue.extend({
  name: 'main-view',
  components: {
    LyricsView
  },
  data() {
    return {
      logo,
      needle,
      vinyl
    }
  },
  computed: {
    ...mapState(['songdetail']),
    picUrl: function() {
      return this.songdetail[0].al.picUrl + '?imageView=1&thumbnail=360y360'
    }
  }
})
</script>

<style scoped>
@-webkit-keyframes circling {
  0% {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
}

@keyframes circling {
  0% {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
}

.song-main {
  width: 100%;
}

.song-main .vinyl-head {
  position: relative;
  height: 209.739rpx;
}

.song-main .vinyl-head .logo {
  position: absolute;
  top: 15.279rpx;
  left: 20.835rpx;
  width: 193.7655rpx;
  height: 37.503rpx;
}

.song-main .vinyl-head .vinyl-needle {
  position: absolute;
  left: 46%;
  z-index: 1;
  width: 213.2115rpx;
  height: 345.1665rpx;
}

.song-main .vinyl-turntable {
  position: relative;
  height: 575.046rpx;
}

.song-main .vinyl-turntable .vinyl-mask {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -184.0425rpx 0 0 -184.0425rpx;
  width: 368.085rpx;
  height: 368.085rpx;
}

.song-main .vinyl-turntable .vinyl-bottom {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -287.523rpx 0 0 -287.523rpx;
  width: 575.046rpx;
  height: 100%;
}

.song-main .vinyl-turntable .circling,.song-main .vinyl-turntable .pause {
  animation: circling 20s infinite linear;
}

.song-main .vinyl-turntable .pause {
  animation-play-state: paused;
}
</style>