import React, { Component } from 'react'
import './App.css'
import logo from './img/urbank@2x.png'
import iphoneImg from './img/iphone@2x.png'
import Navbar from './components/My-Navbar'
import BodyContainer from './components/Body-Container'

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar logo={logo}/>
        <BodyContainer iphoneImg={iphoneImg} />
      </div>
    );
  }
}

export default App
