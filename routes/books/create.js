import Book from 'models/book'
import allowedParams from 'utils/allowed_params'

export default (req, res, next) => {

    let data = allowedParams(req.body, [
        'title', 'author_id'
    ])

    Book.forge(data).save().then( () => {
        res.status(200).json({
            meta: {
                response: 'Added book!'
            }
        })
    }).catch(next)

}
