import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
function Header() {
  var user = (localStorage.getItem('userlogined'));
  const [cat,setCat]=useState('books');
  localStorage.setItem('cat',cat); 
   const logout = () => {
    localStorage.removeItem('userlogined')
    localStorage.removeItem('cat')
    window.location.reload()
  }
  const { cartItems } = useSelector(state => state.cartReducer)
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">E-Commerce</Link>
          <div className="dropdown">
            <button className=" btn-text-drp btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Filter By Category
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a onClick={()=>{setCat("books")}} className="dropdown-item" href="#">Books</a></li>
              <li><a onClick={()=>{setCat("clothes")}} className="dropdown-item" href="#">Clothes</a></li>
              <li><a onClick={()=>{setCat("groceries")}} className="dropdown-item" href="#">Groceries</a></li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><FaBars size={25} color={'white'} /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Current User: {user}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart"><FaCartPlus /> {cartItems.length}</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header