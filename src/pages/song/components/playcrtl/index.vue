<template>
  <view>
    <image v-if="!playerstutes" class='play-btn' :src='play' @click="playOrPause"/>
    <image v-else class='play-btn' :src='pause' @click="playOrPause"/>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { play, pause } from '../../../../common/icons'
export default Vue.extend({
  computed: {
    ...mapState(['playerstutes'])
  },
  data() {
    return {
      play,
      pause
    }
  },
  methods: {
    playOrPause: function() {
      console.log('playOrPause', this.playerstutes)
      this.$store.commit('setPlayerStatus', !this.playerstutes)
    }
  }
})
</script>

<style scoped>
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