import React from 'react';
import Product from '../Product/Product';

const ProductList = ({data}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap',maxWidth: '1600px',justifyContent: 'center', paddingLeft: '10%'}}>
            {data.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;