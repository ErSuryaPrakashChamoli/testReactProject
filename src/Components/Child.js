import React, { Component } from 'react'

 class Child extends Component {
    render(props) {
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <h1>
                    {this.props.text}
                </h1>
            </div>
        )
    }
}

export default Child
