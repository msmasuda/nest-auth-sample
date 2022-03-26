import type { InjectionKey } from 'vue'
import { createStore } from 'vuex'

import type { Store } from 'vuex'
import modules from './modules'
import type { Counter } from './modules/counter'
import type { Login } from './modules/login'

export type RootState = {
  counter: Counter
  login: Login
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  modules,
})
