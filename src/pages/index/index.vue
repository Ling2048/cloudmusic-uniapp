<template>
	<view class="index">
	    <!-- <nav-bar name='网易云音乐-uni-app'/> -->
      <skeleton v-if="!loaded"/>
	    <view v-else class="wrap">
	      <!-- <view class="empty"/> -->
	      <view class="search-box" @click="search()">
	        <image class="search-icon" :src="searchIcon"/>
	        <text class="search-text">
	          搜索歌曲
	        </text>
	      </view>
	      <top-list/>
	    </view>
	</view>
</template>

<script lang="ts">
  import Vue from 'vue'
  import NavBar from '../../components/navbar/index.vue'
  import TopList from './components/toplist/index.vue'
  import Skeleton from '../../skeleton/index/index.vue'
  import { searchIcon } from '../../common/icons'
  import { toplist } from '../../common/network'
	export default Vue.extend({
		components: {
      NavBar,
      TopList,
      Skeleton
    },
		data() {
			return {
				title: 'Hello',
        searchIcon: searchIcon,
        loaded: false,
        test: {
          name: '123'
        }
			}
		},
    mounted() {
      toplist().then((res)=>{
        this.loaded = true;
        this.$store.commit('setTopList', (res.data as any).filter((v: any) => 'OFFICIAL' === v.categoryCode)[0]?.list.slice(0, 4));
      });
    },
    methods: {
      search() {
        uni.navigateTo({
          url: '/pages/search/index'
        })
      }
    }
	});
</script>

<style scoped>
	.index .wrap {
	  margin: 0 33.336rpx;
	}
	
	.index .empty {
	  height: 181.2645rpx;
	}
	
	.index .search-box {
	  position: relative;
	  display: -ms-flexbox;
	  display: flex;
	  -ms-flex-align: center;
	  align-items: center;
	  margin: 20.835rpx 0 31.2525rpx;
	  height: 72.9225rpx;
	  border-radius: 42.3645rpx;
	  background: rgba(0,0,0,.03);
	  color: #999;
	  font-size: 29.169rpx;
	}
	
	.index .search-box .search-icon {
	  margin-left: 27.0855rpx;
	  width: 33.336rpx;
	  height: 33.336rpx;
	}
	
	.index .search-box .search-text {
	  margin-left: 20.835rpx;
	}
	
	.index .toplist {
	  margin-bottom: 20.835rpx;
	  color: #fff;
	  font-size: 21.5295rpx;
	}
	
	.index .toplist .left {
	  position: relative;
	}
	
	.index .toplist .left .cover {
	  width: 213.906rpx;
	  height: 213.906rpx;
	  border-radius: 8.334rpx;
	}
	
	.index .toplist .left .text {
	  position: absolute;
	  bottom: 13.1955rpx;
	  left: 12.501rpx;
	}
	
	.index .toplist,.index .toplist .right {
	  display: -ms-flexbox;
	  display: flex;
	}
	
	.index .toplist .right {
	  flex-direction: column;
	  margin: 25.002rpx 0 24.3075rpx 20.835rpx;
	  width: 415.311rpx;
	  color: #666;
	  font-size: 27.0855rpx;
	}
	
	.index .toplist .right .song {
	  overflow: hidden;
	  margin-bottom: 31.947rpx;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	}
	
	.index .toplist .right .song:last-child {
	  margin-bottom: 0;
	}
</style>
