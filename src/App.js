import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/index';
import Footer from './components/Footer';
import Hotel from './components/Hotel';
import Exhibition from './components/Exhibition';
import Promotion from './components/Promotion';
import Jintaihui from './components/Jintaihui';
import About from './components/About';
import LoginControl from './components/Login/LoginControl';
import Register from './components/Register';

// 样式
import './common/styles/nomalize.css';
import './common/styles/styles.css';
import './common/styles/margins-paddings.css';

class App extends Component {
  render() {
      const minHeight = {
          minHeight: '300px'
      };
    return (
      <BrowserRouter>
          <div>
              <Nav  />

              {/* 路由部分 */}
              <Route path="/" />
              <Route path="/hotel" component={Hotel} />
              <Route path="/exhibition" component={Exhibition} />
              <Route path="/promotion" component={Promotion} />
              <Route path="/jintaihui" component={Jintaihui} />
              <Route path="/about" component={About} />
              <Route path="/login" component={LoginControl} />
              <Route path="/register" component={Register} />
              {/* end 路由部分 */}

              <div style={minHeight}>
                  <h1>占位</h1>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

