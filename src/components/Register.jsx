import { useState } from "react"


const Register = ({ api, setToken, newUser, setNewUser, email, setEmail, password, setPassword }) => {
  
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  

  const handleSubmit = async (submit) => {
    submit.preventDefault();

      try {
        const response = await fetch(`${api}/users/register`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
          })
        })
        const postResponse = await response.json()
        setNewUser(postResponse.user)
        setToken(postResponse.token)
        setEmail('')
        setFirstname('')
        setLastname('')
        setPassword('')
        
      } catch (error) {
        console.log(error.message)
      }
    
  }


  return (
    <div id="register-form"> 
        
        
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label>
          First name: 
          <input 
          value={firstname} 
          required 
          onChange={(e) => {
            setFirstname(e.target.value)
          }}
          >
          </input>
        </label> <br />
        <label>
          Last name: 
          <input 
          value={lastname} 
          required 
          onChange={(e) => {
            setLastname(e.target.value)
          }}
          >
          </input>
        </label> <br />
        <label>
          Email: 
          <input 
          value={email} 
          type="email"
          required 
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
          required 
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          >
          </input>
        </label> <br />
        <button type="submit">Register</button> 
      </form>
      {console.log(newUser)}
      {
        newUser.id ? <p>You have successfully registered!</p> : null
      }
      
    
    </div>
  )
}

export default Register