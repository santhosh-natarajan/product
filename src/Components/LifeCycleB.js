/**
 * Render order
 * 1. constructor
 * 2. getDerivedStateFromProps
 * 3. componenetDidUpdate
 * 4. redner
 * 5. ComponentDidUpdate
 */
import { Component } from "react";

class LifeCycleB extends Component{
    
    constructor(props) { 
        console.log("LifeCycleB constructor")
        super(props);
        this.state = { 
            username: "santhosh"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps")
        return null;
     }

    shouldComponentUpdate(nextProps, nextState) { 
        console.log("LifeCycleB shouldComponentUpdate",nextProps,nextState)
        return true
    }

    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate")
     }

     onButtonChange = () => { 
        this.setState({
            username: "natatajan"
        })
     }

    render(){ 
        console.log("LifeCycleB render")
        return (<div>LifeCycleB
        <button onClick={this.onButtonChange}>Change me</button></div>)
    }
}

export default LifeCycleB;