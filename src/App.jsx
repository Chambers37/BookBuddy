import Books from "./components/Books"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Account from "./components/Account"
// import BookDetails from "./components/BookDetails"
import { Route, Routes, Link } from "react-router-dom"

const App = () => {

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> <br/>
        <Link to='/books'>All Books</Link><br/>
        <Link to='/Account'>My Account</Link><br/>
        <Link to='/login'>Login</Link> <br />
        <Link to='/Register'>Register</Link> <br />
        {/* <Link to='/bookdetails'>Book Details</Link> */}
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/books' element={<Books />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        {/* <Route path='/BookDetails' element={<BookDetails />}/> */}
      </Routes>      
    </>
  )
}

export default App
