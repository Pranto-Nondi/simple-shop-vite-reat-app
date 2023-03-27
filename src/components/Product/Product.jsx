import React from 'react';

const Product = (props) => {
    // console.log(props)
    const { img, name, price, ratings, seller } = props.product
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <small>Manufacturer : {seller}</small>
                    <small>Ratings : {ratings} star</small>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;