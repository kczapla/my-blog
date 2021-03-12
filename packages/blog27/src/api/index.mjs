import Router from 'koa-router'
import { makePostRouter, PostController } from './post'
import { makeDocsRouter, makeDocsUiRouter } from './docs'

function makeApiRouter() {
    const router = new Router({
        prefix: '/api'
    })
    
    router.use(makeDocsRouter().routes())
    router.use(makeDocsUiRouter().routes())
    router.use(makePostRouter(new PostController).routes())

    return router
}

export default makeApiRouter
