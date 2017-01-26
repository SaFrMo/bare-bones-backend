import path from 'path'

global.appRoot = path.resolve(__dirname)

import Book from 'models/book'



let test = new Book
console.log(test)
