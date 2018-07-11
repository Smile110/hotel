/**
 * Created by SmileYang on 2018/7/11.
 *
 * 常量
 */
export default {
    navs: [
        { label: '首页', href: '/', props: {exact: true} },
        { label: '酒店预定', href: '/hotel' },
        { label: '商旅会展', href: '/exhibition' },
        { label: '优惠促销', href: '/promotion' },
        { label: '金泰会', href: '/jintaihui' },
        { label: '关于我们', href: '/about' },
    ],
    footers: [
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
    ],
    footerCopyRight: '众荟信息众荟信息众荟信息众荟信息众荟信息众荟信息众荟信息'
}
