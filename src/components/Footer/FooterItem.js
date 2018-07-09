/**
 * Created by SmileYang on 2018/7/9.
 */
import React, {Component} from 'react';

export default class FooterItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const linkItems = this.props.links;

        return (
            <dl>
                <dt className="pl-8">{linkItems.linkTitle}</dt>
                {linkItems.linkItem.map((item, index) => {
                    return <dd key={index}><a href={item.link}>{item.title}</a></dd>
                })}
            </dl>
        );
    };
}
