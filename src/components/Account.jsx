

const Account = ({ token, api, newUser, setNewUser }) => {

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

  return (
    <>
      {
        token ? 
        
        <div>
          <h1>Here is your account info!</h1> 
          <p>Email: {newUser.email}</p>
          <div>
            <h2>These are the books you currently have checked out</h2>
          </div>
        </div>

        : <h2>You must login first!</h2>
      }
    </>
  )
}

export default Account