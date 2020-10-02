import React, { Component } from 'react'

 class SetState extends Component {
     constructor(props) {
         super(props)
         this.click=this.click.bind(this)
     
         this.state = {
              greeting:'Hellow'
         }
     }

     click(e){
         this.setState({
             greeting:'Hellow World!'
         })
     }
     
    render() {
        return (
            <div>
              <p>{this.state.greeting}</p>
              <button onClick={this.click}>Click me</button>
            </div>
        )
    }
}

export default SetState
