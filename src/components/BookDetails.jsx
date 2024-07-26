import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const BookDetails = ({ api }) => {

  const { id } = useParams();
  const [book, setBook] = useState({})

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
      {
      console.log('Get Details Response:', book)}
      <div>
        <h2>{book.title}</h2>
        <h4> By: {book.author}</h4>
        <img src={book.coverimage} height='250px'/>
        <p>{
        book.available ? "Available" : "Not Available"
        }</p>
        <p>{book.description}</p>
      </div>
    </>
    
  )
}

export default BookDetails