import React from 'react';

const Card = ({ card }) => {
    return (
        <>
            <div className="card w-80 ml-7 bg-amber-400 text-primary-content sticky top-5 ">
                <div className="card-body">
                    <h2 className="card-title">Order Summary</h2>
                    <p>Selected Items: {card.length}</p>
                </div>
            </div>
        </>
    );
};

export default Card;