import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([])
    const [count,setCount] = useState(0);
    const [page,setPage] = useState(0);
    const [size, setSize] = useState(10)
    const pages = Math.ceil(count/size);
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
            setCount(data.count)
        });
    }  ,[page,size])

   

    useEffect(()=>{
        const storedData = getStoredData();
        const savedData = [];
        const ids  = Object.keys(storedData)
        fetch('http://localhost:5000/productsByIds',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(ids)
        })
        .then(res => res.json())
        .then(data => {
            for(const id in storedData){
            const addedData = data.find(product => product._id === id);
            if(addedData){
                const quantity = storedData[id];
                addedData.quantity = quantity;
                savedData.push(addedData);
            }
        }
        setCart(savedData);
        })
        
    },[products])
    const handleCart = (product)=>{
        let newProduct =[];
        const exist = cart.find(p => p._id === product._id);
        if(!exist){
            product.quantity = 1;
            newProduct = [...cart,product]
        }
        else{
            const restProduct = cart.filter(p => p._id !== product._id);
            exist.quantity = exist.quantity +1;
            newProduct = [...restProduct,exist];
        }
        setCart(newProduct);
        addToDb(product._id);
    }
  return (
    <div className='shop-container'>
        <div className="product-container">
            {
                products.map(product => <Products product={product} key = {product._id} cartHandler ={handleCart} />)
            }
        </div>
        <div className="cart-details">
            <Cart cart ={cart}/>   
        </div>
        <div className='pagination'>
            <p>Current page:{page} pageData size:{size}</p>
            {
                [...Array(pages).keys()].map(num => <button onClick={()=>setPage(num)} className={page === num ? 'selected':''} key={num}>
                    {num + 1}
                </button>)
            }
            <select defaultValue={10} onChange={(e)=> setSize(e.target.value)} name="" id="">
                <option value="5">5</option>
                <option  value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
        </div>
    </div>
  )
}

export default Shop