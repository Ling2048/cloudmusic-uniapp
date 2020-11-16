<template>
  <view class='lyrics-main'>
    <view class='lyrics-scroll'>
      <view>
        <song-lyric v-if="lyrics" :lyrics='lyrics'/>
        <text v-else>歌词加载中...</text>
      </view>
    </view>
    <button class='lyrics-btn'>
      <text>在网易云音乐查看更多歌词</Text>
      <text class='lyrics-btn-arrow'/>
    </button>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { handleLyric } from '@/common/index'
import SongLyric from './songlyric.vue'
export default Vue.extend({
  name: 'lyrics-view',
  components: {
    SongLyric
  },
  computed: {
    ...mapState(['songlyrics']),
    lyrics: function() {
      return handleLyric(this.songlyrics);
    }
  },
})
</script>

<style scoped>
.lyrics-main {
  box-sizing: border-box;
  padding-top: 62.505rpx;
  padding-bottom: 83.34rpx;
  text-align: center;
  font-size: 29.169rpx;
}

.lyrics-main .lyrics-scroll {
  position: relative;
  height: 120PX;
  color: #fff;
}

.lyrics-main .lyrics-btn {
  border: transparent;
  color: rgba(255,255,255,.8);
  vertical-align: middle;
  text-decoration: underline;
  font-size: 29.169rpx;
  line-height: 1.5;
  background-color: transparent;
  width: 100%;
}
</style>