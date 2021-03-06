/**
 * Created by SmileYang on 2018/7/9.
 */
import React, {Component} from 'react';
import FooterItem from './FooterItem';
import code from '../../common/images/code.png';

const footers = [
    {
        linkTitle: '关于我们',
        linkItem: [
            {title: '集团介绍', link: '/about#introduce', openWay: '_self'},
            {title: '企业文化', link: '/about#culture', openWay: '_self'},
            {title: '招贤纳士', link: '/about#job'},
        ]
    },
    {
        linkTitle: '加盟合作',
        linkItem: [
            {title: '酒店', link: 'https://github.com/', openWay: '_blank'},
            {title: '住宿', link: 'https://www.baidu.com/', openWay: '_blank'},
        ]
    },
    {
        linkTitle: '客服电话',
        linkItem: [
            {title: '电话'},
        ]
    }
];

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

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