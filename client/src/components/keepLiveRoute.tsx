import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

interface Props {
    exact: boolean;
    path: string;
    component: any;
}


function withRouteHoc(Component:any) {
    let isUnMont = false, newNode:string = '';
    return class extends React.Component<Props> {
        state = {
            isUnMont: isUnMont
        }
    
        componentDidMount() {
            let home = ReactDOM.findDOMNode(this) as HTMLElement;
            if(this.state.isUnMont) home.innerHTML = newNode;
            
        }
    
        componentWillUnmount() {
            if(!this.state.isUnMont){
                let home = ReactDOM.findDOMNode(this) as HTMLElement;
                let str = home.innerHTML;
                newNode=str;
            }
            isUnMont = true;
        }
    
        render() {
            return <Component {...this.props} />
        }
    }
}

export default withRouteHoc(Route)