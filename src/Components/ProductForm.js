import { Component } from 'react';

/**
 * Component life cycle methods (class)
 *  Mounting
 *      constructor()                                   - New component created
 *      static getDerviedStateFromProps(props,state)()  - when the state of the component depends on changs in the 
 *                                                       probs overtime
 *      render()    - only require method, returns jsx
 *      componentDidMount() - call only once, API calls
 *  Updating
 *  Unmounting
 *  Errorhandling
 */
class ProductForm extends Component {
    render() {
        return (
            <span>Product Form Component</span>
            // <form>
            //     <div></div>
            // </form>
        );
    }
}

export default ProductForm;