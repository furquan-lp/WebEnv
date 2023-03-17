(()=>{"use strict";var e={2567:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var r=n(4942),a=n(885),o=n(9526),i=n(7992),l=n(4029),s=n(8255),d=n(1445),u=n(6879),c=n(1511),f=n(8615),h=n(1091),g=n(4818),p=n(4422),b=n(352),m=n(9257),x=n(5377),y="#113f67",v="#38598b",j="#a2a8d3",w="#e7eaf6",C="#5585b5",O="#53a8b6",k="#79c2d0",S="#bbe4e9",R=h.default.create({appContainer:{flex:1},webWrapper:{flex:1,height:720,width:480,alignSelf:"center"},bgImage:{flex:1},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:w,borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},button:{borderRadius:20,padding:10,elevation:2},buttonOpen:{backgroundColor:k},buttonClose:{backgroundColor:O},textStyle:{fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"justify"},URLBarTitle:{fontSize:24,fontWeight:"bold",marginHorizontal:5,marginTop:10,color:"white"}}),T=n(7362),P=n(9014);const A=JSON.parse('{"name":"webenv","homepage":"https://webenv.simpledev.site/","version":"1.0.1-cloudflare","repository":{"type":"git","url":"https://github.com/furquan-lp/WebEnv.git"},"main":"node_modules/expo/AppEntry.js","scripts":{"start":"expo start","android":"expo start --android","ios":"expo start --ios","web":"expo start --web","eject":"expo eject","deploy":"gh-pages -d web-build"},"dependencies":{"@expo-google-fonts/righteous":"^0.2.3","@expo/webpack-config":"^18.0.1","axios":"^1.3.4","expo":"~48.0.7","expo-font":"~11.1.1","expo-status-bar":"~1.4.4","react":"18.2.0","react-dom":"18.2.0","react-native":"0.71.4","react-native-chart-kit":"^6.12.0","react-native-svg":"13.4.0","react-native-vector-icons":"^9.2.0","react-native-web":"0.18.12","styled-components":"^5.3.9"},"devDependencies":{"@babel/core":"^7.21.3","gh-pages":"^5.0.0"},"private":true}');const z=function(e){f.default.get(A.homepage+"data/webenv.json").then((function(t){t.data.backendRepo,e(t.data.backendURL)}))},L=function(){return"web"===T.default.OS},I=function(){return P.default.get("window").height>P.default.get("window").width},W=function(){return A.version},D=function(){return A.repository.url};var E=n(7557),U=h.default.create({container:{height:48,alignSelf:"stretch",flexDirection:"row",backgroundColor:v,alignItems:"center",justifyContent:"space-between",paddingLeft:10,paddingRight:10},title:{flex:1,color:"white",marginLeft:15,fontSize:24,fontFamily:"Righteous_400Regular"}}),_=function(e){var t=e.onPress;return(0,E.jsx)(b.default.Button,{name:"info",backgroundColor:C,iconStyle:{marginLeft:5,marginRight:5},borderRadius:20,size:15,onPress:t})};const B=function(e){var t=e.aboutButton,n=(0,m.useFonts)({Righteous_400Regular:x.Righteous_400Regular});return(0,a.default)(n,1)[0]?(0,E.jsxs)(l.default,{style:U.container,children:[(0,E.jsx)(p.default,{onPress:function(){return g.default.openURL(D())},children:(0,E.jsx)(b.default,{name:"thermometer",color:S,size:26})}),(0,E.jsx)(i.default,{style:U.title,children:"WebEnv"}),(0,E.jsx)(_,{onPress:t})]}):null};var V=n(5375),F=h.default.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:w,borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},button:{borderRadius:20,padding:10,elevation:2},buttonOpen:{backgroundColor:k},buttonClose:{backgroundColor:O},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalTitle:{fontSize:L()?20:18,fontWeight:"bold",marginBottom:5},modalText:{fontSize:14,marginBottom:15,textAlign:"justify"}});const N=function(e){var t=e.visible,n=e.setModalVisible,r=e.envBackend;return(0,E.jsx)(l.default,{style:F.centeredView,children:(0,E.jsx)(V.default,{animationType:"slide",transparent:!0,visible:t,onRequestClose:function(){return n(!t)},children:(0,E.jsx)(l.default,{style:F.centeredView,children:(0,E.jsxs)(l.default,{style:F.modalView,children:[(0,E.jsxs)(i.default,{style:F.modalTitle,children:["WebEnv v",W()]}),(0,E.jsxs)(i.default,{style:F.modalText,children:["Running on ",r.name," version ",r.version," backend ","\n","Copyright (C) 2022 Syed Furquan Ahmad. All rights reserved. ","\n"]}),(0,E.jsx)(p.default,{style:[F.button,F.buttonClose],onPress:function(){return n(!t)},children:(0,E.jsx)(i.default,{style:F.textStyle,children:"Ok"})})]})})})})};var M=n(250),q=h.default.create({cards:{flex:1,flexDirection:"row",padding:5,marginVertical:10},card:{flex:1,backgroundColor:L()?"rgba(231, 234, 246, 0.5)":w,borderRadius:10,height:150,alignItems:"center",justifyContent:"center",margin:6,shadowColor:C,shadowOffset:{width:0,height:3},shadowOpacity:.27,shadowRadius:4.65,elevation:6},wrapper:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},unjustified:{justifyContent:"flex-start"},text:{color:y,fontSize:L()?44:34,fontWeight:"bold",margin:0,letterSpacing:1},subtitle:{color:v,fontSize:L()?36:30,alignSelf:"flex-end",margin:5,marginTop:0,letterSpacing:2}}),G=function(e){var t=e.temperature;return(0,E.jsxs)(l.default,{style:q.card,children:[(0,E.jsxs)(l.default,{style:q.wrapper,children:[(0,E.jsx)(M.default,{name:"thermometer",color:C,size:L()?70:50}),(0,E.jsxs)(i.default,{style:q.text,children:[Number(t),"\xb0C"]})]}),(0,E.jsxs)(i.default,{style:q.subtitle,children:[(1.8*t+32).toFixed(2),"\xb0F"]})]})},H=function(e){var t=e.humidity;return(0,E.jsxs)(l.default,{style:q.card,children:[(0,E.jsxs)(l.default,{style:q.wrapper,children:[(0,E.jsx)(M.default,{name:"droplet",color:C,size:L()?55:50}),(0,E.jsx)(i.default,{style:[q.text,{letterSpacing:4}],children:t})]}),(0,E.jsx)(i.default,{style:q.text,children:"%"})]})};const J=function(e){var t=e.temperature,n=e.humidity;return(0,E.jsxs)(l.default,{style:q.cards,children:[(0,E.jsx)(G,{temperature:t}),(0,E.jsx)(H,{humidity:n})]})};var K=n(6889),Q=h.default.create({container:{flex:1,justifyContent:"center",marginTop:60}});const X=function(){return(0,E.jsx)(l.default,{style:Q.container,children:(0,E.jsx)(K.default,{size:"large",color:O})})};var Y=h.default.create({container:{flex:1,alignItems:"center",justifyContent:"space-between",flexDirection:"row",margin:5,marginTop:0},text:{color:w,fontSize:20,letterSpacing:3}});const Z=function(e){var t=e.env;return void 0===t||0===t.length?(0,E.jsx)(i.default,{style:[Y.container,Y.text],children:"Connecting..."}):Array.isArray(t)?(0,E.jsxs)(l.default,{style:Y.container,children:[(0,E.jsx)(i.default,{style:Y.text,children:"Conntected."}),(0,E.jsxs)(i.default,{style:Y.text,children:["Up ",t[0].uptime.hours,":",t[0].uptime.minutes,":",t[0].uptime.seconds]})]}):(0,E.jsx)(i.default,{style:[Y.container,Y.text],children:"Couldn't find backend."})};var $=n(1864),ee=function(e){return{labels:e.labels,datasets:[{data:e.data}]}};const te=function(e){var t=e.chartData,n=e.chartType;return(0,E.jsx)(l.default,{style:{marginTop:100,alignItems:"center"},children:(0,E.jsx)($.LineChart,{data:ee(t),width:L()&&!I()?470:P.default.get("window").width-10,height:220,yAxisSuffix:0==n?"\xb0C":"%",yAxisInterval:2,chartConfig:{backgroundColor:v,backgroundGradientFrom:v,backgroundGradientTo:C,backgroundGradientToOpacity:.5,decimalPlaces:1,color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba(255, 255, 255, "+e+")"},labelColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba(255, 255, 255, "+e+")"},style:{borderRadius:16},propsForDots:{r:"6",strokeWidth:"2",stroke:v}},bezier:!0,style:{marginTop:40,marginBottom:0,borderRadius:16}})})};var ne=h.default.create({container:{flexDirection:"row",padding:5,justifyContent:"center",marginBottom:10},buttonText:{color:"white",fontSize:25,fontWeight:"bold",textAlign:"center"},button:{flex:1,margin:2,padding:5,alignItems:"center",justifyContent:"center",borderRadius:5},nonPressed:{backgroundColor:O},pressed:{backgroundColor:S},active:{backgroundColor:j}});const re=function(e){var t=e.chartType,n=e.setChartType,r=function(){n(1^t)};return(0,E.jsxs)(l.default,{style:ne.container,children:[(0,E.jsx)(p.default,{onPress:r,disabled:0===t,style:function(e){var n=e.pressed;return[ne.button,0===t?ne.pressed:ne.nonPressed,n?ne.active:null]},children:(0,E.jsx)(i.default,{style:ne.buttonText,children:"Temperature"})}),(0,E.jsx)(p.default,{onPress:r,disabled:0!==t,style:function(e){var n=e.pressed;return[ne.button,0!==t?ne.pressed:ne.nonPressed,n?ne.active:null]},children:(0,E.jsx)(i.default,{style:ne.buttonText,children:"Humidity"})})]})};var ae=n(2656),oe=h.default.create({URLArea:{flex:1,flexDirection:"row",padding:6,height:40,marginVertical:5},URLInput:{flex:4,height:40,padding:5,borderRadius:4,borderWidth:1,borderColor:S,backgroundColor:"white",fontSize:20,fontFamily:"monospace"},button:{flex:1,height:40,alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:O},active:{backgroundColor:j}});const ie=function(e){var t=e.URL,n=e.setURL,r=(0,o.useState)(t),i=(0,a.default)(r,2),s=i[0],d=i[1];return s!==t&&d(t),(0,E.jsxs)(l.default,{style:oe.URLArea,children:[(0,E.jsx)(ae.default,{onChange:function(e){return d(e.target.value)},value:s,style:oe.URLInput,onSubmitEditing:function(){return n(s)},editable:!1}),(0,E.jsx)(p.default,{onPress:function(){return n(s)},style:function(e){var t=e.pressed;return[oe.button,t?oe.active:null]},children:(0,E.jsx)(b.default,{name:"check",color:"white",iconStyle:{marginRight:5,marginLeft:5},size:26})})]})},le=n.p+"static/media/background.6ca7632447d73e57b4f3.jpg";function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var de=function(e){var t=e.env;return void 0===t||0===t.length?(0,E.jsx)(X,{}):Array.isArray(t)?(0,E.jsx)(J,{temperature:t[0].envdata.temp,humidity:t[0].envdata.humidity}):(0,E.jsxs)(l.default,{style:[R.appContainer,{margin:20}],children:[(0,E.jsx)(i.default,{style:{fontWeight:"bold",textAlign:"center",fontSize:24,color:y,margin:4},children:"A backend error has occurred."}),(0,E.jsx)(i.default,{style:{fontSize:20,fontFamily:"monospace"},children:t.name+": "+t.message}),(0,E.jsx)(c.default,{style:{marginTop:4},children:(0,E.jsx)(s.default,{style:{height:100,paddingVertical:1},children:(0,E.jsx)(i.default,{style:{fontFamily:"monospace"},children:t.stack})})})]})},ue=function(){var e=(0,o.useState)(!1),t=(0,a.default)(e,2),n=t[0],s=t[1],c=(0,o.useState)(0),h=(0,a.default)(c,2),g=h[0],p=h[1],b=(0,o.useState)([]),m=(0,a.default)(b,2),x=m[0],v=m[1],j=(0,o.useState)({labels:[-1],data:[0]}),w=(0,a.default)(j,2),C=w[0],O=w[1],k=(0,o.useState)("http://envmon.local:8101/"),S=(0,a.default)(k,2),T=S[0],P=S[1];return(0,o.useEffect)((function(){z(P)}),[]),(0,o.useEffect)((function(){setTimeout((function(){f.default.get(T).then((function(e){return v(e.data)})).catch((function(e){return v({name:e.name,message:e.message,stack:e.stack})}))}),2e3)}),[x]),(0,o.useEffect)((function(){v([])}),[T]),(0,o.useEffect)((function(){if(Array.isArray(x)&&void 0!==x&&0!==x.length&&!isNaN(x[0].envdata.temp)&&!isNaN(x[0].envdata.humidity)){var e=-1===C.labels[0]?{labels:[],data:[]}:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},C);C.data.length>=5&&(e.data.shift(),e.labels.shift()),e.data.push(Number(0===g?x[0].envdata.temp:x[0].envdata.humidity)),e.labels.push(x[0].uptime.hours+":"+x[0].uptime.minutes+":"+x[0].uptime.seconds),O(e)}}),[x]),(0,o.useEffect)((function(){O({labels:[],data:[]})}),[g]),(0,E.jsx)(u.default,{source:le,style:R.bgImage,children:(0,E.jsxs)(l.default,{style:R.appContainer,children:[(0,E.jsx)(d.default,{animated:!0,backgroundColor:y,hidden:!1}),(0,E.jsx)(B,{aboutButton:function(){return s(!0)}}),(0,E.jsx)(de,{env:x}),(0,E.jsx)(te,{chartData:C,chartType:g}),(0,E.jsx)(re,{chartType:g,setChartType:p}),(0,E.jsx)(i.default,{style:R.URLBarTitle,children:"Backend URL:"}),(0,E.jsx)(ie,{URL:T,setURL:P}),(0,E.jsx)(N,{visible:n,setModalVisible:s,envBackend:Array.isArray(x)&&void 0!==x[0]?x[0].backend:{name:"unknown",version:"unknown"}}),(0,E.jsx)(Z,{env:x})]})})};const ce=function(){return L()&&!I()?(0,E.jsx)(u.default,{source:le,style:R.bgImage,blurRadius:10,children:(0,E.jsx)(l.default,{style:R.webWrapper,children:(0,E.jsx)(ue,{})})}):(0,E.jsx)(ue,{})}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,l,s]=r,d=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(r);d<i.length;d++)o=i[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[429],(()=>n(3095)));r=n.O(r)})();
//# sourceMappingURL=main.bf215ded.js.map