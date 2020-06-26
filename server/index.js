const express = require('express')
const app = express()

const ctrl = require('./controller')

app.use(express.json())

app.get('/api/books', ctrl.getBooks)
app.delete('/api/books/:id', ctrl.deleteBook)

app.listen(4500, () => console.log('listening on 4500'))