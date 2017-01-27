### What
bare-bones-backend is a simple way to get up and running writing a Node app in ES6 with Knex, Bookshelf, and SQLite 3.

### How

#### Initial Setup
1. `npm install`
1. `npm run reset` (seeds with sample data)
1. `npm start` (starts server on localhost:3000)

#### Creating Database Schema
1. Run `knex migrate:make YOUR-DATABASE-NAME`. The resulting migration file will appear in `data/migrations`.
1. Follow the instructions at the [docs](http://knexjs.org/#Schema) or [here](http://www.dancorman.com/knex-your-sql-best-friend/) (under the 'Using Migrations' heading) to define your schema.
    1. (Optional) Seed your data. See [here](http://knexjs.org/#Seeds-CLI) for more details.
1. From there, you can define computed values and models/collections as they appear in code using [Bookshelf.js](http://bookshelfjs.org/index.html#).

#### Testing
1. Create standard [Mocha](https://mochajs.org/) / [Chai](http://chaijs.com/) tests in any file that ends with `_test.js`.
1. `npm run test`.
