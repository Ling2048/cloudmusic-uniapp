import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
    test: "init",
    toplist: [],
    songdetail: [],
    songlyrics: null,
    simisong: [],
    songcomment: [],

    playerinfo: {},
    playerstutes: false
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
    setPlayerInfo(state, payload: {}) {
      state.playerinfo = payload
    },
	},
  getters:{
  },
	actions: {
	}
})

export default store