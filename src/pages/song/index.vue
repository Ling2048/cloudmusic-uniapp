<template>
  <view>
    <view class='newsong'>
      <song-b-g/>
      <view class='song-mask'/>
      <view class='scroll-view' :style="scrollStyle">
        <play-ctrl/>
        <view class='content-wrap'>
          <main-view/>
          <simi-song/>
          <comment/>
          <view class='emptyBox'/>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { songdetail, songlyrics, simisong, songcomment, songurl } from '../../common/network'
import { getCompatibleTop, getCapsule, getCompatibleWindowHeight} from '@/common/index'
import SongBG from './components/songbg/index.vue'
import PlayCtrl from './components/playcrtl/index.vue'
import MainView from './components/mainview/index.vue'
import SimiSong from './components/simisong/index.vue'
import Comment from './components/comment/index.vue'
export default Vue.extend({
  components: {
    SongBG,
    PlayCtrl,
    MainView,
    SimiSong,
    Comment
  },
  data() {
    const top = getCompatibleTop()
    const capsule = getCapsule()
    const height = getCompatibleWindowHeight()
    const scrollStyle = `height: ${height - (top + capsule.height + 15)} PX`;
    return {
      scrollStyle
    }
  },
  onLoad(options: {id: number, source: string, sourceid: number, name: string}) {
    const { id, source, sourceid, name } = options

    uni.setNavigationBarTitle({
      title: name
    })

    songdetail(id).then(res => {
      const data = res.data
      this.$store.commit('setSongDetail', data);
      songlyrics(id).then(res1 => {
        this.$store.commit('setSongLyrics', res1);
      })
      simisong(id).then(res2 => {
        this.$store.commit('setSimiSong', res2.songs);
      })
      songcomment({resourceId: id, resourceType: 4}).then(res3 => {
        this.$store.commit('setSongComment', res3.hotComments);
      })
      songurl({ids: [id]}).then(res4=>{
        if (res4.data[0].url !== null) {
          const firstData = data[0]
          this.$store.commit('setPlayerInfo', {
            songInfo: {
              id: id,
              title: firstData.name,
              epname: firstData.al.name,
              singer: firstData.ar[0].name,
              coverImgUrl: firstData.al.picUrl
            },
            src: res4.data[0].url
          });
        }
      })
    })
  }
})
</script>

<style scoped>
.newsong {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}

.song-bg,.song-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.song-mask {
  background-color: rgba(0,0,0,.5);
}

.song-bg {
  background-color: #161824;
}

.song-bg-img {
  position: absolute;
  transform: scale(1.5);
  transform-origin: center top;
}

.song-bg-img .current {
  z-index: 3;
}

.song-bg-img .next {
  z-index: 2;
}

.scroll-view {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll-view .empty-box {
  height: 83.34rpx;
}

.open-btn {
  margin: 41.67rpx 33.336rpx 0;
  height: 70.839rpx;
  border: transparent;
  border-radius: 35.4195rpx;
  background-color: rgba(255,255,255,.1);
  color: #fff;
  font-size: 29.169rpx;
}

.open-btn::after {
  border: 0;
}

.play-btn {
  position: absolute;
  top: 445.1745rpx;
  left: 50%;
  z-index: 5;
  margin-left: -52.0875rpx;
  width: 104.175rpx;
  height: 104.175rpx;
}
</style>