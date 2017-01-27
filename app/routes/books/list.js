import Book from 'app/models/book'

export default (req, res, next) => {

    Book.fetchAll({ withRelated: 'author' }).then(collection => {
        res.status(200).json({
            meta: {
                code: 200,
                message: 'Loaded all books'
            }, data: collection.toJSON()
        })
    }).catch(next)

}
