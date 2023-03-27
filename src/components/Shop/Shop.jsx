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

        <div className=' flex flex-col md:flex-row lg:flex-row mx-auto gap-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  
            w-full gap-3 md:w-[70%] lg:w-[70%] pt-10 mx-auto'>
                {
                    products.map(product => <Product product={product} key={product.id} />)
                }

            </div>
            <div className=' w-full md:w-[30%] lg:[30%] pt-10  mx-auto'>
              
                <div className="card w-80 ml-7 bg-amber-400 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Order Summary:</h2>
                        
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;