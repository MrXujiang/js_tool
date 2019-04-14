import * as React from 'react';
import { Tabs, Card, Input, Empty } from 'antd';
import data from './online_data';
import '../styles/onlineTool.css';
const TabPane = Tabs.TabPane;
const Search = Input.Search;

class OnlineTool extends React.Component {
  state = {
      data: data,
      activeKey: '1'
  }

  data = [
      '全部',
      'javascript',
      'react',
      'vue',
      'node',
      '格式化',
      'jquery',
      'web性能',
      'nginx',
      '数据库',
      '在线开发',
      '可视化'
  ]

  filterContent = (key:string) => {
    this.setState({activeKey: key});
    let result = data.filter(item => {
        let keyWord = +key -1;
        return key === '1' ? true : this.data[keyWord] === item['label']
    });
    this.setState({data: result})
  }

  onSearch = (value:string) => {
    console.log(value)
    this.setState({activeKey: '1'});
    let reg=new RegExp(value,"ig");
    let result = data.filter(item => {
        return reg.test(item['tit']) || reg.test(item['desc'])
    });
    this.setState({data: result})
  }

  render() {
    return (
      <div className="online-tool">
        <div className="search-wrap">
            <Search
                placeholder="搜索你想要的工具"
                onSearch={this.onSearch}
                enterButton
            />
        </div>
        <div className="content">
            <Tabs
            defaultActiveKey="1"
            activeKey={this.state.activeKey}
            tabPosition='top'
            style={{ minHeight: 400 }}
            onChange={this.filterContent}
            >
            {
                this.data.map((item,i) => {
                    return <TabPane tab={item} key={i+1+''}>
                                {
                                    this.state.data.length ? this.state.data.map((item,j) => {
                                        return <div key={j} className="item-wrap">
                                                    <Card
                                                        title={item.tit}
                                                        extra={<a href={item.url} target="_Blank">查看</a>}
                                                    >
                                                        {item.desc}
                                                    </Card>
                                                </div>
                                    })
                                    :
                                    <Empty 
                                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                                    imageStyle={{
                                    height: 60,
                                    }}
                                    description={
                                    <span>
                                        暂无数据 <a href="https://github.com/MrXujiang/js_tool" target="_Blank">去github上添加</a>
                                    </span>
                                    }/>
                                }
                            </TabPane>
                        
                })
            }
            </Tabs>
            
        </div>
      </div>
    );
  }
}

export default OnlineTool;