import { Component } from 'react'
import Product from './Product';
import axios from 'axios';

class ProductListView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postData: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:5000/v1/product/getAll');
        this.setState({ postData: response.data })
    }

    render() {
        const { postData } = this.state;
        return (
            <table>
                <tbody>
                    <tr><td>S.No</td><td>Product Name</td></tr>
                    {postData?.data?.length > 0 ?
                        postData?.data?.map(product => <Product key={product.id} product={product} />)
                        : null
                    }
                </tbody>
            </table>
        )
    }
}

export default ProductListView;