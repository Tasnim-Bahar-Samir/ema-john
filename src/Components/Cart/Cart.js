import React from 'react';
import './Cart.css'

const Cart = ({cart,children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const item of cart){
        quantity += item.quantity;
        total =total + item.price*item.quantity;
        shipping += item.shipping;
    }
    const tax = parseFloat((total * .10).toFixed(2));
    const grandTotal = total + shipping + tax;
  return (
    <div className='cart-data'>
        <h4>Order Summery</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h5>Grand Total: ${grandTotal}</h5>
        {children}
    </div>
  )
}

export default Cart