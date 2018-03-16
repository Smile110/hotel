/**
 * Created by SmileYang on 2018/3/16.
 */
import React from 'react';
import style from './style.css'
export class Componey extends React.Component {
    render(){
        let style = {color: '#4AB6FF'};
        return (
            <div className="componeyRoot">
                <h1 style={style}>Componey</h1>
                <p>this is Componey detail</p>
            </div>
        )
    }
}
