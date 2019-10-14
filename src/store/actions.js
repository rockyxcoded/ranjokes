import * as types from './mutation-types'

export const getJokes = ({commit}) => {
  commit('SPINNER', true)  
  fetch('https://official-joke-api.appspot.com/random_ten')
  .then(response => {
      commit('SPINNER', false)
      return response.json()
    }
  )
  .then(jokes => commit(types.GET_JOKES, jokes))
}

export const getJoke = ({commit}) => {
  commit('SPINNER', true)
  fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => {
      commit('SPINNER', false)
      return response.json()
    }
  )
  .then(joke => commit(types.GET_JOKE, joke))
}

export const removeJoke = ({commit}, index) => commit(types.REMOVE_JOKE, index) 