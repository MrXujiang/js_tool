import * as React from 'react';
import { Icon, notification } from 'antd';
import Pre from '../components/pre';
import {data} from './home_data.js';


import '../styles/home.css';


class Home extends React.Component {

  openNotification = () => {
    notification.warning({
      key: 'styleFix',
      message: '页面问题通知',
      description: '若此页面没有正常显示代码区样式，请点击此通知修复',
      placement: 'bottomRight',
      onClick: () => {location.reload()}
    });
  }

  componentDidMount(){
    notification.close('styleFix');
    this.openNotification();
    console.log(localStorage.home_data);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="home-wrap common-wrap" id="home_wrap">
        <section className="content">
          {
            data.map((item,i) => {
              return <div className="js-tool-fn-wrap" key={i}>
                        <h2 className="title">{item.tit}</h2>
                        <div className="desc">{item.desc}</div>
                        <div className="code-wrap">
                          <Pre>
                              {`${item['fn']}`}
                          </Pre>
                        </div>
                    </div>
            })
          }
        </section>
        <aside className="side-bar">

        </aside>
      </div>
    );
  }
}

export default Home;
