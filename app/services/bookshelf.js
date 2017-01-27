import Bookshelf from 'bookshelf'
import knex from 'knex'
import settings from 'knexfile'

// Change this and the corresponding setting in knexfile.js to change the DB source
export default Bookshelf( knex( settings.development ) )
