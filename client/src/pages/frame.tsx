import * as React from 'react';
import { Table, Tag } from 'antd';
import data from './frame_data';
import '../styles/frame.css'

const columns = [
    { title: '项目名', dataIndex: 'name', key: 'name' },
    { 
        title: '分类', dataIndex: 'cate', key: 'cate',
        render: (cate:[]) => {
            return <span>
                    {cate.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                </span>
        } 
    },
    {
      title: '操作', dataIndex: '', key: 'action', render: (text:any) => <a href={text.url} target="_Blank">查看</a>,
    }
  ];  

class Frame extends React.Component {
  render() {
    return (
      <div className="frame-wrap">
        <Table
            columns={columns}
            expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
            dataSource={data}
            pagination={false}
        />
      </div>
    );
  }
}

export default Frame;