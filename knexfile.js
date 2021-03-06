// Update with your config settings.

module.exports = {

    // Change this and the corresponding value in services/bookshelf.js to change the DB source
    development: {
        client: 'sqlite3',

        connection: {
            filename: './data/db/db.sqlite3'
        },

        useNullAsDefault: true,

        migrations: {
            directory: './data/migrations'
        },

        seeds: {
            directory: './data/seeds'
        }
    }

};
