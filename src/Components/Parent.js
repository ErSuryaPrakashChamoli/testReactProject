import React, { Component } from 'react'
import './Child'
import Child from './Child'

 class Parent extends Component {
    render() {
        return (
            <div>
            <Child text="This is the child"
            title="title1"
            onClick={this.dosomthing}
            ></Child>
            <Child
             text="this is the chiled2"
             title="title2"
             onClick={this.dosomthing}
            ></Child>
            </div>
        )
    }
}

export default Parent
