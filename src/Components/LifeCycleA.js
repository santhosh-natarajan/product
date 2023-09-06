/**
 * Life cycle of component test
 * Order of execution
 * 1. constructor
 * 2. getDerivedStateFromProps
 * 3. render
 * 4. componentDidMount
 */

import { Component } from "react";

class LifeCycleA extends Component { 
    
    constructor(props) { 
        super(props)
        console.log("Lifecycle A constructor");
        this.state = {
            username:'santhosh'
        }
    }

    static getDerivedStateFromProps(props, state) { 
        console.log("Lifecycle A getDerviedStateFromProps");
        return null
     }

    componentDidMount() { 
        console.log("Lifecycle A componentDidMount");
    }

    render() {
        console.log("Lifecycle A render");
        return <div>Lifecylce A</div>;
    } 
}

export default LifeCycleA;