import React from 'react';
import './App.css'
import Module from './Module/Module';

const imgbackground = require("./images/img-br.jpg");
const imgbrstyle = {
  backgroundImage: `url(${imgbackground})`
};


class App extends React.Component {
  render() {
    return(
      <div className="br-img" style={imgbrstyle}>
        <div className="logo">
          <img src={require("./images/logo.jpg")} alt=""></img>
        </div>
      <Module/>
      </div>
    );
  }
}

export default App;
