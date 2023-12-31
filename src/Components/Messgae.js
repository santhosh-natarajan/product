import { Component } from "react";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome'
        }
    }

    onAttended() { 
       this.setState({message:'Thank you!'})
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.onAttended()}>Attend</button>
            </div >
        )

    }
}

export default Message;