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
  const [checkedOut, setCheckedOut] = useState([])

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> 
        <Link to='/books'>All Books</Link>
        {
        token ? <><Link to='/Account'>My Account</Link></> : null
        }
        { 
        token ? null : 
          <>
            <Link to='/login'>Login</Link>
            <Link to='/Register'>Register</Link>
          </>
        }
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/books' element={<Books api={api} token={token}/>}/>
        
        <Route path='/books/:id' element={<BookDetails api={api} token={token} setCheckedOut={setCheckedOut}/>}/>

        <Route path='/account' element={<Account api={api} token={token} newUser={newUser} setNewUser={setNewUser} checkedOut={checkedOut} setCheckedOut={setCheckedOut}/>}/>

        <Route path='/login' element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} api={api} setToken={setToken} token={token} newUser={newUser} setNewUser={setNewUser}/>}/>

        <Route path='/Register' element={<Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} api={api} setToken={setToken} token={token} setNewUser={setNewUser} newUser={newUser}/>}/>

      </Routes>
    </>
  )
}

export default App
