

const Account = ({ token, api, newUser, setNewUser, checkedOut, setCheckedOut }) => {

    const getData = async () => {
      const response = await fetch(`${api}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const jsonResponse = await response.json();
      setNewUser(jsonResponse)
      

    }
     token ? getData() : null

     const handleReturn = async (id) => {
      const response = await fetch(`${api}/books/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          available: true,
        })
      })
    
      setCheckedOut((currentlyOut) => currentlyOut.filter((book) => book.id !== id))
    }

  return (
    <>
      {
        token ? 
        
        <div id="account-details">
          <h1>Your account info</h1> 
          <p><b>Email:</b> {newUser.email}</p>
          <div>
            {checkedOut.length === 0 ? <h2>You do not have any books checked out!</h2>: <h2>These are the books you currently have checked out</h2>}
            {
            checkedOut.map((book) => {
              return (
                <div key={book.id} className="checkedoutBooks">
                  <h4>{book.title}</h4>
                  <img src={book.coverimage} height='150px'/> <br />
                  <button onClick={() => {handleReturn(book.id)}}>Return Book</button>
                </div>
              )
            })
            }
          </div>
        </div>

        : <h1>You must login first!</h1>
      }
    </>
  )
}

export default Account