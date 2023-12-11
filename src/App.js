import logo from './logo.svg';
import './App.scss';
import MyComponent from './components/MyComponent';
import React from 'react';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <MyComponent/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
