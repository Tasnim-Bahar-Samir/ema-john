import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart';
import OrderPreview from '../OrderPreview/OrderPreview';

const Order = () => {
  const {products,savedCart} = useLoaderData();
  const [savedProducts,setSavedProducts] = useState(savedCart);
  return (
    <div>
        <div className='shop-container'>
          <div>
              {
                savedProducts.map(product => <OrderPreview key={product.id} product = {product}/>)
              }
          </div>
          <div className="cart-details">
            <Cart cart={savedCart}/>
          </div>
        </div>
    </div>
  )
}

export default Order