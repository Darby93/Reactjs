import React, { Component } from 'react';
import Toc from "./components/toc";
import Content from "./components/content";
import Subject from "./components/subject";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World wide web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} />
        <Toc data={this.state.contents}></Toc>
        <Content title="HTML!" desc="HTML is HyperText !"></Content>
      </div>
    );
  }
}

export default App;