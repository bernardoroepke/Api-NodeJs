import Fastify from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = Fastify()

const database = new DatabasePostgres

server.post('/users', async (request, reply) => {
    const { username, email, password } = request.body

    await database.create({
        username,
        email,
        password
    })

    console.log(database.list())

    return reply.status(201).send("Conta criada")
})

server.get('/users', async () => {})

server.listen({ port: 3333 })