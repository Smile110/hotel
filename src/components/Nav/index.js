/**
 * Created by SmileYang on 2018/3/16.
 */
import React, {Component} from 'react';
import logoUrl from '../../common/images/jw-logo.png';

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
                            <li><a href="/">首页</a></li>
                            <li><a href="/hotel">酒店预定</a></li>
                            <li><a href="/exhibition">商旅会展</a></li>
                            <li><a href="/promotion">优惠促销</a></li>
                            <li><a href="/jintaihui">金泰会</a></li>
                            <li><a href="/about">关于我们</a></li>
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

