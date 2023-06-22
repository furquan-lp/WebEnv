(()=>{"use strict";var e={2567:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(4942),a=n(885),o=n(9526),i=n(7992),l=n(4029),s=n(7666),d=n(1445),u=n(6879),c=n(1511),f=n(8615),h=n(1091),g=n(4818),p=n(3556),b=n(352),x=n(9257),m=n(5377),y="#113f67",v="#38598b",j="#a2a8d3",w="#e7eaf6",C="#5585b5",k="#53a8b6",S="#79c2d0",O="#bbe4e9",R=h.default.create({appContainer:{flex:1},webWrapper:{flex:1,height:720,width:480,alignSelf:"center"},bgImage:{flex:1},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:w,borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},button:{borderRadius:20,padding:10,elevation:2},buttonOpen:{backgroundColor:S},buttonClose:{backgroundColor:k},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"justify"},URLBarTitle:{fontSize:24,fontWeight:"bold",marginHorizontal:5,marginTop:10,color:"white"}}),T=n(7362),P=n(9014);const A=JSON.parse('{"name":"webenv","homepage":"https://webenv.nextdev.in/","version":"1.1.0-cloudflare","repository":{"type":"git","url":"https://github.com/furquan-lp/WebEnv.git"},"main":"node_modules/expo/AppEntry.js","scripts":{"start":"expo start","android":"expo start --android","ios":"expo start --ios","web":"expo start --web","eject":"expo eject","deploy":"gh-pages -d web-build"},"dependencies":{"@expo-google-fonts/righteous":"^0.2.3","@expo/webpack-config":"^18.1.0","axios":"^1.4.0","expo":"~48.0.19","expo-font":"~11.1.1","expo-status-bar":"~1.4.4","react":"18.2.0","react-dom":"18.2.0","react-native":"0.72.0","react-native-chart-kit":"^6.12.0","react-native-svg":"13.9.0","react-native-vector-icons":"^9.2.0","react-native-web":"0.19.5","styled-components":"^5.3.11"},"devDependencies":{"@babel/core":"^7.22.5","gh-pages":"^5.0.0"},"private":true}');const z=function(e){f.default.get(A.homepage+"data/webenv.json").then((function(t){t.data.backendRepo,e(t.data.backendURL)}))},L=function(){return"web"===T.default.OS},I=function(){return P.default.get("window").height>P.default.get("window").width},D=function(){return A.version},W=function(){return A.repository.url};var U=n(7557),B=h.default.create({container:{height:48,alignSelf:"stretch",flexDirection:"row",backgroundColor:v,alignItems:"center",justifyContent:"space-between",paddingLeft:10,paddingRight:10},title:{flex:1,color:"white",marginLeft:15,fontSize:24,fontFamily:"Righteous_400Regular"}}),E=function(e){var t=e.onPress;return(0,U.jsx)(b.default.Button,{name:"info",backgroundColor:C,iconStyle:{marginLeft:5,marginRight:5},borderRadius:20,size:15,onPress:t})};const V=function(e){var t=e.aboutButton,n=(0,x.useFonts)({Righteous_400Regular:m.Righteous_400Regular});return(0,a.default)(n,1)[0]?(0,U.jsxs)(l.default,{style:B.container,children:[(0,U.jsx)(p.default,{onPress:function(){return g.default.openURL(W())},children:(0,U.jsx)(b.default,{name:"thermometer",color:O,size:26})}),(0,U.jsx)(i.default,{style:B.title,children:"WebEnv"}),(0,U.jsx)(E,{onPress:t})]}):null};var F=n(5375),_=h.default.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:w,borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},button:{borderRadius:20,padding:10,elevation:2},buttonOpen:{backgroundColor:S},buttonClose:{backgroundColor:k},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalTitle:{fontSize:L()?20:18,fontWeight:"bold",marginBottom:5},modalText:{fontSize:14,marginBottom:15,textAlign:"justify"}});const N=function(e){var t=e.visible,n=e.setModalVisible,r=e.envBackend;return(0,U.jsx)(l.default,{style:_.centeredView,children:(0,U.jsx)(F.default,{animationType:"slide",transparent:!0,visible:t,onRequestClose:function(){return n(!t)},children:(0,U.jsx)(l.default,{style:_.centeredView,children:(0,U.jsxs)(l.default,{style:_.modalView,children:[(0,U.jsxs)(i.default,{style:_.modalTitle,children:["WebEnv v",D()]}),(0,U.jsxs)(i.default,{style:_.modalText,children:["Running on ",r.name," version ",r.version," backend ","\n","Copyright (C) 2022 Syed Furquan Ahmad. All rights reserved. ","\n"]}),(0,U.jsx)(p.default,{style:[_.button,_.buttonClose],onPress:function(){return n(!t)},children:(0,U.jsx)(i.default,{style:_.textStyle,children:"Ok"})})]})})})})};var M=n(250),q=n(9992),G=h.default.create({cards:{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:5,marginVertical:10},card:{flex:1,borderRadius:10,height:150,alignItems:"center",justifyContent:"center",margin:6},cardColorShadow:{backgroundColor:L()?"rgba(231, 234, 246, 0.5)":w,shadowColor:C,shadowOffset:{width:0,height:3},shadowOpacity:.27,shadowRadius:4.65,elevation:6},wrapper:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},unjustified:{justifyContent:"flex-start"},text:{color:y,fontSize:L()?44:34,fontWeight:"bold",margin:0,letterSpacing:1},subtitle:{color:v,fontSize:L()?36:30,alignSelf:"flex-end",margin:5,marginTop:0,letterSpacing:2}}),H=function(e){var t=e.temperature;return(0,U.jsxs)(l.default,{style:[G.card,G.cardColorShadow],children:[(0,U.jsxs)(l.default,{style:G.wrapper,children:[(0,U.jsx)(M.default,{name:"thermometer",color:C,size:L()?70:50}),(0,U.jsxs)(i.default,{style:G.text,children:[Number(t),"\xb0C"]})]}),(0,U.jsxs)(i.default,{style:G.subtitle,children:[(1.8*t+32).toFixed(2),"\xb0F"]})]})},J=function(e){var t=e.humidity;return(0,U.jsxs)(l.default,{style:[G.card,G.cardColorShadow],children:[(0,U.jsxs)(l.default,{style:G.wrapper,children:[(0,U.jsx)(M.default,{name:"droplet",color:C,size:L()?55:50}),(0,U.jsx)(i.default,{style:[G.text,{letterSpacing:4}],children:t})]}),(0,U.jsx)(i.default,{style:G.text,children:"%"})]})},K=function(e){var t=e.ppm;return(0,U.jsxs)(l.default,{style:[{display:"flex",flexDirection:"row",justifyContent:"space-around",marginHorizontal:5,padding:5,borderRadius:10},G.cardColorShadow],children:[(0,U.jsx)(q.default,{name:"molecule-co2",color:C,size:L()?60:55}),(0,U.jsxs)(i.default,{style:G.text,children:[t," PPM"]})]})};const Q=function(e){var t=e.temperature,n=e.humidity,r=e.ppm;return(0,U.jsxs)(l.default,{style:{display:"flex",flexDirection:"column"},children:[(0,U.jsxs)(l.default,{style:G.cards,children:[(0,U.jsx)(H,{temperature:t}),(0,U.jsx)(J,{humidity:n})]}),(0,U.jsx)(K,{ppm:r})]})};var X=n(6889),Y=h.default.create({container:{flex:1,justifyContent:"center",marginTop:60}});const Z=function(){return(0,U.jsx)(l.default,{style:Y.container,children:(0,U.jsx)(X.default,{size:"large",color:k})})};var $=h.default.create({container:{flex:1,alignItems:"center",justifyContent:"space-between",flexDirection:"row",margin:5,marginTop:0},text:{color:w,fontSize:20,letterSpacing:3}});const ee=function(e){var t=e.env;return void 0===t||0===t.length?(0,U.jsx)(i.default,{style:[$.container,$.text],children:"Connecting..."}):Array.isArray(t)?(0,U.jsxs)(l.default,{style:$.container,children:[(0,U.jsx)(i.default,{style:$.text,children:"Conntected."}),(0,U.jsxs)(i.default,{style:$.text,children:["Up ",t[0].uptime.hours,":",t[0].uptime.minutes,":",t[0].uptime.seconds]})]}):(0,U.jsx)(i.default,{style:[$.container,$.text],children:"Couldn't find backend."})};var te=n(4325),ne=function(e){return{labels:e.labels,datasets:[{data:e.data}]}};const re=function(e){var t=e.chartData,n=e.chartType;return(0,U.jsx)(l.default,{style:{marginTop:t.data.length?20:100,alignItems:"center"},children:(0,U.jsx)(te.LineChart,{data:ne(t),width:L()&&!I()?470:P.default.get("window").width-10,height:220,yAxisSuffix:0==n?"\xb0C":"%",yAxisInterval:2,chartConfig:{backgroundColor:v,backgroundGradientFrom:v,backgroundGradientTo:C,backgroundGradientToOpacity:.5,decimalPlaces:1,color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba(255, 255, 255, "+e+")"},labelColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba(255, 255, 255, "+e+")"},style:{borderRadius:16},propsForDots:{r:"6",strokeWidth:"2",stroke:v}},bezier:!0,style:{marginTop:40,marginBottom:0,borderRadius:16}})})};var ae=h.default.create({container:{flexDirection:"row",padding:5,justifyContent:"center",marginBottom:10},buttonText:{color:"white",fontSize:25,fontWeight:"bold",textAlign:"center"},button:{flex:1,margin:2,padding:5,alignItems:"center",justifyContent:"center",borderRadius:5},nonPressed:{backgroundColor:k},pressed:{backgroundColor:O},active:{backgroundColor:j}});const oe=function(e){var t=e.chartType,n=e.setChartType,r=function(){n(1^t)};return(0,U.jsxs)(l.default,{style:ae.container,children:[(0,U.jsx)(p.default,{onPress:r,disabled:0===t,style:function(e){var n=e.pressed;return[ae.button,0===t?ae.pressed:ae.nonPressed,n?ae.active:null]},children:(0,U.jsx)(i.default,{style:ae.buttonText,children:"Temperature"})}),(0,U.jsx)(p.default,{onPress:r,disabled:0!==t,style:function(e){var n=e.pressed;return[ae.button,0!==t?ae.pressed:ae.nonPressed,n?ae.active:null]},children:(0,U.jsx)(i.default,{style:ae.buttonText,children:"Humidity"})})]})};var ie=n(2656),le=h.default.create({URLArea:{flex:1,flexDirection:"row",padding:6,height:40,marginVertical:5},URLInput:{flex:4,height:40,padding:5,borderRadius:4,borderWidth:1,borderColor:O,backgroundColor:"white",fontSize:20,fontFamily:"monospace"},button:{flex:1,height:40,alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:k},active:{backgroundColor:j}});const se=function(e){var t=e.URL,n=e.setURL,r=(0,o.useState)(t),i=(0,a.default)(r,2),s=i[0],d=i[1];return s!==t&&d(t),(0,U.jsxs)(l.default,{style:le.URLArea,children:[(0,U.jsx)(ie.default,{onChange:function(e){return d(e.target.value)},value:s,style:le.URLInput,onSubmitEditing:function(){return n(s)},editable:!1}),(0,U.jsx)(p.default,{onPress:function(){return n(s)},style:function(e){var t=e.pressed;return[le.button,t?le.active:null]},children:(0,U.jsx)(b.default,{name:"check",color:"white",iconStyle:{marginRight:5,marginLeft:5},size:26})})]})},de=n.p+"static/media/background.6ca7632447d73e57b4f3.jpg";function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ce=function(e){var t=e.env;return void 0===t||0===t.length?(0,U.jsx)(Z,{}):Array.isArray(t)?(0,U.jsx)(Q,{temperature:t[0].envdata.temp,humidity:t[0].envdata.humidity,ppm:t[0].envdata.co2}):(0,U.jsxs)(l.default,{style:[R.appContainer,{margin:20}],children:[(0,U.jsx)(i.default,{style:{fontWeight:"bold",textAlign:"center",fontSize:24,color:y,margin:4},children:"A backend error has occurred."}),(0,U.jsx)(i.default,{style:{fontSize:20,fontFamily:"monospace"},children:t.name+": "+t.message}),(0,U.jsx)(c.default,{style:{marginTop:4},children:(0,U.jsx)(s.default,{style:{height:100,paddingVertical:1},children:(0,U.jsx)(i.default,{style:{fontFamily:"monospace"},children:t.stack})})})]})},fe=function(){var e=(0,o.useState)(!1),t=(0,a.default)(e,2),n=t[0],s=t[1],c=(0,o.useState)(0),h=(0,a.default)(c,2),g=h[0],p=h[1],b=(0,o.useState)([]),x=(0,a.default)(b,2),m=x[0],v=x[1],j=(0,o.useState)({labels:[-1],data:[0]}),w=(0,a.default)(j,2),C=w[0],k=w[1],S=(0,o.useState)("http://envmon.local:8101/"),O=(0,a.default)(S,2),T=O[0],P=O[1];return(0,o.useEffect)((function(){z(P)}),[]),(0,o.useEffect)((function(){setTimeout((function(){f.default.get(T).then((function(e){return v(e.data)})).catch((function(e){return v({name:e.name,message:e.message,stack:e.stack})}))}),2e3)}),[m]),(0,o.useEffect)((function(){v([])}),[T]),(0,o.useEffect)((function(){if(Array.isArray(m)&&void 0!==m&&0!==m.length&&!isNaN(m[0].envdata.temp)&&!isNaN(m[0].envdata.humidity)){var e=-1===C.labels[0]?{labels:[],data:[]}:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},C);C.data.length>=5&&(e.data.shift(),e.labels.shift()),e.data.push(Number(0===g?m[0].envdata.temp:m[0].envdata.humidity)),e.labels.push(m[0].uptime.hours+":"+m[0].uptime.minutes+":"+m[0].uptime.seconds),k(e)}}),[m]),(0,o.useEffect)((function(){k({labels:[],data:[]})}),[g]),(0,U.jsx)(u.default,{source:de,style:R.bgImage,children:(0,U.jsxs)(l.default,{style:R.appContainer,children:[(0,U.jsx)(d.default,{animated:!0,backgroundColor:y,hidden:!1}),(0,U.jsx)(V,{aboutButton:function(){return s(!0)}}),(0,U.jsx)(ce,{env:m}),(0,U.jsx)(re,{chartData:C,chartType:g}),(0,U.jsx)(oe,{chartType:g,setChartType:p}),(0,U.jsx)(i.default,{style:R.URLBarTitle,children:"Backend URL:"}),(0,U.jsx)(se,{URL:T,setURL:P}),(0,U.jsx)(N,{visible:n,setModalVisible:s,envBackend:Array.isArray(m)&&void 0!==m[0]?m[0].backend:{name:"unknown",version:"unknown"}}),(0,U.jsx)(ee,{env:m})]})})};const he=function(){return L()&&!I()?(0,U.jsx)(u.default,{source:de,style:R.bgImage,blurRadius:10,children:(0,U.jsx)(l.default,{style:R.webWrapper,children:(0,U.jsx)(fe,{})})}):(0,U.jsx)(fe,{})}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,l,s]=r,d=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(r);d<i.length;d++)o=i[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[908],(()=>n(409)));r=n.O(r)})();
//# sourceMappingURL=main.ca88fb4e.js.map