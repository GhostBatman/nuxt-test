import API_URL from '../const/api'

export const state = () => ({
  user: {},
  isAuthenticated: false
})
export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_AUTH(state, payload) {
    state.isAuthenticated = payload
  }
}
export const getters = {
  GET_USER({user}) {
    return user
  },
  IS_AUTH({isAuthenticated}) {
    return isAuthenticated
  }
}
export const actions ={
  GET_USER({commit}, username = 'GhostBatman') {
    return new Promise((resolve, reject) => {
      this.$axios.get(`${API_URL}/users/${username}`)
        .then(res => {
          commit('SET_USER', res.data)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
