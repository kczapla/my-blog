import Router from 'koa-router'
import { makePostRouter, PostController } from './post'

function makeApiRouter() {
    const router = new Router({
        prefix: '/api'
    })
    
    router.use(makePostRouter(new PostController).routes())
    return router
}

export default makeApiRouter
