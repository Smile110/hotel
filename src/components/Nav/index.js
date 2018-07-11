/**
 * Created by SmileYang on 2018/3/16.
 */
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import constantsObj from '../../common/constants';
import logoUrl from '../../common/images/jw-logo.png';

const navs = constantsObj.navs;

export default class Nav extends Component {
    render(){
        return (
            <header>
                <nav className="main clearfix">
                    <div className="nav-logo pull-left">
                        <img src={logoUrl} alt="" />
                    </div>
                    <div className="nav-container">
                        <ul className="nav-list clearfix">
                            {
                                navs.map((nav, index) =>
                                    <li key={index}>
                                        <NavLink to={nav.href} activeClassName="active" {...nav.props}>{nav.label}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="pull-right login-model">
                        <ul className="clearfix">
                            <li className="pull-left mr-10"><a className="btn btn-sm btn-primary" href="/login">登录</a></li>
                            <li className="pull-left"><a className="btn btn-sm btn-line" href="/register">注册</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    };
}

