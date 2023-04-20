import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        product && (
            <div className='container d-flex justify-content-center'>
                <div className='card col-6 my-5'>
                <h2 className='card-header'>{product.title}</h2>
                <div className="card-body">
                    <p className='card-text'>Price: {product.price}</p>
                    <p className='card-text'>Description: {product.description}</p>
                </div>
            </div>
            </div>
            
        )
    );
}

export default ProductDetails