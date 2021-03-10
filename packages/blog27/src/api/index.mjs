import Router from 'koa-router'
import makePostRouter from './post/router.mjs'
import PostController from './post/controller.mjs'

const router = new Router({
    prefix: '/api'
})

router.use(makePostRouter(new PostController).routes())

export default router
