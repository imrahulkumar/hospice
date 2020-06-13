import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Main from './component/main/Main';
import store from './component/redux/store' 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
      </Provider>
    );
  }
}
export default App;


