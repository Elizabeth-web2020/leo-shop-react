import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemDetails() {
    const {itemId} = useParams();

    const [data, setData] = useState([]);

    useEffect( () => {
       fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then(res=>res.json())
        .then(res => {setData(res); console.log(res)})
    }, [])

    const {title, price, image, description} = data;

        return (
            <div className="item-details-container">
                <Link to='/catalog' className="back-btn">Back</Link>
                <div className="item-card-content">
                    <h1 className="item-title">Item #{itemId} - {title}</h1>
                    <img className="item-image" src={image} alt="image" />
                    <div className="item-price">{price} $</div>
                    <p className="item-description">{description}</p>
                </div>
            </div>
        );
}

export default ItemDetails;