import { handler } from './build/handler.js';
import polka from 'polka'
import { createServer } from 'http2'

const { PORT = 3000 } = process.env

const app = polka()

app.use(handler)

createServer({}, app.handler).listen(PORT, (_) => {
    console.log(`> Running on http://localhost:${PORT}`)
})

