import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div className=' flex flex-col md:flex-row lg:flex-row mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  
            w-full gap-5 md:w-[80%] lg:w-[80%] mt-5  mx-auto'>
                {
                    products.map(product => <Product product={product} key={product.id} />)
                }

            </div>
            <div className=' w-full md:w-[30%] lg:[30%]'>
                <h1>Order Summary</h1>
            </div>

        </div>
    );
};

export default Shop;