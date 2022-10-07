import React, { useState } from 'react'
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart';
import OrderPreview from '../OrderPreview/OrderPreview';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
  const {savedCart} = useLoaderData();
  const [savedProducts,setSavedProducts] = useState(savedCart);
  const handleRemove = (id)=>{
    const filteredProducts = savedProducts.filter(product => product.id !== id);
    setSavedProducts(filteredProducts);
    removeFromDb(id);
  }
  return (
    <div className='order-container'>
        <div className='shop-container'>
          <div className='review-order-container'>
              {
                savedProducts.map(product => <OrderPreview key={product.id} product = {product} onRemove ={handleRemove}/>)
              }
              {
                savedProducts.length === 0 && <h2>No product ordered to review. <Link to='/'>Shop Now!</Link></h2>
              }
          </div>
          <div className="cart-details">
            <Cart cart={savedProducts}/>
          </div>
        </div>
    </div>
  )
}

export default Order