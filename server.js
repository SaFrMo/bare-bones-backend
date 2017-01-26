import path from 'path'

global.appRoot = path.resolve(__dirname)

import Book from 'models/book'



let test = new Book({
    title: 'One Thousand and One Nights',
    author: 'Scheherazade'
})

test.save().then(result => {
    console.log(result)
})

console.log(test)
