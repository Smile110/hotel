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
        // this.handleClick = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick} className={this.state.isToggleOn ? 'btn btn-primary' : 'btn'}>
                {this.state.isToggleOn ? '开' : "关"}
            </button>
        )
    }
}
