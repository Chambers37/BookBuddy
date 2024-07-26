import { useEffect, useState,  } from "react"
import { useNavigate } from "react-router-dom"



const Books = ({ api }) => {

  const [books, setBooks] = useState([])

  const navigate = useNavigate();

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
      
      {
        books.map((book) => {
          return (
            <div key={book.id} onClick={() => {navigate(`/books/${book.id}`)}}>
              <p>{book.title}</p>
              <img src={book.coverimage} height="100px"/>
            </div>
            )
        })
      }
      
    </>
  )
}

export default Books