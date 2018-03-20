import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nomolize from './static/css/nomalize.css';
import './App.css';

import Nav from './components/Nav/index';
import Home from './components/Home';
import School from './components/School';
import { Componey } from './components/Componey/index';
import Toggle from "./components/Toggle";

class App extends Component {

    clickEvent(){
        alert('点击事件');
    }

  render() {
    return (
      <BrowserRouter>
          <div>
              <Nav></Nav>
               定路由
              <a href="/">首页</a>&nbsp;
              <p></p>
              <a href="/home">Home</a>&nbsp;
              <a href="/school">School</a>&nbsp;
              <a href="/componey">Componey</a>
              <p></p>
              <Link to="home">Home</Link>&nbsp;
              <Link to="school">School</Link>&nbsp;
              <Link to="/componey">Componey</Link>
              <p></p>
               实现路由
              <Route path="/home" component={Home} />
              <Route path="/school" component={School} />
              <Route path="/componey" component={Componey} />
              <br/>
              <Toggle />
          </div>
      </BrowserRouter>
    )
  }
}

export default App;

