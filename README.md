### What
bare-bones-backend is a simple way to get up and running writing a Node app in ES6 with Knex, Bookshelf, and SQLite 3.

### How
1. `npm install`
1. Seeding values (filling the database with sample data):
    1. *Either* run `npm run seed` to populate with the sample data,
    1. *or* run `knex migrate:make YOUR-MIGRATION-NAME` to set your own terms for the migration, then run `knex seed:make YOUR-SEED-NAME` to create a seed file. Click for details on [migrations](http://knexjs.org/#Schema) and [seeding](http://knexjs.org/#Seeds-CLI). After this, you can run `npm run seed` to use your own seed values.
