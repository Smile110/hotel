import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import School from './components/School';
import { Componey } from './components/Componey/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              {/* 定路由 */}
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
              {/* 实现路由 */}
              <Route path="/home" component={Home} />
              <Route path="/school" component={School} />
              <Route path="/componey" component={Componey} />
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
