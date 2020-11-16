import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const audioManager = uni.createInnerAudioContext()
audioManager.autoplay = true

audioManager.onPause(() => {
  console.log('onPause')
  store.commit('setPlayerStatus', false)
})

audioManager.onPlay(() => {
  console.log('onPlay')
  if (!store.state.playerstutes) {
    store.commit('setPlayerStatus', true)
  }
})

audioManager.onStop(() => {
  console.log('onStop')
  store.commit('setPlayerStatus', false)
})

audioManager.onEnded(() => {
  console.log('onEnded')
  store.commit('setPlayerStatus', false)
  // NextSong()
})

const setAdudioInfo = (src: string) => {
  console.log(src)
  // audioManager.title = info.title
  // audioManager.singer = info.singer
  // audioManager.epname = info.epname
  // audioManager.coverImgUrl = info.coverImgUrl
  audioManager.src = src
}

// const setScrollLyrics = (lyricsMap: Required<ActionData>['lyricsMap']) => {
//   let upperIndex = 0
//   audioManager.onTimeUpdate(() => {
//     const index = parseInt(audioManager.currentTime.toString(), 10)
//     const lyric = lyricsMap.get(index)
//     if (lyric && lyric.index >= upperIndex) {
//       upperIndex = lyric.index
//       store.dispatch(setDurationIndex({durationIndex: lyric.index}))
//     }
//   })
// }

const store = new Vuex.Store({
	state: {
    test: "init",
    toplist: [],
    songdetail: [],
    songlyrics: null,
    simisong: [],
    songcomment: [],

    playerinfo: {},
    playerstutes: false,
    src: ''
	},
	mutations: {
    setTest(state, payload: string) {
      state.test = payload;
    },
    setTopList(state, payload: []) {
      state.toplist = payload
    },
    setSongDetail(state, payload: []) {
      state.songdetail = payload
    },
    setSongLyrics(state, payload: any) {
      state.songlyrics = payload
    },
    setSimiSong(state, payload: []) {
      state.simisong = payload
    },
    setSongComment(state, payload: []) {
      state.songcomment = payload
    },
    setPlayerInfo(state, payload: any) {
      if ((state.playerinfo as any).id != payload.songInfo.id) {
        state.playerinfo = payload.songInfo
        state.src = payload.src
        setAdudioInfo(state.src)
      }
    },
    setPlayerStatus(state, payload: false) {
      if (payload) {
        setAdudioInfo(state.src)
      }
      else {
        audioManager.pause()
      }
      state.playerstutes = payload
    }
	},
  getters:{
  },
	actions: {
	}
})

export default store