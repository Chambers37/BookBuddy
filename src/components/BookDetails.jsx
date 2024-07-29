import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


const BookDetails = ({ api, token, setCheckedOut }) => {

  const { id } = useParams();
  const [book, setBook] = useState({})
  const navigate = useNavigate();

const handleCheckout = async () => {
  const response = await fetch(`${api}/books/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type':'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      available: false,
    })
  })
  const book = await response.json();

  setBook(book.book)
  setCheckedOut((currentlyOut) => [...currentlyOut, book.book])
}

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(`${api}/books/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const jsonResponse = await response.json();
      setBook(jsonResponse.book)
    }
    getDetails();
  }, [])
  
  return (
    <>
      
      <div id="book-details">
        <h1>{book.title}</h1>
        <h4> By: {book.author}</h4>
        <img id="book-details-img" src={book.coverimage} />
        { 
        token ? (book.available ? <button onClick={() => {handleCheckout()}}>Checkout</button> : <button disabled>Out of Stock</button> ) 
        : <button onClick={() => {navigate('/login')}}>Log in to Checkout</button>}
        <p>{book.description}</p>
      </div>
    </>
    
  )
}

export default BookDetails