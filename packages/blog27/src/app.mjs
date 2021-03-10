import Koa from 'koa'
import router from './api/index.mjs'

const app = new Koa()

app.use(router.routes())
app.listen(3000)
