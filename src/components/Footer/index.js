/**
 * Created by SmileYang on 2018/7/9.
 */
import React, {Component} from 'react';
import FooterItem from './FooterItem';
import constantsObj from '../../common/constants';
import code from '../../common/images/code.png';

const footers = constantsObj.footers;

export default class Footer extends Component {
    getFootersComponents() {
        return footers.map((footer, index) => <FooterItem links={footer} key={index}/>);
    }

    render() {
        return (
            <footer className="footer">
                <div className="main clearfix pd-30">
                    <div className="footer-container pull-left">
                        { this.getFootersComponents() }
                    </div>
                    <div className="pull-right">
                        <img src={code} alt=""/>
                    </div>
                </div>
                <div className="copy-right">
                    <div className="main">
                        <p className="copy-right-info text-center">粤ICP备案14062877号 | 版权所有©2014 Homeinns Co.,Ltd All
                            Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}