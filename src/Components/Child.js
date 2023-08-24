import { Component } from 'react';

class Child extends Component {
    constructor() { 
        super()
    }

    render() {
        return (
            <div>
                <button onClick={this.props.greetHandler}>Get Greetings</button>
            </div>
        )
    }
}

export default Child;