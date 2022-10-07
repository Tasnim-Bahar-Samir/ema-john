import { getStoredData } from "../utilities/fakedb";

export const productAndCartLoader = async()=>{
    const res = await fetch('products.json');
    const products = await res.json();

    const storedData = getStoredData();
    const savedCart = [];
    for(const id in storedData){
        const addedProducts = products.find(p => p.id === id);
        if(addedProducts){
            const quantity = storedData[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }

    return {products,savedCart};
}

