import { enData } from './cmcode/index'

let base = 'https://music.163.com'

// #ifdef H5
  base = ''
// #endif

const Post = <T>(url: string, data: any) => {
  return (uni.request({
    url: base + url,
    data: enData(data),
    method: 'POST',
    header:{
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }) as any as Promise<any>).then((res: any)=>{
    if (res.length > 0) {
      if (res[1].data.code == 200) {
        return res[1].data;
      }
    }
  }) as Promise<T>;
}

const toplist = () => {
  return Post<TopList>('/weapi/toplist/detail/v2', {});
}

const suggest = (keyword: string) => {
  return Post<RecommendList>('/weapi/search/suggest/keyword', {
    s: keyword
  })
}

const hotsearchlist = () => {
  return Post<HotSearchList>('/weapi/hotsearchlist/get', {})
}

const search = (params: {
  s: string,
  limit: number,
  offset: number,
  queryCorrect: boolean,
}) => {
  return Post<SearchList>('/weapi/search/get', {
    ...params,
    type: 1,
    strategy: 5,
  })
}

const playlistdetail = (params: {
  id: number,
  shareUserId: number
}) => {
  return Post<PlayListDetail>('/weapi/v6/playlist/detail', {
    ...params,
    n: 1e3,
    recalcSize: !1
  })
}

const songdetail = (id: number) => {
  return Post<SongDetail>('/weapi/static/songassembler/song/detail/get', {
    idversion: JSON.stringify([{
      id: id
    }]),
    v: 0
  })
}

const songlyrics = (id: number) => {
  return Post<SongLyrics>('/weapi/song/lyric', {
    id: id,
    lv: 0,
    tv: 0
  })
}

const simisong = (id: number) => {
  return Post<SimiSong>('/weapi/v1/discovery/simiSong', {
    songid: id
  })
}

const songcomment = (params: {
  resourceType: number,
  resourceId: number
}) => {
  return Post<SongComment.RootObject>('/weapi/v1/resource/comments/get', {
    ...params,
    limit: 15,
    commentsNum: 5
  })
}

const songurl = (params: {
  ids: number[]
}) => {
  return Post<SongUrl.RootObject>('/weapi/song/enhance/player/url/v1', {
    ...params,
    encodeType: 'acc',
    level: 'standard',
  })
}

export {
  toplist,
  suggest,
  hotsearchlist,
  search,
  playlistdetail,
  songdetail,
  songlyrics,
  simisong,
  songcomment,
  songurl
}