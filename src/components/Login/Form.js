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
            age: '',
            // checkItem: true
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: target.value
        })
    }
    /*handleChangeAge(event){
        this.setState({
            age: event.target.value
        })
    }*/

    handleSubmit(event){
        console.log(this.state);
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
                            <label htmlFor="name">姓名：<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
                        </li>
                        {/*<li>
                            <label htmlFor="check"><input onChange={this.handleChange} type="checkbox" name="checkItem"  checked={this.state.checkItem} /></label>
                        </li>*/}
                        <li>
                            <label htmlFor="age">年龄：<input type="text" name="age" value={this.state.age} onChange={this.handleChange}/></label>
                            <span>{this.state.age}</span>
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