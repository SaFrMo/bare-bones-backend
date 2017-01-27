
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert([
            {
                title: 'The Invisible Man',
                author_id: 1
            }
        ]),
        knex('authors').insert([
            {
                name: 'Ralph Ellison',
                top_seller_id: 1
            }
        ])
      ]);
    });
};
