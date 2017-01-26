import path from 'path'
import bookshelf from 'services/bookshelf'

global.appRoot = path.resolve(__dirname)

import Book from 'models/book'

Book.forge().fetch().then(collection => {
    console.log( collection.toJSON() )
})
