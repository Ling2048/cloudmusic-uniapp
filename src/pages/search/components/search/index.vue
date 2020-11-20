<template>
  <view class='search-box'>
    <image class='search-icon' :src='searchIcon'/>
    <input
      class='search-input'
      placeholder='搜索歌曲'
      placeholder-style="color: '#a3a3a3'"
      focus='true'
      @input="onInput"
      @confirm="onConfirm"
      type='text'
      v-model="value"
    />
    <image 
      class='delete-img' 
      :src='deleteInputIcon'
      @click="onDel()"
      :style="{visibility: del ? 'visible' : 'hidden'}"
      />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { suggest, search } from '@/common/network'
import { searchIcon, deleteInputIcon } from '@/common/icons'
export default Vue.extend({
  name: 'search',
  data() {
    return {
      searchIcon,
      deleteInputIcon,
      del: false,
      value: ''
    }
  },
  methods: {
    onInput(event: any) {
      var value = event.target.value as string;
      if (value.length <= 0) {
        this.del = false
        this.$store.commit('setSearchType', 1)
        return;
      }
      if (!this.del) this.del = true
      this.$store.commit('setSearchValue', value)
      this.$store.commit('setSearchType', 2)
      suggest(value).then((res)=>{
      if (res.result !== undefined && res.result.allMatch !== undefined) {
          this.$store.commit('setRecommendList', res.result.allMatch);
        }
      })
    },
    onConfirm(event: any) {
      const value = event.detail.value
      console.log('onConfirm', event)
      this.$store.dispatch('Search', {
        s: value,
        limit: 20,
        offset: 0,
        queryCorrect: true
      });
    },
    onDel() {
      this.value = ''
      this.del = false
      this.$store.commit('setSearchType', 1)
    }
  }
})
</script>

<style scoped>
.search-box {
  position: relative;
  box-sizing: border-box;
  margin: 20.835rpx 33.336rpx;
  height: 72.9225rpx;
  display: flex;
}

.search-box .search-icon {
  position: absolute;
  top: 20.1405rpx;
  left: 27.0855rpx;
  width: 33.336rpx;
  height: 33.336rpx;
}

.search-box .search-input {
  padding-right: 81.2565rpx;
  padding-left: 81.2565rpx;
  height: 100%;
  border-radius: 42.3645rpx;
  background: rgba(0,0,0,.03);
  font-size: 29.169rpx;
  border: none;
  flex-grow: 1;
}

.search-box .delete-img {
  position: absolute;
  top: 0;
  right: 20.835rpx;
  padding: 24.3075rpx 20.835rpx;
  /* margin: 24.3075rpx 20.835rpx; */
  width: 25.002rpx;
  height: 25.002rpx;
}

.outer-padding {
  padding: 24.3075rpx 20.835rpx;
}

.outer-margin {
  margin: 24.3075rpx 20.835rpx;
}

.search-box .input-placeholder {
  color: #999;
  font-size: 29.169rpx;
}
</style>