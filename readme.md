# description
一个基于配置的爬虫框架，只要配置响应的选择器，就能爬取响应页面的信息，支持配置爬取多个列表信息、异步处理列表项等多种功能。


# Basic usage
```javascript
const {fetchBySelector,utils} = require('crawler-lian');
//获取指定元素的属性
fetchBySelector(uri, { selector: 'a', attr: 'href' }).then(({data}) => console.log(data));
fetchBySelector(uri, { selectors:[
    {selector:'.position', attr:'text'},
    {selector:'.phone-num', attr:'text'}
] }).then(({data}) => console.log(data));

//获取一个页面中的指定列表数据和内部数据
fetchBySelector(uri, { groups:[
    {
        groupName: 'list',
        el: '.s_position_list > .item_con_list> .con_list_item',
        selectors:[
            {
                selector: '.position_link',
                attr: 'href',
                name: 'detail_url'
            },
            {
                selector: '.format-time',
                attr: 'text',
                name: 'time',
                handler({ value }) {
                    return parseTime(value);
                }
            },
        ],
        //处理具体值
        handler({ value }) {
            return utils.removeSpace(value);
        },
        //合并/处理 数据项
        process ({ matchs }) => {
            if (matchs && matchs.length > 0) {
                return matchs[0]
            }
        },
        //获取列表项内部页面数据，并合并到当前项
        itemProcess({ data }) {
            let detail_url = data.detail_url;
            if (detail_url) {
                return new Promise((resolve) => {
                    fetchBySelector(detail_url, detailOptions).then(({ data: detailData }) => {
                        resolve({ ...data, ...detailData });
                    }).catch(console.log)
                })
            } else {
                // console.log(data)
                return data;
            }
        }
    }
] }).then(({data}) => console.log(data));

//其他配置项
const option = {
    deDuplication: false,  //是否去重
    selector: 'a', //默认选择器
    attr: 'text', //默认选择的属性
    trim: true, //是否去前后空格
    handler: null,  //处理器，处理选中的具体元素
    process: null,  //处理选择器选中的一个数组,返回新的数据或者一个promise对象
    test: null, //测试标准，传入一个正则表达式
    filter:null, //过滤器，与test功能相同，传入一个函数
    groups, //分组爬取, 如果和selector同时存在，会覆盖selector
    itemProcess: null  //处理一组数据
}

```