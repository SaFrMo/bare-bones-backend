import path from 'path'
import bookshelf from 'services/bookshelf'
import _ from 'lodash'

global.appRoot = path.resolve(__dirname)

import Book from 'models/book'

var nextBook = new Book({
    title: 'Juneteenth',
    author_id: 1
})
nextBook.save()

Book.forge().fetchAll({ withRelated: 'author' }).then(collection => {
    //console.log(author.related('author').get('name'))
    _.forEach( collection.serialize(), val => {
        console.log(`${val.title}, by ${val.author.name}\n`)
    })
})
