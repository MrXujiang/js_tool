import * as React from 'react';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import KeepLiveRoute from './components/keepLiveRoute';
import { Layout, Menu, Icon } from 'antd';

import Home from './pages/home';
import OnlineTool from './pages/onlineTool';
import Frame from './pages/frame';

import Logo from './iconSvg/logo';
const { Header, Content, Footer } = Layout;

class Wrap extends React.Component {
    state = {
        curNav: '1'
    }

    onClickNav = (obj:any)=> {
        this.setState({curNav: obj.key})
    }

    contentRef = React.createRef()
    backTop = ()=> {
        let scrollDom = document.querySelector('#js_scroll') as HTMLElement;
        scrollDom.scrollTop = 0;
    }

    componentWillMount() {
        let hash = location.hash.substr(1);
        console.log(hash)
        switch(hash){
            case '/':
                this.setState({curNav: '1'})
                break;
            case '/onlineTool':
                this.setState({curNav: '2'})
                break;
            case '/bestFrame':
                this.setState({curNav: '3'})
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        
    }

    render() {
        return <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo"><Logo height="100%" /></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        selectedKeys={[this.state.curNav]}
                        onClick={this.onClickNav}
                        style={{ lineHeight: '64px', display: 'inline-block' }}
                    >
                        <Menu.Item key="1"><Link to="/">js常用算法</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/onlineTool">在线工具</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/bestFrame">我的开源</Link></Menu.Item>
                    </Menu>
                    <a href="https://github.com/MrXujiang" target="_Blank" className="fr" style={{fontSize: '18px', color: '#fff'}}>订阅&nbsp;&nbsp;<Icon type="github" /></a>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64, height: 'calc(100vh - 134px)', overflow: 'auto' }} id="js_scroll">
                        {this.props.children}
                    </Content>
                    <span className="back-top" onClick={this.backTop}><Icon type="up-circle" /></span>
                    <Footer style={{ textAlign: 'center' }}>
                        徐江 ©2016-2019 前端工程师
                    </Footer>
                </Layout>
    }
}

class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Wrap>
                    <Switch>
                        <KeepLiveRoute exact path="/" component={ Home } />
                        <Route path="/onlineTool" component={ OnlineTool } />
                        <Route path="/bestFrame" component={ Frame } />
                    </Switch>
                </Wrap>
            </Router>
        )
    }
}

export default Routers;