import type { Router, RouteLocationRaw } from 'vue-router'
import { ref } from 'vue'

const router = ref<Router>()

const init = (vueRouter: Router) => {
  router.value = vueRouter
  console.log('Navigation initialized with router:', router.value)
}

const push = async (to: string | RouteLocationRaw, query?: Record<string, never>) => {
  if (!router.value) return
  console.log('Pushing to:', to)
  if (typeof to === 'string') {
    await router.value.push({
      path: to,
      query
    })
  } else {
    await router.value.push(to)
  }
}

const replace = async (to: string | RouteLocationRaw, query?: Record<string, never>) => {
  if (!router.value) return

  if (typeof to === 'string') {
    await router.value.replace({
      path: to,
      query
    })
  } else {
    await router.value.replace(to)
  }
}

const refresh = () => {
  if (!router.value) return
  router.value.go(0)
}

const back = () => {
  if (!router.value) return
  router.value.back()
}

const getParams = (key: string) => {
  if (!router.value) return undefined
  return router.value.currentRoute.value.params[key]
}

const getQuery = (key: string) => {
  if (!router.value) return undefined
  return router.value.currentRoute.value.query[key]
}

const getCurrentPath = () => {
  if (!router.value) return ''
  return router.value.currentRoute.value.path
}

const getCurrentFullPath = () => {
  if (!router.value) return ''
  return router.value.currentRoute.value.fullPath
}

export default {
  init,
  push,
  replace,
  refresh,
  back,
  getParams,
  getQuery,
  getCurrentPath,
  getCurrentFullPath
}
