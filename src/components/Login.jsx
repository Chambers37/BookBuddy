
const Login = ({ api, setToken, token, email, setEmail, password, setPassword }) => {
  

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
        
        setToken(postResponse.token)
        console.log('Login post response', postResponse)
        setEmail('')
        setPassword('')

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