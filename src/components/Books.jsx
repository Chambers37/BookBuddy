import { useEffect, useState,  } from "react"
import { useNavigate } from "react-router-dom"



const Books = ({ api, token }) => {

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

//    Use to return books

  // const handleReturn = async (id) => {
  //   const response = await fetch(`${api}/books/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       'Content-Type':'application/json',
  //       Authorization: `Bearer ${token}`
  //     },
  //     body: JSON.stringify({
  //       available: true,
  //     })
  //   })
  //   const book = await response.json();
  //   console.log(book);  
  // }



  
  return (
    <>

      <h1>Books</h1>
      <div id="all-books">
        {
          books.map((book) => {
            console.log(book)
            return (
              <div className="singleBook" key={book.id} onClick={() => {navigate(`/books/${book.id}`)}}>
                <p>{book.title}</p>
                <img src={book.coverimage} height="100px"/>
                {/* <h1>{book.available ? "In stock" : 
                  // <button onClick={() => {handleReturn(book.id)}}>Return</button>
                  null
                  }
                  </h1> */}
              </div>
              )
          })
        }

      </div>
      
    </>
  )
}

export default Books