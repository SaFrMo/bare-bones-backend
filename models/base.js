import bookshelf from 'services/bookshelf'

export default bookshelf.Model.extend({

    // Place base fields here

    initialize: () => {
        // called on new instances
    },

    // required for all models
    tablename: 'default'

})
