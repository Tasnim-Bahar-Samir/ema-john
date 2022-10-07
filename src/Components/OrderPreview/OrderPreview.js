import React from 'react'
import './OrderPreview.css'
import { BiTrash } from 'react-icons/bi';

const OrderPreview = ({product,onRemove}) => {
    // console.log(product)
    const{id,img,name,quantity,price} = product;
  return (
    <div className='order-review-container'>
        <div>
           <img src={img} alt="" /> 
        </div>
        <div className='review-details-cont'>
            <div>
                <p>{name}</p>
                <p className='small-details'>Price: <span>{price}</span></p>
                <p className='small-details'>Quantity: <span>{quantity}</span></p>
            </div>
            <div>
                <button onClick={()=>onRemove(id)} className='rmv-btn'>
                <BiTrash className='trash'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default OrderPreview