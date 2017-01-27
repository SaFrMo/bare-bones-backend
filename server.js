import path from 'path'
import bookshelf from 'services/bookshelf'
import _ from 'lodash'
import express from 'express'

global.appRoot = path.resolve(__dirname)

let app                 = express()
let port                = process.env.PORT || 3000
let router              = express.Router()

// Import routes
//import bookRoute        from 'routes/add'
import bookRoute from 'routes/books'

// heartbeat
router.get('/', (req, res) => {
    res.json({
        meta: {
            success: true,
            code: 200,
            message: 'The API is up and running.'
        }
    })
})

// Map routes
//router.use('/add', addRoute)
router.use('/books', bookRoute)

// Start service (prefixed with version)
app.use('/v1', router)
app.listen(port)
console.log(`Running on port ${port} at endpoint /v1/`)

// import Book from 'models/book'
//
// var nextBook = new Book({
//     title: 'Juneteenth',
//     author_id: 1
// })
// nextBook.save()
//
// Book.forge().fetchAll({ withRelated: 'author' }).then(collection => {
//     _.forEach( collection.serialize(), val => {
//         console.log(`${val.title}, by ${val.author.name}\n`)
//     })
// })
