<template>
  <view>
    <view class='main-view'>
      <view class='search-wrap'>
        <search/>
      </view>
      <view class='page-wrap'>
        <default v-show="searchType == 1"/>
        <recommend v-show="searchType == 2"/>
        <result v-show="searchType == 3"/>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { hotsearchlist } from '@/common/network'
import Search from './components/search/index.vue'
import Default from './components/default/index.vue'
import Recommend from './components/recommend/index.vue'
import Result from './components/result/index.vue'
export default Vue.extend({
  components: {
    Search,
    Default,
    Recommend,
    Result
  },
  onLoad() {
    hotsearchlist().then(res => {
      this.$store.commit('setHotSearchList', res.data);
    })
  },
  computed: {
    ...mapState(['searchType'])
  }
})
</script>

<style scoped>
.main-view {
  position: absolute;
  /* top: 0; */
  left: 0;
  width: 100%;
  height: 100%;
}

.main-view .search-wrap {
  /* position: fixed; */
  /* top: 0; */
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: #fff;
}

.main-view .page-wrap {
  width: 100%;
}

.main-view .search-box {
  position: relative;
  box-sizing: border-box;
  margin: 20.835rpx 33.336rpx;
  height: 72.9225rpx;
}

.main-view .search-box .search-icon {
  position: absolute;
  top: 20.1405rpx;
  left: 27.0855rpx;
  width: 33.336rpx;
  height: 33.336rpx;
}

.main-view .search-box .search-input {
  padding-right: 81.2565rpx;
  padding-left: 81.2565rpx;
  height: 100%;
  border-radius: 42.3645rpx;
  background: rgba(0,0,0,.03);
  font-size: 29.169rpx;
}

.main-view .search-box .delete-img {
  position: absolute;
  top: 0;
  right: 20.835rpx;
  padding: 24.3075rpx 20.835rpx;
  width: 25.002rpx;
  height: 25.002rpx;
}

.main-view .search-box .input-placeholder {
  color: #999;
  font-size: 29.169rpx;
}
</style>