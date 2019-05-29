import React, { Component } from 'react';
import Toc from "./components/toc";
import Content from "./components/content";
import Subject from "./components/subject";
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="웹임!" sub="HI !"></Subject>
        <Subject title="리엑트임!" sub="에휴 !"></Subject>
        <Toc></Toc>
        <Content title="HTML!" desc="HTML is HyperText !"></Content>
      </div>
    );
  }
}

export default App;