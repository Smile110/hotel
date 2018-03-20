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
        return (
            <button onClick={this.handleClick} className={this.state.isToggleOn ? "btn btn-primary" : "btn"}>
                {this.state.isToggleOn ? '开' : "关"}
            </button>
        )
    }
}
