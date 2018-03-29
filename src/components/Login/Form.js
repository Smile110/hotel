/**
 * Created by SmileYang on 2018/3/29.
 */
import React, { Component } from 'react';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        // 初始化state
        this.state= {
            name: '',
            age: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({
            name: event.target.value
        })
    }
    handleChangeAge(event){
        this.setState({
            age: event.target.value
        })
    }

    handleSubmit(event){
        console.log(this.state.name, this.state.age);
        // 阻止默认事件
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="name">姓名：<input type="text" value={this.state.name} onChange={this.handleChangeName}/></label>
                        </li>
                        <li>
                            <label htmlFor="age">年龄：<input type="text" value={this.state.age} onChange={this.handleChangeAge}/></label>
                        </li>
                        <li>
                            <button type="submit">提交</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}