export { default as Aside } from '../..\\components\\aside.vue'

export const LazyAside = import('../..\\components\\aside.vue' /* webpackChunkName: "components_aside" */).then(c => c.default || c)
