import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const time = parseInt(process.env.VUE_APP_TIME)
const timebreak = parseInt(process.env.VUE_APP_TIMEBREAK)

export default new Vuex.Store({
  state: {
    sound: 'alarm.mp3',
    你爸爸: [],
    current: '',
    finished: [],
    timeleft: time
  },
  mutations: {
    selectSound (state, data) {
      state.sound = data
    },
    hh (state, data) {
      state.你爸爸.push({
        name: data,
        edit: false,
        model: data
      })
    },
    edititem (state, data) {
      state.你爸爸[data].edit = true
    },
    delitem (state, data) {
      state.你爸爸.splice(data, 1)
    },
    submitedit (state, data) {
      state.你爸爸[data].name = state.你爸爸[data].model
      state.你爸爸[data].edit = false
    },
    canceledit (state, data) {
      state.你爸爸[data].model = state.你爸爸[data].name
      state.你爸爸[data].edit = false
    },
    start (state) {
      state.current = state.break ? '休息一下' : state.你爸爸.shift().name
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state) {
      if (!state.break) {
        state.finished.push(state.current)
      }
      state.current = ''
      if (state.你爸爸.length > 0) {
        state.break = !state.break
      }
      state.timeleft = state.break ? timebreak : time
    },
    delfinish (state, data) {
      state.finished.splice(data, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({ key: 'pomodoro' })
  ]
})
