import Child from "./Child";

const { Component } = require("react")

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome!"
        }
        this.greetPerson = this.greetPerson.bind(this)
    }

    greetPerson() {
        return alert(`${this.state.message} All!`);
    }
    render() {
        return (
            <div>
                <Child greetHandler={this.greetPerson}> </Child>
            </div>
        )
    }
}

export default Parent;