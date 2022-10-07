import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }  ,[])

    useEffect(()=>{
        const storedData = getStoredData();
        const savedData = [];
        for(const id in storedData){
            const addedData = products.find(product => product.id === id);
            console.log(addedData)
            if(addedData){
                const quantity = storedData[id];
                addedData.quantity = quantity;
                savedData.push(addedData);
            }
        }
        setCart(savedData);
    },[products])
    const handleCart = (product)=>{
        let newProduct =[];
        const exist = cart.find(p => p.id === product.id);
        if(!exist){
            product.quantity = 1;
            newProduct = [...cart,product]
        }
        else{
            const restProduct = cart.filter(p => p.id !== product.id);
            exist.quantity = exist.quantity +1;
            newProduct = [...restProduct,exist];
        }
        setCart(newProduct);
        addToDb(product.id);
    }
  return (
    <div className='shop-container'>
        <div className="product-container">
            {
                products.map(product => <Products product={product} key = {product.id} cartHandler ={handleCart} />)
            }
        </div>
        <div className="cart-details">
            <Cart cart ={cart}/>   
        </div>
    </div>
  )
}

export default Shop