<template>
  <scroll-view>
    <view class='search-result'>
      <play-list v-if="songList.songs != null && songList.songs.length > 0" :id='0' :list="songList.songs" highlights=""/>
      <view v-else class='no-result'>
        暂无搜索结果
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import PlayList from '@/components/playlist/index.vue'
export default Vue.extend({
  components: {
    PlayList
  },
  computed: {
    ...mapState(['songList'])
  }
})
</script>

<style scoped>
.search-result {
  border-top: 0.6945rpx solid rgba(0,0,0,.1);
}

.search-result .no-result {
  height: 125.01rpx;
  color: #999;
  text-align: center;
  font-size: 32.6415rpx;
  line-height: 125.01rpx;
}

.search-result .empty {
  height: 59.727rpx;
}

@media only screen and (device-width:375rpx) and (device-height:812rpx) {
  .search-result {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
  }
}

@media only screen and (device-width:414rpx) and (device-height:896rpx) {
  .search-result {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>