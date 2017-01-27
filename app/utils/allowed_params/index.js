import _ from 'lodash'

// only allow body fields specified in params
export default (body, params) => {

    return _.pick(body, params)

}
