import * as types from './mutation-types'

export const mutations = {
  [types.GET_JOKES] (state, payload) {
    state.jokes.unshift(...payload)
  },

  [types.GET_JOKE] (state, payload) {
    state.jokes.unshift(payload)
  },

  [types.REMOVE_JOKE] (state, index) {
    state.jokes.splice(index, 1)
  },

  [types.SPINNER] (state, payload) {
    state.spinner = payload
  }
}