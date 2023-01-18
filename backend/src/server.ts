import Fastfy from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastfy()
const prisma = new PrismaClient()

app.register(cors, {
    origin: ['*']
})

app.get('/habits', async () => {
    return await prisma.habit.findMany()
})

app.listen({port: 3333})
.then(() => console.log('Http server running'))