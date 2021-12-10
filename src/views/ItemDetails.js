import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemDetails() {
    const {itemId} = useParams();
        return (
            <div>
                <Link to='/catalog'>Back</Link>
                <h1>Item #{itemId}</h1>
            </div>
        );
}

export default ItemDetails;