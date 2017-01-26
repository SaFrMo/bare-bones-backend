import Bookshelf from 'bookshelf'
import knex from 'knex'

let knexInstance = knex({
    client: 'sqlite3',
    connection: {
        filename: '../data/db.sqlite'
    }
})

export default Bookshelf(knex)
