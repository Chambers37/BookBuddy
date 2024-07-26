import { useEffect, useState } from "react"



const Books = ({ api }) => {

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
      {console.log(books)}
      
      {
        books.map((book) => {
          return (
            <div key={book.id}>
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