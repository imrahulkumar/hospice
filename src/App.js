import React, { Component } from 'react';
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Dashboard from './component/dashboard/Dashboard'
class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Dashboard></Dashboard>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;


