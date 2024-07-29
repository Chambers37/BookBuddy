import { useNavigate } from "react-router-dom";

const Login = ({ api, setToken, token, email, setEmail, password, setPassword }) => {

  const navigate = useNavigate();
  

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
    <div id="login-form">
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email: 
          <input 
          value={email} 
          required 
          type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          >
          </input>
        </label> 
        <label>
          Password: 
          <input 
          value={password} 
          required 
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          >
          </input>
        </label> 
        <button type="submit">Login</button>
        <button type="button" onClick={() => {navigate('/register')}}>New User?</button>
      </form>
      {
        token ? <p>You have succesfully logged in!</p> : null
      }
    </div>
  )
}

export default Login