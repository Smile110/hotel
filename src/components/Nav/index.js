/**
 * Created by SmileYang on 2018/3/16.
 */
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import logoUrl from '../../common/images/jw-logo.png';

const navs = [
    { label: '首页', href: '/', props: {exact: true} },
    { label: '酒店预定', href: '/hotel' },
    { label: '商旅会展', href: '/exhibition' },
    { label: '优惠促销', href: '/promotion' },
    { label: '金泰会', href: '/jintaihui' },
    { label: '关于我们', href: '/about' },
];

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

