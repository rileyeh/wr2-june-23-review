let books = [
    {
        id: 10,
        title: 'Harry Potter and the Chamber of Secrets', 
        author: 'JK Rowling'
    }, 
    {
        id: 11,
        title: 'To Kill A Mockingbird',
        author: 'Harper Finch'
    }, 
    {
        id: 12,
        title: 'ABC',
        author: 'Harper Lee'
    }, 
    {
        id: 13,
        title: '123',
        author: 'Harper Lee'
    }
]
let bookId = 14

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    }, 
    deleteBook: (req, res) => {
        const {id} = req.params
        const index = books.findIndex(book => book.id === +id)
        books.splice(index, 1)
        res.status(200).send(books)
    }
}