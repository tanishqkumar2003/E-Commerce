import React from 'react';

const ItemCard = (props) => {
    const {item} = props;
    return (
        <div className="res-card">
            <img className="item-img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Item" />
            <h3>{item}</h3>   
        </div>
    );
};

export default ItemCard;