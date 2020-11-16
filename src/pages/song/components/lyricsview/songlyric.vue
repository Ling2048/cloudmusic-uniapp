<template>
  <view class='song-lyric' style="overflow: scroll">
    <view class='lyric-wrap'>
      <!-- style={{transform: 'translate3D(0, ' + 40 * -s + 'PX, 0)'}}> -->
      <view v-if="!lyrics.scrollable || !lyrics.nolyric" class='lyric-item'>该歌词不支持滚动</view>
      <view v-if="!lyrics.lines" class='lyric-item focus'>纯音乐，无歌词</view> 
      <view v-else v-for="(item, i) in lyrics.lines" :key='i' class='lyric-item'>{{item.lyric}}</view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'song-lyric',
  props: { 
    lyrics: {}
  }
})
</script>

<style scoped>
.song-lyric {
  padding: 0 33.336rpx;
  height: 120PX;
}

.song-lyric .lyric-wrap {
  transition: transform .3s ease-out;
  transition: transform .3s ease-out,-webkit-transform .3s ease-out;
}

.song-lyric .lyric-wrap .lyric-item {
  overflow: hidden;
  margin-bottom: 16PX;
  color: rgba(250,250,250,.4);
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  font-size: 16PX;
  line-height: 1.5;
}

.song-lyric .lyric-wrap .focus {
  color: #fff;
}
</style>