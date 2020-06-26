import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    axios.get('/api/books').then(res => {
      this.setState({
        books: res.data
      })
    })
  }

  deleteOneBook = banana => {
    axios.delete(`/api/books/${banana}`).then(res => {
      this.setState({
        books: res.data
      })
    })
  }

  render() {
    console.log(this.state)

    const mappedBooks = this.state.books.map(book => {
      return (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <button onClick={() => this.deleteOneBook(book.id)}>delete</button>
        </div>
      )
    })

    return (
      <div>
        <h1>app</h1>
        {mappedBooks}
      </div>
    )
  }
}

export default App
