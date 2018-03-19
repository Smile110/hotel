import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nomolize from './static/css/nomalize.css';
import './App.css';

import Comment from './components/Nav/index';
import Home from './components/Home';
import School from './components/School';
import { Componey } from './components/Componey/index';

const comment = {
    author: {
        imgUrl: 'http://img.jointwisdom.cn/images/index/huiping-active.png',
        describe: '测试组件',
        name: '测试名称'
    },
    text: 'texttexttexttexttexttext',
    // date: new Date()
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Comment author={comment.author} text={comment.text}></Comment>
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
