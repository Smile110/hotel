/**
 * Created by SmileYang on 2018/3/16.
 */
import React from 'react';
import style from './style.css';

import logoUrl from '../../static/img/jw-logo.png';

export default class Nav extends React.Component {
    render(){
        return(
            <nav className="App-header">
                <div className="App-logo">
                    <a href="/"><img src={logoUrl} alt="众荟" title="首页"/></a>
                </div>
                <ul className="clearfix">
                    <li><a href="/">首页</a></li>
                    <li><a href="/">首页</a></li>
                    <li><a href="/">首页</a></li>
                    <li><a href="/">首页</a></li>
                    <li><a href="/">首页</a></li>
                </ul>
            </nav>
        )
    }
}
