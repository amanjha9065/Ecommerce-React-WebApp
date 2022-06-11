import { getSuggestedQuery } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { products } from '../Products'

function HomePage() {
  const { cartItems } = useSelector(state => state.cartReducer)


  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  const addToCart = (product) => {
    // console.log("cart product to be added",product)
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  var cat = localStorage.getItem('cat')
  const filterResult = products.filter(d=>d.category===cat);


  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          {filterResult.map((product) => {
            return <div className='col-md-4'>
              <div className='m-2 p-1 product position-relative'>
                <div className='product-content'>
                  <p>{product.name}</p>
                  <div className='text-center'>
                    <img className='product-img' src={product.img} alt={product.name} />
                  </div>
                </div>
                <div className='product-actions'>
                  <h2>${product.price}</h2>
                  <div className='d-flex'>
                    <button className='mx-2' onClick={() => addToCart(product)}>ADD TO CART</button>
                    <button onClick={() => {
                      navigate(`/productinfo/${product.id}`)
                    }}>VIEW</button>

                  </div>

                </div>
              </div>
            </div>

          })

          }
        </div>
      </div>
    </Layout>
  )
}

export default HomePage