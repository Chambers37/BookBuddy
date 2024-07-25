import { useEffect, useState } from "react"

const api = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {

    const getBooks = async () => {
      const response = await fetch(`${api}/books`);
      const jsonResponse = await response.json();
      const allBooks = jsonResponse.books
      setBooks(allBooks)
  
    }

    getBooks()

  }, [])
  
  return (
    <>

      <h2>Books</h2>
      <ul>
      {
        books.map((book) => {
          return <li key={book.id}>{book.title}</li>
        })
      }
      </ul>
    </>
  )
}

export default Books