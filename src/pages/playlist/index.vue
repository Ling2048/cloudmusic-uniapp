<template>
  <view>
    <skeleton v-if="loading"/>
    <view v-else>
      <view class='playlist-bg'>
        <image class='playlist-bg-img' :src="bgImg"/>
        <view class='playlist-bg-mask'/>
      </view>
      <view/>
      <scroll-view>
        <play-list-header :playlistInfo="info"/>
        <view class='playlist-wrap'>
          <view>
            <view class='list-item'>
              <image class='play-icon' :src="playIconAll"/>
              <text class='title'>播放全部</text>
              <text class='info'>
                {{`共${playlist.length}首`}}
              </text>
            </view>
            <play-list :id='id' :list="list" highlights=""/>
          </view>
        </view>
      </scroll-view >
    </view>
  </view>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NavBar from '../../components/navbar/index.vue';
  import PlayListHeader from './components/playlistheader/index.vue';
  import PlayList from '../../components/playlist/index.vue';
  import Skeleton from '../../skeleton/playlist/index.vue';
  import { playlistdetail } from '../../common/network';
  import { mergeSongBytrack } from '../../common/index';
  import {share, playIconAll} from '../../common/icons';
  export default Vue.extend<any, any, any, any>({
    components: {
      NavBar,
      Skeleton,
      PlayListHeader,
      PlayList
    },
    data() {
      return {
        playlist: [],
        loading: true,
        list: [],
        info: {
          coverImgUrl: "",
          coverImgId_str: "",
          playCount: 0,
          name: "",
          description: "",
          creator: ""
        },
        share,
        playIconAll
      }
    },
    onLoad(options: {id: number}) {
      playlistdetail({
        id: options.id,
        shareUserId: 0
      }).then((res)=>{
        const _list = mergeSongBytrack(res.playlist.tracks, res.privileges, 0, res.playlist.tracks.length)
        
        this.playlist = _list; 
        this.list = _list.slice(0, 20);
        this.loading = false;
        this.info = {
          coverImgUrl: res.playlist.coverImgUrl,
          coverImgId_str: res.playlist.coverImgId_str,
          playCount: res.playlist.playCount,
          name: res.playlist.name,
          description: res.playlist.description,
          creator: res.playlist.creator
        }
      });
    },
    computed: {
      bgImg: function() {
        return "https://music.163.com/api/img/blur/" + this.info.coverImgId_str + "?param=40y40"
      }
    }
  })
</script>

<style scoped>
  .playlist-bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .playlist-bg .playlist-bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(27.78rpx);
    transform: scale(1.5);
    transform-origin: center top;
  }

  .playlist-bg .playlist-bg-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.15);
  }

  .no-song {
    padding-top: 32.6415rpx;
    height: 262.521rpx;
    color: #333;
    text-align: center;
  }

  .header-wrap {
    background-color: transparent;
  }

  .playlist-wrap {
    overflow: hidden;
    width: 100%;
    border-radius: 41.67rpx;
    background-color: #fff;
  }

  .btn-list .btn-wrap,.playlist-wrap .list-item {
    display: -ms-flexbox;
    display: flex;
  }

  .playlist-wrap .list-item {
    position: relative;
    -ms-flex-align: center;
    align-items: center;
    padding: 31.2525rpx 33.336rpx;
    color: #333;
  }

  .playlist-wrap .list-item .play-icon {
    margin-right: 29.169rpx;
    width: 41.67rpx;
    height: 41.67rpx;
  }

  .playlist-wrap .list-item .title {
    margin-right: 7.6395rpx;
    font-size: 33.336rpx;
  }

  .playlist-wrap .list-item .info {
    color: rgba(0,0,0,.3);
    font-size: 27.0855rpx;
  }

  .btn-list {
    margin-bottom: 41.67rpx;
    height: 70.839rpx;
    text-align: center;
  }

  .btn-list .btn-wrap {
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-right: 33.336rpx;
    padding-left: 33.336rpx;
  }

  .btn-list .btn {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    width: 331.2765rpx;
    height: 70.839rpx;
    border: 0;
    border-radius: 35.4195rpx;
    background-color: rgba(255,255,255,.1);
    color: #fff;
    font-size: 29.169rpx;
    line-height: 70.839rpx;
  }

  .btn-list .btn::after {
    border: 0;
  }

  .btn-list .btn .btn-icon {
    margin-right: 12.501rpx;
    width: 29.169rpx;
    height: 29.169rpx;
    vertical-align: middle;
  }

  .btn-list .btn .btn-msg {
    vertical-align: middle;
  }
</style>