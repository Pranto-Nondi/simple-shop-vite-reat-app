import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakeDb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([]);
    const addToCard = (product) => {
        setCard([...card, product])
        addToDb(product.id)
    }
    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div className=' flex flex-col md:flex-row lg:flex-row mx-auto gap-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  
            w-full gap-5 md:w-[70%] lg:w-[70%] pt-10 mx-auto rounded'>
                {
                    products.map(product => <Product product={product}
                        addToCard={addToCard} key={product.id} />)
                }

            </div>
            <div className=' w-full md:w-[30%] lg:[30%] pt-10  mx-auto  '>
                <Card card={card} />
            </div>

        </div>
    );
};

export default Shop;