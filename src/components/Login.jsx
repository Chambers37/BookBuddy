import { useState } from "react"


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (submit) => {
    submit.preventDefault();
    
    console.log(`Form Submitted: 
      Username: ${username}
      Password : ${password}`)
    
  }


  return (
    <>
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input 
          value={username} 
          placeholder="Enter Username Here" 
          required 
          onChange={(e) => {
            setUsername(e.target.value)
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
    </>
  )
}

export default Login