(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){e.exports=a(354)},173:function(e,t,a){},188:function(e,t,a){},235:function(e,t,a){},255:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),i=a.n(c),o=(a(173),a(174),a(11)),l=(a(357),a(45)),s=a(25),u=a(26),m=a(28),h=a(27),p=a(29),d=(a(178),a(73)),f=a(61),b=a(52);var v=function(e){var t=!1,a="";return function(r){function c(){var e,a;Object(s.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(c)).call.apply(e,[this].concat(r)))).state={isUnMont:t},a}return Object(p.a)(c,r),Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=i.a.findDOMNode(this);this.state.isUnMont&&(e.innerHTML=a)}},{key:"componentWillUnmount",value:function(){if(!this.state.isUnMont){var e=i.a.findDOMNode(this).innerHTML;a=e}t=!0}},{key:"render",value:function(){return n.createElement(e,this.props)}}]),c}(n.Component)}(b.a),g=(a(186),a(116));function y(e){return n.createElement("pre",null,n.createElement("code",{className:"lang-javascript"},e.children))}var j=[{tit:"\u6c42\u4e00\u4e2a\u96c6\u5408\u662f\u5426\u662f\u53e6\u4e00\u4e2a\u96c6\u5408\u7684\u5b50\u96c6",desc:"\u4f7f\u7528\u6570\u7ec4\u7684every\u65b9\u6cd5\u6c42\u4e00\u4e2a\u96c6\u5408\u662f\u5426\u662f\u53e6\u4e00\u4e2a\u96c6\u5408\u7684\u5b50\u96c6",fn:function(e,t){t.every(function(t){return e.includes(t)})}},{tit:"\u6d45\u62f7\u8d1d",desc:"\u5b9a\u4e49\uff1a\u5728\u62f7\u8d1d\u7ed3\u675f\u540e\u4e24\u4e2a\u5bf9\u8c61\u7684\u67d0\u4e9b\u5c5e\u6027\u4ecd\u7136\u6307\u5411\u540c\u4e00\u4e2a\u5185\u5b58\u7a7a\u95f4",fn:function(e){var t=Array.isArray(e)?[]:{};for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);return t}},{tit:"\u6df1\u62f7\u8d1d--JSON.parse(JSON.stringify(obj))",desc:"\u5b9a\u4e49\uff1a\u5728\u62f7\u8d1d\u7ed3\u675f\u540e\u4e24\u4e2a\u5bf9\u8c61\u65e0\u4efb\u4f55\u5173\u8054",fn:function(e){return JSON.parse(JSON.stringify(e))}},{tit:"\u6df1\u62f7\u8d1d--\u9012\u5f52",desc:"\u5b9a\u4e49\uff1a\u5728\u62f7\u8d1d\u7ed3\u675f\u540e\u4e24\u4e2a\u5bf9\u8c61\u65e0\u4efb\u4f55\u5173\u8054",fn:function e(t){var a=Array.isArray(t)?[]:{};for(var n in t)"object"===typeof t[n]?a[n]=e(t[n]):a[n]=t[n];return a}},{tit:"\u6570\u7ec4\u53bb\u91cd--\u5192\u6ce1\u6392\u5e8f",desc:"\u6ce8\uff1afor\u5faa\u73af\u6bcf\u6b21\u904d\u5386\u90fd\u4f1a\u91cd\u65b0\u67e5\u8be2\u6570\u7ec4\u957f\u5ea6\uff0c\u6240\u4ee5\u4e0d\u5e94\u8be5\u5c06\u6570\u7ec4\u957f\u5ea6\u5355\u72ec\u63d0\u53d6\u51fa\u6765",fn:function(e){for(var t=0;t<e.length;t++)for(var a=t+1;a<e.length;a++)Object.is(e[t],e[a])&&(e.splice(a,1),a--);return e}},{tit:"\u6570\u7ec4\u53bb\u91cd--\u5229\u7528indexOf",desc:"\u5229\u7528indexOf",fn:function(e){for(var t=[],a=0;a<e.length;a++)t.indexOf(-1===e[a])&&t.push(e[a]);return t}},{tit:"\u6570\u7ec4\u53bb\u91cd--filter",desc:"filter",fn:function(e){return e.filter(function(e,t,a){return a.indexOf(e)===t})}},{tit:"\u6570\u7ec4\u53bb\u91cd--\u4f7f\u7528set",desc:"\u4f7f\u7528set",fn:function(e){return"[...new Set(arr)]"}}],E=(a(188),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).openNotification=function(){g.a.warning({key:"styleFix",message:"\u9875\u9762\u95ee\u9898\u901a\u77e5",description:"\u82e5\u6b64\u9875\u9762\u6ca1\u6709\u6b63\u5e38\u663e\u793a\u4ee3\u7801\u533a\u6837\u5f0f\uff0c\u8bf7\u70b9\u51fb\u6b64\u901a\u77e5\u4fee\u590d",placement:"bottomRight",onClick:function(){location.reload()}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){g.a.close("styleFix"),this.openNotification()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return n.createElement("div",{className:"home-wrap common-wrap",id:"home_wrap"},n.createElement("section",{className:"content"},j.map(function(e,t){return n.createElement("div",{className:"js-tool-fn-wrap",key:t},n.createElement("h2",{className:"title"},e.tit),n.createElement("div",{className:"desc"},e.desc),n.createElement("div",{className:"code-wrap"},n.createElement(y,null,"".concat(e.fn))))})),n.createElement("aside",{className:"side-bar"}))}}]),t}(n.Component)),k=(a(106),a(44)),w=(a(356),a(164)),O=(a(232),a(163)),z=(a(134),a(62)),N=[{tit:"JSON\u683c\u5f0f\u5316",label:"\u683c\u5f0f\u5316",desc:"json\u6570\u636e\u683c\u5f0f\u5316\uff0c\u538b\u7f29\uff0c\u8f6c\u6362",url:"https://c.runoob.com/front-end/53"},{tit:"HTML\u7b26\u53f7\u5b9e\u4f53\u5b57\u7b26\u8868",label:"\u5728\u7ebf\u5f00\u53d1",desc:"\u672c\u5b57\u7b26\u5b9e\u4f53\u8868\u5305\u62ec\u4e86\u6570\u5b66\u7b26\u53f7\u3001\u5e0c\u814a\u5b57\u7b26\u3001\u5404\u79cd\u7bad\u5934\u8bb0\u53f7\u3001\u79d1\u6280\u7b26\u53f7\u4ee5\u53ca\u5f62\u72b6",url:"http://www.w3school.com.cn/tags/html_ref_symbols.html"},{tit:"React\u4e2d\u6587\u6587\u6863",label:"react",desc:"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93\uff0c\u58f0\u660e\u5f0f\uff0c\u7ec4\u4ef6\u5316\uff0c\u4e00\u6b21\u5b66\u4e60\uff0c\u968f\u5904\u7f16\u5199",url:"https://react.docschina.org/"},{tit:"Ant Design For React",label:"react",desc:"\u57fa\u4e8ereact\u7684UI\u5c42\u6846\u67b6\uff0c\u63d0\u4f9b\u4e30\u5bcc\u7684UI\u7ec4\u4ef6",url:"https://ant.design/docs/react/introduce-cn"},{tit:"Dplay.js\u89c6\u9891\u64ad\u653e+\u5f39\u5e55\u63d2\u4ef6",label:"javascript",desc:"\u539f\u751fjavascript\u548cHTML5\u5f00\u53d1\u7684\u89c6\u9891\u64ad\u653e+\u5f39\u5e55\u63d2\u4ef6",url:"http://dplayer.js.org"},{tit:"Vue\u4e2d\u6587\u6587\u6863",label:"vue",desc:"\u662f\u4e00\u5957\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684\u6e10\u8fdb\u5f0f\u6846\u67b6\u3002\u4e0e\u5176\u5b83\u5927\u578b\u6846\u67b6\u4e0d\u540c\u7684\u662f\uff0cVue \u88ab\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u81ea\u5e95\u5411\u4e0a\u9010\u5c42\u5e94\u7528",url:"https://cn.vuejs.org/v2/guide/"},{tit:"React Router\u5b98\u65b9\u6587\u6863",label:"react",desc:"\u57fa\u4e8ereact\u7684\u8def\u7531\u7cfb\u7edf",url:"https://reacttraining.com/react-router/web/guides/quick-start"},{tit:"JS\u538b\u7f29\u3001\u89e3\u538b\u3001\u683c\u5f0f\u5316\u3001\u6df7\u6dc6\u52a0\u5bc6\u3001\u89e3\u5bc6",label:"\u5728\u7ebf\u5de5\u5177",desc:"JS\u538b\u7f29\u3001\u89e3\u538b\u3001\u683c\u5f0f\u5316\u3001\u6df7\u6dc6\u52a0\u5bc6\u3001\u89e3\u5bc6",url:"https://www.css-js.com/"},{tit:"Can I Use",label:"\u5728\u7ebf\u5de5\u5177",desc:"\u63d0\u4f9b\u6700\u65b0\u7684\u6d4f\u89c8\u5668\u652f\u6301\u6570\u636e\uff0c\u663e\u793a\u67d0\u4e9bCSS\u5c5e\u6027\u5728\u5404\u4e2a\u5e73\u53f0\u7684\u517c\u5bb9\u6027",url:"https://caniuse.com/"},{tit:"\u6743\u5a01\u7684\u524d\u7aef\u6027\u80fd\u6307\u5357",label:"web\u6027\u80fd",desc:"\u4e00\u5927\u7fa4\u4e3a\u5927\u578b\u7ad9\u70b9\u5de5\u4f5c\u7684\u4e13\u5bb6\u4eec\uff0c\u80fd\u591f\u4e00\u8d77\u5efa\u7acb\u4e00\u4efd\u6743\u5a01\u7684\u524d\u7aef\u6027\u80fd\u6307\u5357\u5417\uff1f",url:"https://browserdiet.com/zh/"},{tit:"CodePen",label:"\u5728\u7ebf\u5de5\u5177",desc:"\u9762\u5411\u5f00\u53d1\u4eba\u5458\u7684\u793e\u4ea4\u5f00\u53d1\u73af\u5883\u3002\u53ef\u5728\u7ebf\u7f16\u8f91\u6d4b\u8bd5HTML\u3001CSS\u3001Javascript",url:"https://codepen.io/"},{tit:"Unheap",label:"javascript",desc:"\u8f7b\u677e\u5feb\u901f\u7684\u627e\u5230\u5404\u79cd\u6700\u65b0\u7684 jQuery \u63d2\u4ef6",url:"http://www.unheap.com/"}],M=(a(235),z.a.TabPane),S=O.a.Search,A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:N,activeKey:"1"},a.data=["\u5168\u90e8","javascript","react","vue","node","\u683c\u5f0f\u5316","jquery","web\u6027\u80fd","nginx","\u6570\u636e\u5e93","\u5728\u7ebf\u5f00\u53d1","\u53ef\u89c6\u5316"],a.filterContent=function(e){a.setState({activeKey:e});var t=N.filter(function(t){var n=+e-1;return"1"===e||a.data[n]===t.label});a.setState({data:t})},a.onSearch=function(e){console.log(e),a.setState({activeKey:"1"});var t=new RegExp(e,"ig"),n=N.filter(function(e){return t.test(e.tit)||t.test(e.desc)});a.setState({data:n})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",{className:"online-tool"},n.createElement("div",{className:"search-wrap"},n.createElement(S,{placeholder:"\u641c\u7d22\u4f60\u60f3\u8981\u7684\u5de5\u5177",onSearch:this.onSearch,enterButton:!0})),n.createElement("div",{className:"content"},n.createElement(z.a,{defaultActiveKey:"1",activeKey:this.state.activeKey,tabPosition:"top",style:{minHeight:400},onChange:this.filterContent},this.data.map(function(t,a){return n.createElement(M,{tab:t,key:a+1+""},e.state.data.length?e.state.data.map(function(e,t){return n.createElement("div",{key:t,className:"item-wrap"},n.createElement(w.a,{title:e.tit,extra:n.createElement("a",{href:e.url,target:"_Blank"},"\u67e5\u770b")},e.desc))}):n.createElement(k.a,{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original",imageStyle:{height:60},description:n.createElement("span",null,"\u6682\u65e0\u6570\u636e ",n.createElement("a",{href:"https://github.com/MrXujiang/js_tool",target:"_Blank"},"\u53bbgithub\u4e0a\u6dfb\u52a0"))}))}))))}}]),t}(n.Component),x=(a(355),a(162)),_=(a(253),a(165)),C=[{key:1,name:"react\u5355\u9875\u9762\u811a\u624b\u67b6",cate:["js","react","redux","antDesign","webpack"],description:"\u57fa\u4e8etypescript+react+redux+react-router+antDesign\u7684\u524d\u7aef\u9879\u76ee\u811a\u624b\u67b6,\u672c\u9879\u76ee\u4f1a\u4e0d\u65ad\u66f4\u65b0\u5b8c\u5584\uff0c\u6b22\u8fce\u5173\u6ce8",url:"https://github.com/MrXujiang/ts-react"},{key:2,name:"\u57fa\u4e8egulp+ts\u7684\u9879\u76ee\u811a\u624b\u67b6",cate:["js","gulp","typescript"],description:"\u57fa\u4e8egulp+ts\u7684\u9879\u76ee\u811a\u624b\u67b6\uff0c\u53ef\u914d\u7f6e\u6210\u591a\u9875\u9762",url:"https://github.com/MrXujiang/gulp_for_ts"},{key:3,name:"\u57fa\u4e8ereact\u7684\u591a\u9875\u9762\u811a\u624b\u67b6",cate:["react","\u591a\u9875\u9762","webpack"],description:"\u57fa\u4e8ereact\u7684\u591a\u9875\u9762\u811a\u624b\u67b6",url:"https://github.com/MrXujiang/muti_frame/tree/master/muti_react"},{key:4,name:"\u57fa\u4e8evue\u7684\u591a\u9875\u9762\u811a\u624b\u67b6",cate:["vue","\u591a\u9875\u9762","webpack"],description:"\u57fa\u4e8evue\u7684\u591a\u9875\u9762\u811a\u624b\u67b6",url:"https://github.com/MrXujiang/muti_frame/tree/master/muti_vue"},{key:5,name:"\u57fa\u4e8egulp\u7684\u5355\u9875\u9762\u811a\u624b\u67b6",cate:["gulp"],description:"\u57fa\u4e8egulp\u7684\u5355\u9875\u9762\u811a\u624b\u67b6\uff0c\u652f\u6301\u6253\u5305\uff0c\u4ee3\u7801\u538b\u7f29\uff0c\u6587\u4ef6\u81ea\u52a8\u7248\u672c\u53f7\uff0c\u56fe\u7247\u538b\u7f29\uff0c\u81ea\u52a8\u6ce8\u5165\u6837\u5f0f\uff0c\u8ba9\u4f60\u7684\u5f00\u53d1\u53ea\u5173\u6ce8\u4e1a\u52a1",url:"https://github.com/MrXujiang/gulp_for_spa"},{key:6,name:"\u57fa\u4e8egulp\u6784\u5efa\u7684\u5927\u578b\u9879\u76ee\u811a\u624b\u67b6",cate:["gulp"],description:"\u4e3b\u6301\u591a\u9875\u9762\uff0c\u5355\u9875\u9762\uff0c\u652f\u6301\u6253\u5305\uff0c\u4ee3\u7801\u538b\u7f29\uff0c\u6587\u4ef6\u81ea\u52a8\u7248\u672c\u53f7\uff0c\u56fe\u7247\u538b\u7f29\uff0c\u81ea\u52a8\u6ce8\u5165\u6837\u5f0f\uff0c\u8ba9\u4f60\u7684\u5f00\u53d1\u53ea\u5173\u6ce8\u4e1a\u52a1",url:"https://github.com/MrXujiang/gulp_for_buge"}],T=(a(255),[{title:"\u9879\u76ee\u540d",dataIndex:"name",key:"name"},{title:"\u5206\u7c7b",dataIndex:"cate",key:"cate",render:function(e){return n.createElement("span",null,e.map(function(e){return n.createElement(_.a,{color:"blue",key:e},e)}))}},{title:"\u64cd\u4f5c",dataIndex:"",key:"action",render:function(e){return n.createElement("a",{href:e.url,target:"_Blank"},"\u67e5\u770b")}}]),J=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"frame-wrap"},n.createElement(x.a,{columns:T,expandedRowRender:function(e){return n.createElement("p",{style:{margin:0}},e.description)},dataSource:C,pagination:!1}))}}]),t}(n.Component),H=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 59 59"},e),r.a.createElement("path",{d:"M45.07 59a1 1 0 1 1 0-2H47c.553 0 1.035.447 1.035.999 0 .553-.412 1-.965 1v-1l-.029 1L45.07 59zm-4 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm33.467-1.718a1 1 0 0 1-.785-1.618 3.47 3.47 0 0 0 .663-1.392 1 1 0 1 1 1.951.439 5.504 5.504 0 0 1-1.042 2.188.995.995 0 0 1-.787.383zm.001-5.563a.997.997 0 0 1-.787-.382 3.531 3.531 0 0 0-1.197-.974 1 1 0 0 1 .891-1.791c.727.361 1.376.89 1.879 1.528a1 1 0 0 1-.786 1.619zM45.071 50h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-5.942-.406a.99.99 0 0 1-.415-.091 5.556 5.556 0 0 1-1.927-1.467 1 1 0 0 1 1.531-1.287 3.55 3.55 0 0 0 1.228.936.999.999 0 0 1-.417 1.909zM30.58 44.65a1.001 1.001 0 0 1-.983-1.189 5.453 5.453 0 0 1 .973-2.222 1.001 1.001 0 0 1 1.611 1.185 3.447 3.447 0 0 0-.619 1.413c-.093.48-.512.813-.982.813zm4.204-3.645a1 1 0 0 1-.04-1.999c.085-.004.17-.006.256-.006h1.785a1 1 0 1 1 0 2l-1.959.004-.042.001zM53 41h-.215a1 1 0 1 1 0-2H53c.469 0 .923-.091 1.352-.271a1 1 0 1 1 .774 1.844A5.469 5.469 0 0 1 53 41zm-4.215 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm14.533-3.23a1 1 0 0 1-.96-1.281 3.502 3.502 0 0 0 .1-1.54 1 1 0 1 1 1.975-.317c.047.293.069.588.067.876 0 .519-.074 1.04-.222 1.543a1.001 1.001 0 0 1-.96.719zm-2.068-5.166a.993.993 0 0 1-.501-.135 3.438 3.438 0 0 0-1.47-.458 1 1 0 1 1 .156-1.994 5.42 5.42 0 0 1 2.317.722 1 1 0 0 1-.502 1.865zM49.357 32h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0H31a5.521 5.521 0 0 1-1.963-.361 1.001 1.001 0 0 1 .713-1.869c.398.152.819.229 1.252.23h.355a1 1 0 1 1 0 2zm-4.633-3.095a1 1 0 0 1-.95-.688 5.475 5.475 0 0 1-.229-2.412.995.995 0 0 1 1.117-.867.998.998 0 0 1 .867 1.117 3.494 3.494 0 0 0 .146 1.537 1.002 1.002 0 0 1-.951 1.313zm1.904-5.229a1 1 0 0 1-.531-1.849 5.423 5.423 0 0 1 2.294-.794 1.001 1.001 0 0 1 .219 1.989 3.451 3.451 0 0 0-1.454.503 1 1 0 0 1-.528.151zM42.5 23h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-6 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z",fill:"#ed8a19"}),r.a.createElement("path",{d:"M53.47 2.669c-3.157-3.559-8.276-3.559-11.433 0s-3.157 9.328 0 12.887L47.753 22l5.716-6.444c3.158-3.558 3.158-9.328.001-12.887zM48 13a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z",fill:"#26b99a"}),r.a.createElement("path",{d:"M19.278 28.64c-4.296-4.853-11.261-4.853-15.556 0-4.296 4.853-4.296 12.721 0 17.573L11.5 55l7.778-8.787c4.296-4.853 4.296-12.721 0-17.573zM11.5 41a5 5 0 1 1 .001-10.001A5 5 0 0 1 11.5 41z",fill:"#3083c9"}))},I=d.a.Header,R=d.a.Content,B=d.a.Footer,D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={curNav:"1"},a.onClickNav=function(e){a.setState({curNav:e.key})},a.contentRef=n.createRef(),a.backTop=function(){document.querySelector("#js_scroll").scrollTop=0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=location.hash.substr(1);switch(console.log(e),e){case"/":this.setState({curNav:"1"});break;case"/onlineTool":this.setState({curNav:"2"});break;case"/bestFrame":this.setState({curNav:"3"})}}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.createElement(d.a,null,n.createElement(I,{style:{position:"fixed",zIndex:1,width:"100%"}},n.createElement("div",{className:"logo"},n.createElement(H,{height:"100%"})),n.createElement(l.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],selectedKeys:[this.state.curNav],onClick:this.onClickNav,style:{lineHeight:"64px",display:"inline-block"}},n.createElement(l.b.Item,{key:"1"},n.createElement(f.b,{to:"/"},"js\u5e38\u7528\u7b97\u6cd5")),n.createElement(l.b.Item,{key:"2"},n.createElement(f.b,{to:"/onlineTool"},"\u5728\u7ebf\u5de5\u5177")),n.createElement(l.b.Item,{key:"3"},n.createElement(f.b,{to:"/bestFrame"},"\u6211\u7684\u5f00\u6e90"))),n.createElement("a",{href:"https://github.com/MrXujiang",target:"_Blank",className:"fr",style:{fontSize:"18px",color:"#fff"}},"\u8ba2\u9605\xa0\xa0",n.createElement(o.a,{type:"github"}))),n.createElement(R,{style:{padding:"0 50px",marginTop:64,height:"calc(100vh - 134px)",overflow:"auto"},id:"js_scroll"},this.props.children),n.createElement("span",{className:"back-top",onClick:this.backTop},n.createElement(o.a,{type:"up-circle"})),n.createElement(B,{style:{textAlign:"center"}},"\u5f90\u6c5f \xa92016-2019 \u524d\u7aef\u5de5\u7a0b\u5e08"))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement(f.a,null,n.createElement(D,null,n.createElement(b.c,null,n.createElement(v,{exact:!0,path:"/",component:E}),n.createElement(b.a,{path:"/onlineTool",component:A}),n.createElement(b.a,{path:"/bestFrame",component:J}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[168,1,2]]]);
//# sourceMappingURL=main.40d52fbf.chunk.js.map