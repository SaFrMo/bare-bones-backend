import path from 'path'
import bookshelf from 'services/bookshelf'

global.appRoot = path.resolve(__dirname)

import Book from 'models/book'
import Author from 'models/author'

Book.forge().fetch({ withRelated: 'author' }).then(author => {
    console.log(author.get('name'))
})
