import { expect } from 'chai'
import Base from './base'

describe('base model', () => {

    it( 'should contain "initialize" method and "tablename" property', () => {

        let instance = Base.forge()
        expect(instance)
            .to.respondTo('initialize')
            .and.to.have.property('tablename')

    })

})
