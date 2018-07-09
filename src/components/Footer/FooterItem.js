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
        const items = linkItems.linkItem.map((item, index) => {
            return <dd key={index}><a href={item.link}>{item.title}</a></dd>
        });
        return (
            <dl>
                <dt className="pl-8">{linkItems.linkTitle}</dt>
                {items}
            </dl>
        );
    };
}
