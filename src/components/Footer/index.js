/**
 * Created by SmileYang on 2018/7/9.
 */
import React, { Component } from 'react';
import code from '../../common/images/code.png'

export default class Footer extends Component  {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <footer className="footer">
                <div className="main clearfix">
                    <div className="footer-container pull-left">
                        <dl>
                            <dt className="pl-8">
                                关于我们
                            </dt>
                            <dd><a href="/about#groupIntro">集团介绍</a></dd>
                            <dd><a href="/about#groupCulture">企业文化</a></dd>
                            <dd><a href="/about#job">招贤纳士</a></dd>
                        </dl>
                        <dl>
                            <dt className="pl-8">
                                加盟合作
                            </dt>
                            <dd><a target="_blank" href="">火锅店</a></dd>
                            <dd><a target="_blank" href="">酒店</a></dd>
                        </dl>
                        <dl>
                            <dt className="pl-8">
                                客服电话
                            </dt>
                            <dd><a href="">12345678</a></dd>
                        </dl>
                    </div>
                    <div className="pull-right">
                        <img src={code} alt=""/>
                    </div>
                </div>
            </footer>
        )
    }
}