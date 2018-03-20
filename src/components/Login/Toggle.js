/**
 * Created by SmileYang on 2018/3/20.
 */
import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
        };
        // 这个绑定是必要的，使`this`在回调中起作用
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        let isLoggedIn = this.props.isLoggedIn;
        let txt = '';
        if(isLoggedIn){
            txt = <IsLogined />
        }else{
            txt = <UnLogined />
        }
        {/*<button onClick={this.handleClick} className={this.state.isToggleOn ? "btn btn-primary" : "btn"}>
         {this.state.isToggleOn ? '开' : "关"}
         </button>*/}
        return (
            <div>
                {txt}
            </div>
        )
    }
}

function IsLogined() {
    return (
        <div>
            <h1>欢迎回来</h1>
        </div>
    )
}

function UnLogined() {
    return (
        <div>
            <h1>退出系统</h1>
        </div>
    )
}

