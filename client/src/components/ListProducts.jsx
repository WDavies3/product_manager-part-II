import React from 'react'
import { Link } from 'react-router-dom';

function ListProducts({ productList }) {

    return (
        <div className='border-top py-3 container d-flex flex-column align-items-center'>
            <h2>All Products:</h2>

            {productList.map((product, i) => {
                return <Link key={product._id} to={`/${product._id}`}>{product.title}</Link>
            })}

        </div>
    )
}

export default ListProducts