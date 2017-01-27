
exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.createTable('books', t => {
            t.increments().primary()
            t.string('title')
            t.integer('author_id').references('id').inTable('authors')
            t.timestamps()
        }),

        knex.schema.createTable('authors', t => {
            t.increments().primary()
            t.string('name')
            t.integer('top_seller_id').references('id').inTable('books')
        })

    ])

}

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('books'),
        knex.schema.dropTable('authors')
    ])
}
