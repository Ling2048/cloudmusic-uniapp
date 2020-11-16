<template>
  <view class='m-play-list' style="padding-left: 0">
    <view v-for="(v, i) in list" :key="v.id" class='list-item' 
      @click="handleItemTap(v.id, 'list', id, list)">
      <view v-if="!noOrder" class='order'>
        {{i+1}}
      </view>
      <view class='content'>
        <view class='title'>
          <highlight :title='v.name' :highlights='highlights'/>
        </view>
        <view class='info'>
          <image v-if="isVip(v.fee)" class='tag-icon' :src='vip'/>
          <image v-if="isExclusive(v.privilege.flag)" class='tag-icon' :src='cr'/>
          <image v-if="isHighQuility(v.privilege.maxbr)" class='tag-icon' :src='sq'/>
          <highlight :title="v.ar.map(v=>v.name).join('/')" :highlights='highlights'/>
          {{` - `}}
          <highlight :title="v.al.name" :highlights='highlights'/>
        </view>
      </view>
      <image class='play-icon' :src='playIconWhite'></image>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Highlight from './highlight.vue'
import { playIconWhite, vip, cr, sq } from '../../common/icons'
const isVip = (fee: number) => {
  return 0 < fee && (8 & fee) <= 0 && (fee || 16 & fee || 32 & fee)
}

const isExclusive = (flag: number) => {
  return 64 & flag;
}

const isHighQuility = (maxbr: number) => {
  return 4e5 <= maxbr;
}

const songPrivilege = (privilege: PlayListType[0]['privilege']) => {
  let t = privilege!, n = "", r = 0;
  return -300 === t.st ? (n = "版权方要求，该歌曲仅能通过网易云音乐APP播放", r = -2) : 4 === t.fee ? 0 === t.payed ? (n = "购买", 
  r = 2) : 0 < t.payed && 0 < (2048 & t.flag) && (n = "版权方要求，该歌曲须下载后播放", r = 4) : 0 < t.fee && 0 === t.pl ? (n = "会员", 
  r = 3) : 0 < t.fee && 8 !== t.fee && 32 !== t.fee && t.pl <= 0 ? (n = "唱片公司要求该歌曲须付费，打开网易云音乐购买后即可自由畅享", 
  r = 1) : t.pl <= 0 && (n = "由于版权保护，您所在的地区暂时无法使用", r = -1), {
      msg: n,
      modal: r
  };
}

// const setPrivilegeList = (list: PlayListType) => {
//   const songList = list.filter((t) => {
//       return 0 === songPrivilege(t.privilege).modal;
//   });
//   StorageSync.setStorage('songList', JSON.stringify(songList))
// }

const handleItemTap = (id: number, source: string, sourceid: number, list: PlayListType) => {
  // setPrivilegeList(list)
  uni.navigateTo({
    url: '/pages/song/index?id=' + id + '&source=' + source + '&sourceid=' + sourceid
  })
}
export default Vue.extend<any, any, any, {
  id: number,
  list: PlayListType,
  noOrder?: boolean,
  highlights: string
}>({
  name: 'play-list',
  components: {
    Highlight
  },
  props: {
    id: Number,
    list: Array,
    noOrder: Boolean,
    highlights: String,
  },
  data() {
    return {
      playIconWhite,
      vip,
      cr,
      sq
    }
  },
  methods: {
    isVip,
    isExclusive,
    isHighQuility,
    handleItemTap
  }
})
</script>

<style scoped>
.m-play-list {
  padding: 0 33.336rpx;
}

.m-play-list .list-item {
  position: relative;
  box-sizing: border-box;
  padding: 29.169rpx 118.7595rpx 29.169rpx 0;
  height: 125.01rpx;
  border-bottom: 0.6945rpx solid rgba(0,0,0,.1);
  color: #333;
  font-size: 31.2525rpx;
  padding-left: 104rpx;
  border-bottom: 0;
}

.m-play-list .list-item .order {
  position: absolute;
  top: 41.67rpx;
  left: 0;
  width: 104.175rpx;
  color: #999;
  text-align: center;
  font-size: 32.6415rpx;
  line-height: 33.336rpx;
}

.m-play-list .list-item .content {
  display: inline-block;
  width: 100%;
}

.m-play-list .list-item .content .info,.m-play-list .list-item .content .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  line-height: 1.5;
}

.m-play-list .list-item .content .info {
  color: #999;
  font-size: 22.9185rpx;
}

.m-play-list .list-item .content .info .tag-icon {
  margin-right: 6.2505rpx;
  width: 31.2525rpx;
  height: 18.7515rpx;
}

.m-play-list .list-item .play-icon {
  position: absolute;
  top: 37.503rpx;
  right: 0;
  width: 50.004rpx;
  height: 50.004rpx;
}
</style>