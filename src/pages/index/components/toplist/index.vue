<template>
  <view class="index">
    <view v-for="item in toplist" :key="item.id" class="toplist" @click="handleItemTap(item.id)">
      <view class="left">
        <Image class="cover" :src="item.coverUrl"/>
        <Text class="text">
          {{item.updateFrequency}}
        </Text>
      </view>
      <view class="right">
        <view v-for="(track, index) in item.tracks.slice(0, 3)" :key="track.first + track.second" class="song">
          {{(index + 1) + '.' + track.first + ' ‐ ' + track.second}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
	export default {
    name: 'toplist',
    computed: {
      ...mapState(['toplist'])
    },
		data() {
			return {
				
			}
		},
		methods: {
			handleItemTap(id) {
        uni.navigateTo({
          url: '/pages/playlist/index?id=' + id
        })
      }
		}
	}
</script>

<style>
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
