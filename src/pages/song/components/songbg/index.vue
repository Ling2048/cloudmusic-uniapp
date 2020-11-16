<template>
  <view>
    <view v-if="songdetail" class='song-bg'>
      <Image class='song-bg-img current' :style="current" :src="pic"/>
      <Image class='song-bg-img next' :style="next" :src="pic"/>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { getCompatibleWindowHeight } from '../../../../common/index'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'song-bg',
  data() {
    const height = getCompatibleWindowHeight()
    const data = {
      current: `width: ${height}PX; height: ${height}PX; left: -${.5 * height / 2}PX`,
      next: `width: ${height}PX; height: ${height}PX; left: -${.5 * height / 2}PX`,
    }

    return data;
  },
  computed: {
    ...mapState(['songdetail']),
    pic: function() {
      const data = this.songdetail;
      return data ? 'https://music.163.com/api/img/blur/' + (data[0]?.al.pic_str || data[0]?.al.pic) + '?param=90y90' : ''
    }
  },
  mounted() {

  }
})
</script>

<style scoped>
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
</style>