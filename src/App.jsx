import React, { Component } from 'react'
// import MyHeader from './components/header/header.jsx';
import AppRoute from './router/AppRoute.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<AppRoute/>
      </div>
    );
  }
}

export default App;
