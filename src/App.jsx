import Books from "./components/Books"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Account from "./components/Account"
import BookDetails from "./components/BookDetails"
import { Route, Routes, Link } from "react-router-dom"
import { useState } from "react"

const App = () => {

  const api = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [newUser, setNewUser] = useState({});

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> <br/>
        <Link to='/books'>All Books</Link><br/>
        {
        token ? <><Link to='/Account'>My Account</Link><br/></> : null
        }
        { 
        token ? null : 
          <>
            <Link to='/login'>Login</Link> <br />
            <Link to='/Register'>Register</Link>
          </>
        }
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/books' element={<Books api={api}/>}/>
        
        <Route path='/books/:id' element={<BookDetails api={api}/>}/>

        <Route path='/account' element={<Account api={api} token={token} newUser={newUser} setNewUser={setNewUser}/>}/>

        <Route path='/login' element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} api={api} setToken={setToken} token={token} newUser={newUser} setNewUser={setNewUser}/>}/>

        <Route path='/Register' element={<Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} api={api} setToken={setToken} token={token} setNewUser={setNewUser} newUser={newUser}/>}/>

      </Routes>
    </>
  )
}

export default App
