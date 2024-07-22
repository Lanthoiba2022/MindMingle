import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.post('/api/vi/signup', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/vi/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/vi/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/vi/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/vi/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
