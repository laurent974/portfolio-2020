import { createRouter as customCreateRouter } from '../router.js'

import { createRouter as createDefaultRouter, routerOptions } from './defaultRouter'

export function createRouter(ssrContext) {
  return customCreateRouter(ssrContext, createDefaultRouter, routerOptions)
}
