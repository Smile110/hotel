/**
 * Created by SmileYang on 2018/3/20.
 */
import React, { Component } from 'react';
import Toggle from './Toggle';

export default class LoginControl extends Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoginIn = this.state.isLoggedIn;
        let btn  = null;
        if(isLoginIn){
            btn = <LogoutButton onClick={this.handleLogoutClick} />
        }else{
            btn = <LoginButton onClick={this.handleLoginClick} />
        }
        return(
            <div>
                <Toggle isLoggedIn={isLoginIn} />
                {btn}
            </div>
        );
    }
}

// 两个无状态组件
function LoginButton(props) {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>
            登入
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>
            登出
        </button>
    );
}