import { Component } from "react"

class EventBinding extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome!'
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    /**
     * 1. bind method
     * 2. use arrow function
     * 3. binding from constructor
     * 4. triggered function as arrow function
     */

    /**bind method */
    onClickHandler() {
        this.setState({
            message: 'Thank you!'
        })
    }

    /**triggeed function */
    onClickHandlerTriggered = () => {
        this.setState({
            message: 'Thank you!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.onClickHandler.bind(this)}>Click</button>  */}
                {/* <button onClick={() => this.onClickHandler()}>Click</button> */}
                {/* <button onClick={this.onClickHandler}>Click</button> */}
                <button onClick={this.onClickHandlerTriggered}>Click</button>
            </div>
        )
    }
}

export default EventBinding