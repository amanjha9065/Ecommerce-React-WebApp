import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { products } from '../Products'
function ProductInfo() {
  const { productid } = useParams()

  var productTemp = products.filter(function (product) {
    return product.id == productid


  });
  // console.log(productTemp[0].name)


  // console.log({productid});
  return (
    <Layout>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            {productTemp[0] && (<div>
              <p><b>{productTemp[0].name}</b></p>
              <img className='product-info-img' src={productTemp[0].img} />
              <hr />
              <p>{productTemp[0].description}</p>
              <div className='d-flex justify-content-end my-3'>
                <button >ADD TO CART</button>
              </div>
            </div>

            )

            }
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default ProductInfo