import React, { Component } from 'react'
import './App.css';
import State from './Components/State';
import MyComponent from './Components/MyComponent'
import SetState from './Components/SetState'
import ManagedControlDemo from './Components/ManagedControlDemo'
import Parent from './Components/Parent'
 class App extends Component {
    render() {
        
        return (
            <div className='App'>
             <Parent/>
            </div>
        )
    }
}

export default App
