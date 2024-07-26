import { useState } from "react"


const Register = ({ api, setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [newUser, setNewUser] = useState({});

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
        setNewUser(postResponse)
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
    <>
    <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label>
          First name: 
          <input 
          value={firstname} 
          placeholder="Enter Fist Name Here" 
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
          placeholder="Enter Last Name Here" 
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
          placeholder="Enter Email Here" 
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
          placeholder="Enter Password Here" 
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
        newUser.token ? <p>You have successfully registered!</p> : null
      }
    </>
  )
}

export default Register