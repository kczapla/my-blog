import Router from 'koa-router'
import koa2SwaggerUi from 'koa2-swagger-ui'
import { default as apiDoc } from './api.json'

const { koaSwagger } = koa2SwaggerUi

export function makeDocsRouter() {
    const router = new Router()
    
    router.get('/docs', async (ctx, next) => {
        ctx.body = apiDoc
        await next()
    })

    return router
}

export function makeDocsUiRouter() {
    const router = new Router()
    router.get('/docs-ui', koaSwagger({routePrefix: false, swaggerOptions: {url: 'http://localhost:3000/api/docs'}}))
    return router
}
