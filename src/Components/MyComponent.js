import React, { Component } from 'react'

 class MyComponent extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            url:''
       }
       this.onChange=this.onChange.bind(this)
   }
   
   onChange(e){
       this.setState({
           url:this.props.url+'/days=?'+e.target.value
       })
   }

   componentWillUnmount(){
       this.setState({
           url:this.props.url
       })
   }

    render() {  
        return (
            <div>
                <input defaultValue={2} onChange={this.onChange}/>
                url:{this.state.url}
            </div>
        )
    }
}

export default MyComponent
