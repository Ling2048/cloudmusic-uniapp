<template>
  <view>
    <!-- <view class='search-history'>
      <view class='title'>
        <text>历史记录</text>
        <image class='delete-icon' :src='deleteIcon' @click="handleDelete()"/>
      </view>
      <view>
        {list}
      </view>
    </view> -->

    <view class='m-hot-search-list'>
      <view class='title'>热搜榜</view>
      <view class='list'>
        <view v-for="(v, i) in hotSearchList" :key='i' class='list-item'>
          <view :class="{left: 'left', top: i <= 2}">{{i+1}}</view>
          <view class='middle'>
            <view class='title'>
              <text class='text'>{{v.searchWord}}</text>
              <image v-if="icontTypes[v.iconType]" 
                :class='icontTypes[v.iconType].className' 
                :src='icontTypes[v.iconType].icon'/>
              <!-- {{v.iconType}} -->
            </view>
            <view class='content'>
              {{v.content}}
            </view>
          </view>
          <view class='right'>{{v.score}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { deleteIcon, upIcon, hotIcon, newIcon } from '@/common/icons'

const icontTypes: {
  [key: number]: {className: any, icon: string}
} = {
  1: {
    className: 'hot-icon',
    icon: hotIcon
  },
  2: {
    className: 'new-icon',
    icon: newIcon
  },
  5: {
    className: 'up-icon',
    icon: upIcon
  },
}

export default Vue.extend({
  name: 'default',
  data() {
    return {
      deleteIcon,
      upIcon,
      hotIcon,
      newIcon,
      icontTypes
    }
  },
  computed: {
    ...mapState(['hotSearchList'])
  },
  methods: {
    handleDelete() {

    }
  }
})
</script>

<style scoped>
.m-hot-search-list {
  margin-left: 33.336rpx;
  color: #333;
}

.m-hot-search-list .title {
  font-weight: 500;
  font-size: 29.169rpx;
}

.m-hot-search-list .list-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  padding: 22.9185rpx 33.336rpx 28.4745rpx 0;
}

.m-hot-search-list .list-item .left {
  box-sizing: border-box;
  padding-left: 9.723rpx;
  width: 10%;
  font-weight: 500;
  font-size: 33.336rpx;
}

.m-hot-search-list .list-item .top {
  color: #ff3a3a;
}

.m-hot-search-list .list-item .normal {
  color: #999;
}

.m-hot-search-list .list-item .middle {
  width: 70%;
}

.m-hot-search-list .list-item .middle .title {
  overflow: hidden;
  margin-bottom: 2.778rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 33.336rpx;
}

.m-hot-search-list .list-item .middle .title .text {
  margin-right: 12.501rpx;
}

.m-hot-search-list .list-item .middle .title .up-icon {
  width: 20.835rpx;
  height: 25.6965rpx;
}

.m-hot-search-list .list-item .middle .title .hot-icon {
  width: 53.4765rpx;
  height: 25.002rpx;
}

.m-hot-search-list .list-item .middle .title .new-icon {
  width: 59.0325rpx;
  height: 25.002rpx;
}

.m-hot-search-list .list-item .middle .content {
  overflow: hidden;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 25.002rpx;
}

.m-hot-search-list .list-item .right {
  width: 20%;
  color: #ccc;
  text-align: end;
  font-size: 25.002rpx;
}

.search-history {
  margin-bottom: 65.283rpx;
  padding: 20.835rpx 32.6415rpx 0;
}

.search-history .title {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 31.2525rpx;
  color: #333;
  font-weight: 500;
  font-size: 29.169rpx;
}

.search-history .title .delete-icon {
  width: 27.0855rpx;
  height: 27.0855rpx;
}

.search-history .history-tag {
  display: inline-block;
  margin-right: 18.7515rpx;
  margin-bottom: 20.835rpx;
  padding: 0 25.002rpx;
  height: 62.505rpx;
  border-radius: 69.45rpx;
  background: rgba(0,0,0,.03);
  color: #333;
  text-align: center;
  white-space: nowrap;
  font-size: 27.0855rpx;
  line-height: 62.505rpx;
}
</style>