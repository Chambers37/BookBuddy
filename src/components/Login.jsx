import { useState } from "react"


const Login = ({ api, setToken, token }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState({});

  const handleSubmit = async (submit) => {
    submit.preventDefault();

      try {
        const response = await fetch(`${api}/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        const postResponse = await response.json()
        setNewUser(postResponse)
        setToken(postResponse.token)
        
      } catch (error) {
        console.log(error.message)
      }
    
  }


  return (
    <>
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email: 
          <input 
          value={email} 
          placeholder="Enter Email Here" 
          required 
          type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          >
          </input>
        </label> <br />
        <label>
          Password: 
          <input 
          value={password} 
          placeholder="Enter Password Here" 
          required 
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          >
          </input>
        </label> <br />
        <button type="submit">Login</button> 
      </form>
      {
        token ? <p>You are now logged in!</p> : null
      }
    </>
  )
}

export default Login