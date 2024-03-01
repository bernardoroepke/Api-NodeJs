import { sql } from './db.js'

export class DatabasePostgres {
    async list() {
        const users = await sql`select * from users`

        return users
    }

    async create(user) {
        const { username, email, password } = user

        await sql`insert into users (username, email, password) values (${username}, ${email}, ${password})`
    }
    
    async update(id, user) {

    }

    async delete(id) {

    }
}