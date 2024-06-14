import React from 'react';

const ItemCard = (props) => {
    const {item} = props;
    return (
        <div className="res-card">
            <img className="item-img" src={item.image} alt="Item" />
            <h3>{item.title}</h3>   
        </div>
    );
};

export default ItemCard;