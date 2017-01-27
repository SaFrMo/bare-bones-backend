import base from './base'
import Author from './author'

export default base.extend({

    tableName: 'books',

    author: function() {
        return this.belongsTo(Author)
    }

})
