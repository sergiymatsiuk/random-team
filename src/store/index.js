import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeRandom: [],
    arrayAfterRandom: [],
    showSelectRandom: true,
    numberRandom: 0
  },
  getters: {
    typeRandom (state) {
      return state.typeRandom
    }
  },
  mutations: {
    SET_TYPE_RANDOM (state, payload) {
      state.typeRandom = payload
    },
    SET_FINISH_ARRAY (state, payload) {
      state.arrayAfterRandom = payload
    },
    RESET_FINISH_ARRAY (state) {
      state.arrayAfterRandom = []
    },
    CHANGE_SELECT_RANDOM (state, payload) {
      state.showSelectRandom = payload
    },
    CHANGE_COUNT_RANDOM (state) {
      state.numberRandom += 1
    }
  },
  actions: {
    startRandom ({ dispatch, commit }, payload) {
      commit('CHANGE_SELECT_RANDOM', false)
      commit('CHANGE_COUNT_RANDOM')

      const onlyNameArray = payload.map(el => {
        return el.map(el => {
          return el.name
        })
      })

      dispatch('doRandom', onlyNameArray)
    },

    doRandom ({ dispatch }, payload) {
      const afterRandom = payload
      for (let i = 0; i < afterRandom.length; i++) {
        for (let j = 0; j < afterRandom[i].length; j++) {
          const randomIdx = Math.floor(Math.random() * afterRandom[i].length)
          const num = afterRandom[i][j]
          afterRandom[i][j] = afterRandom[i][randomIdx]
          afterRandom[i][randomIdx] = num
        }
      }
      dispatch('divisionIntoTeam', afterRandom)
    },

    divisionIntoTeam ({ commit }, payload) {
      if (payload.length >= 5) {
        const finishArr = [[], [], []]
        payload.forEach(el => {
          finishArr[0].push(el[0])
          finishArr[1].push(el[1])
          finishArr[2].push(el[2])
        })
        commit('SET_FINISH_ARRAY', finishArr)
      } else {
        const finishArr = [[], []]
        payload.forEach(el => {
          const arrLength = el.length
          el.forEach((el, idx) => {
            if (idx < arrLength / 2) {
              finishArr[0].push(el)
            } else {
              finishArr[1].push(el)
            }
          })
        })
        commit('SET_FINISH_ARRAY', finishArr)
      }
    }
  },
  modules: {
  }
})
