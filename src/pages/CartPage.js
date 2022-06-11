import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


function CartPage() {
  const [totalAmount, setTotalAmount]=useState(0)
  const dispatch = useDispatch()
  const { cartItems } = useSelector(state => state.cartReducer);
  const deleteFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }
  useEffect(() => {
   let temp=0;
   cartItems.forEach(cartItem => {
     temp=temp+cartItem.price
   });
   setTotalAmount(temp)
  }, [cartItems])
  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <Layout>
      <table className='table mt-2'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {cartItems.map((item) => {
            return <tr>
              <td><img src={item.img} height="80" width="80" /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><FaTrash onClick={() => deleteFromCart(item)} /></td>
            </tr>
          })}


        </tbody>
      </table>
      <div className='d-flex justify-content-end'>
          <h1 className='total-amount'>Total Amount = {totalAmount}</h1>
      </div>
      <div className='d-flex justify-content-end'>
      <Link to='/checkout'><button >Place Order</button></Link>
      </div>
    </Layout>
  )
}

export default CartPage