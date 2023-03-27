import React from 'react';

const Product = (props) => {
    // console.log(props)
    const { img, name, price, ratings, seller } = props.product
    return (
        <div>
            <div className="card w-80 ml-7 h-full bg-base-100 shadow-2xl">
                <figure className='w-full'><img className='w-[90%] rounded md:rounded-md lg:rounded-lg' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <small>Manufacturer : {seller}</small>
                    <small>Ratings : {ratings} star</small>
                    <div className=' bg-amber-200 p-5 rounded md:rounded-md lg:rounded-lg'>
                        <h1 className='text-black'>Add To Cart</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;