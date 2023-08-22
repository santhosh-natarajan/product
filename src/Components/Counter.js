import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    onClickIncrement() {
        this.setState({ counter: this.state.counter + 1 })
    }

    onClickDecrement() {
        let counterValue = this.state.counter > 0 ? this.state.counter - 1 : 0;
        this.setState({ counter: counterValue });
    }

    /**Previous state */
    onClickIncrementPreviousState() {
        this.setState((previousState) => ({ counter: previousState.counter + 1 }))
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.counter}</h1>
                <button onClick={() => this.onClickIncrementPreviousState()}>Increment</button>
                <button onClick={() => this.onClickDecrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter