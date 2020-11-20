<template>
  <view class='search-recommend'>
    <view class='search-item title'>
      搜索”{{searchValue}}“
    </view>
    <view>
      <view v-for="(v,i) in recommendList" :key='i' class='search-item' @click="handleClick(v.keyword)">
        <image class='search-icon' :src='searchIcon'/>
        {{v.keyword}}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import {searchIcon} from '@/common/icons'
export default Vue.extend({
  name: 'recommend',
  data() {
    return {
      searchIcon
    }
  },
  computed: {
    ...mapState(['recommendList', 'searchValue'])
  },
  methods: {
    handleClick(value: string) {
      this.$store.dispatch('Search', {
        s: value,
        limit: 20,
        offset: 0,
        queryCorrect: true
      });
    }
  }
})
</script>

<style scoped>
.search-recommend {
  border-top: 0.6945rpx solid rgba(0,0,0,.1);
}

.search-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 60.4215rpx;
  height: 104.175rpx;
  color: #666;
  font-size: 29.169rpx;
}

.search-item .search-icon {
  margin-right: 20.835rpx;
  width: 33.336rpx;
  height: 33.336rpx;
}

.title {
  color: #507daf;
}
</style>