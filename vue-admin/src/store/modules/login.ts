import type { Module } from 'vuex'

export type Login = {
  user: string
}

const login: Module<Login, unknown> = {
  state() {
    return {
      user: 'test',
    }
  },
  mutations: {
    login(state, payload: string) {
      state.user = payload
    },
  },
}

export default login
