import Router from 'koa-router'
import koa2SwaggerUi from 'koa2-swagger-ui'
import yamljs from 'yamljs'
import path from 'path'

const { koaSwagger } = koa2SwaggerUi

export function makeDocsRouter() {
    const router = new Router()
    
    router.get('/docs', async (ctx, next) => {
        const openapiDoc = path.join(path.dirname(''), '/docs/api/v0/openapi.yaml')
        ctx.body = yamljs.load(openapiDoc.toString())
        await next()
    })

    return router
}

export function makeDocsUiRouter() {
    const router = new Router()
    router.get('/docs-ui', koaSwagger({routePrefix: false, swaggerOptions: {url: 'http://localhost:3000/api/v0/docs'}}))
    return router
}
