import React from 'react';
import './Products.css'

const Products = (props) => {
    const{name,img,price,seller,ratings} = props.product;
  return (
    <div className='product'>
        <img className='product-img' src={img} alt=""/>
        <div className="product-info">
            <p className='name'>{name.length< 20? name: name.slice(0,20)+'...'}</p>
            <p >Price: ${price}</p>
            <div className='small'>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
        </div>
        <button onClick={()=>props.cartHandler(props.product)} className='cart-btn'>Add to Cart</button>
    </div>
  )
}

export default Products