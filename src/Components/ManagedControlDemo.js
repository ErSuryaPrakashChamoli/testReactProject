import React, { Component } from 'react'
import {render} from 'react-dom'

 class ManagedControlDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:''
        }
    }

    handleChange(e){
        this.setState({
            message:e.target.value
        })
    }
    
    render() {
        return (
            <div>
               <legend>Type somthing here</legend>
               <input 
                 onChange={this.handleChange.bind(this)}
                 value={this.state.message}
                 autoFocus
               ></input>
               <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default ManagedControlDemo
