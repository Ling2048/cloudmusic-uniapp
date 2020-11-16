<template>
  <view class='simi-song '>
    <view class='simi-header'>
      <text class='title'>喜欢这首歌的人也听</text>
      <view class='play-all-recommend'>
        <image class='play-simi' :src='playSimi'/>
        <text class='btn-txt'>一键收听</text>
      </view>
    </view>
    <view>
        <view v-for="item in songs" :key="item.id" class='simisong-item'>
          <image class='simisong-img' :src="item.pic"/>
          <view class='content'>
            <text class='content-title'>
              {{item.songName}}
            </text>
            <view class='content-main'>
              <image v-if="item.isSQ" class='sq-tag' :src="sq"/>
              <text>
                {{item.singerName + ' - ' + item.albumName}}
              </text>
            </view>
          </view>
          <view class='content-btn'/>
        </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { playSimi, sq } from '@/common/icons'
export default Vue.extend({
  name: 'simi-song',
  data() {
    return {
      playSimi,
      sq
    }
  },
  computed: {
    ...mapState(['simisong']),
    songs: function() {
      return this.simisong.map((v: any) => {
        const album = v.album
        const singerName = v.artists.map((a: any) => a.name).join(' / ')
        const data = {
          id: v.id,
          songName: v.name,
          singerName: singerName,
          albumName: album.name,
          isSQ: 4e5 <= v.privilege.maxbr,
          pic: album.picUrl + '?imageView=1&thumbnail=120x0',
          privilege: v.privilege
        }
        return data;
      })
    }
  }
})
</script>

<style scoped>
.simi-song {
  position: relative;
  padding: 0 33.336rpx;
  color: #fff;
}

.simi-song .simi-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.simi-song .simi-header .title {
  font-weight: 500;
  font-size: 35.4195rpx;
  line-height: 1.5;
}

.simi-song .simi-header .play-all-recommend {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 12.501rpx 20.835rpx;
  border: 0.6945rpx solid rgba(216,216,216,.2);
  border-radius: 50.004rpx;
  font-size: 25.002rpx;
}

.simi-song .simi-header .play-all-recommend .play-simi {
  margin-right: 4.167rpx;
  width: 25.002rpx;
  height: 25.002rpx;
}

.simisong-item {
  position: relative;
  margin-top: 40.9755rpx;
  padding-right: 65.9775rpx;
  padding-left: 104.175rpx;
  height: 83.34rpx;
}

.simisong-item .simisong-img {
  position: absolute;
  left: 0;
  width: 83.34rpx;
  height: 83.34rpx;
  border-radius: 8.334rpx;
}

.simisong-item .content .content-main,.simisong-item .content .content-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  line-height: 1.5;
}

.simisong-item .content .content-title {
  display: block;
  font-size: 31.2525rpx;
}

.simisong-item .content .content-main {
  color: rgba(255,255,255,.6);
  font-size: 22.9185rpx;
}

.simisong-item .content .content-main .sq-tag {
  margin-right: 7.6395rpx;
  width: 25.002rpx;
  height: 16.668rpx;
}

.simisong-item .content-btn {
  position: absolute;
  top: 17.3625rpx;
  right: 0;
  margin: 0;
  padding: 0;
  width: 50.004rpx;
  height: 50.004rpx;
  border: 0;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiI+PGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgcj0iMzQuNSIvPjxwYXRoIGQ9Ik00Ni44MTcgMzUuMTU1TDI5LjU5MyAyNC4zODljLS44Ny0uNTQzLTEuMDkzLS40Mi0xLjA5My42MXYyMi4wMDJjMCAxLjAzMy4yMiAxLjE1NSAxLjA5My42MWwxNy4yMjQtMTAuNzY2Yy45My0uNTguOTMtMS4xMSAwLTEuNjl6Ii8+PC9nPjwvc3ZnPg==);
  background-size: contain;
  background-repeat: no-repeat;
}

.simisong-item .content-btn::after {
  border: 0;
}
</style>