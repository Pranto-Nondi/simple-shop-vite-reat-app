import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBagShopping, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props)
    const { img, name, price, ratings, seller } = props.product
    const addToCard = props.addToCard;
    return (
        <div>
            <div className="card w-72 ml-7 h-full bg-base-100 shadow-2xl rounded">
                <figure className='w-full pt-3'><img className='w-[90%]  rounded ' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <small>Manufacturer : {seller}</small>
                    <small>Ratings : {ratings} star</small>
                </div>
                <div className=' bg-amber-200 hover:bg-amber-300 py-4 text-center '>
                    <h1 onClick={() => addToCard(props.product)} className='text-black'><small className="cursor-pointer">Add To Cart</small><FontAwesomeIcon icon={faShoppingCart} /> 
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Product;