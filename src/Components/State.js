import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            greeting:'Hiya Buddy!' 
        }
    }
    
    render() {
        return (
            <div>
                <h>this is state</h>
            </div>
        )
    }
}

export default State
