import React, { Component } from 'react'
// import Home from './components/pages/home.jsx'
import AppRoute from './router/AppRoute.jsx'

class App extends Component {
  render() {
  	console.log('app')
    return (
      <div className="App">
      	<AppRoute/>
      </div>
    );
  }
}

export default App;
