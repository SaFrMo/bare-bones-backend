import path from 'path'
import bookshelf from 'app/services/bookshelf'
import _ from 'lodash'
import express from 'express'
import bodyparser from 'body-parser'

global.appRoot = path.resolve(__dirname)

let app                 = express()
let port                = process.env.PORT || 3000
let router              = express.Router()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Import routes
// (your code here)

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
// (your code here)

// Start service (prefixed with version)
app.use('/v1', router)
app.listen(port)
console.log(`Running on port ${port} at endpoint /v1/`)
