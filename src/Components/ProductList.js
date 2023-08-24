import React from 'react';
import Product from './Product';

/** Function for fetching data from API */

function ProductListView() {
    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' }
    ];
    const productList = products.map(product => <Product key={product.id} product={product} />)
    return (
        <table>
            <tbody>
                <tr><td>S.No</td><td>Product Name</td></tr>
                {productList}
            </tbody>
        </table>
    )
}



export default ProductListView;