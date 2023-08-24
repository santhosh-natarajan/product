import React from 'react';

function Product({ product }) {
    const productNameRow = <tr><td>{product.id}</td><td>{product.name}</td></tr>
    return productNameRow;
}
export default Product;