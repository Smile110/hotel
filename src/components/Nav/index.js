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
                    <a href="/"><img src={logoUrl} alt={this.props.name} title={this.props.name}/></a>
                </div>
                <ul className="clearfix text-center ">
                    <li><a className="untext-underline" href="/">Home</a></li>
                    <li><a className="untext-underline" href="/school">School</a></li>
                    <li><a className="untext-underline" href="/componey">Componey</a></li>
                </ul>
            </nav>
        )
    }
}
