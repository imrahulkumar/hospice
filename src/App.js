import React, { Component } from 'react';
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Dashboard from './component/dashboard/Dashboard';
import Main from './component/main/Main'
class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
       <Main></Main>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;


