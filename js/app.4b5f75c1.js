(function(e){function t(t){for(var i,o,c=t[0],s=t[1],l=t[2],d=0,h=[];d<c.length;d++)o=c[d],a[o]&&h.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"20b7":function(e,t,n){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("v-container",[n("router-view")],1)],1)],1)},r=[],o=n("2877"),c={},s=Object(o["a"])(c,a,r,!1,null,null,null),l=s.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-layout",[n("v-flex",{staticClass:"text-xs-center"},["train"==e.mode?[n("h1",[e._v("Take pictures that define your different moods")])]:[n("h1",[e._v("Take a picture to let us know how you feel about our service")])]],2)],1),n("v-layout",{staticClass:"mt-5",attrs:{"justify-center":""}},[n("v-flex",{attrs:{md5:""}},[n("v-card",[n("v-card-text",[n("v-layout",[n("v-flex",[n("v-btn",{attrs:{block:""},on:{click:function(t){return e.changeOption("test")}}},[e._v("Test")])],1),n("v-flex",[n("v-btn",{attrs:{block:""},on:{click:function(t){return e.changeOption("train")}}},[e._v("Train")])],1)],1),n("Camera"),"train"==e.mode?[n("v-radio-group",{attrs:{id:"emotion_options"},model:{value:e.classification,callback:function(t){e.classification=t},expression:"classification"}},e._l(e.emotions,function(e,t){return n("v-radio",{key:t,attrs:{label:e,value:t,name:"test"}})}),1),n("v-btn",{attrs:{color:"info",block:""},on:{click:function(t){return e.newModel()}}},[e._v("Train Model")])]:[n("v-btn",{attrs:{block:"",color:"info"},on:{click:function(t){return e.getEmotion()}}},[e._v("Get Emotion")])],e.detected_e?n("v-card",{attrs:{light:""}},[n("v-card-text",[e._v(e._s(e.detected_e))])],1):e._e()],2)],1)],1)],1)],1)},h=[],f=(n("96cf"),n("3b8d")),m=n("e814"),g=n.n(m),v=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("video",{attrs:{autoplay:"",playsinline:"",muted:"",id:"webcam",width:"250",height:"250"},domProps:{muted:!0}})])}),b=[],p=n("795b"),w=n.n(p),_=(n("673e"),n("d225")),y=n("b0b4"),x=n("0b53"),k=function(){function e(t){Object(_["a"])(this,e),this.webcamElement=t}return Object(y["a"])(e,[{key:"capture",value:function(){var e=this;return x["tidy"](function(){var t=x["fromPixels"](e.webcamElement),n=e.cropImage(t),i=n.expandDims(0);return i.toFloat().div(x["scalar"](127)).sub(x["scalar"](1))})}},{key:"cropImage",value:function(e){var t=Math.min(e.shape[0],e.shape[1]),n=e.shape[0]/2,i=n-t/2,a=e.shape[1]/2,r=a-t/2;return e.slice([i,r,0],[48,48,1])}},{key:"adjustVideoSize",value:function(e,t){var n=e/t;e>=t?this.webcamElement.width=n*this.webcamElement.height:e<t&&(this.webcamElement.height=this.webcamElement.width/n)}},{key:"setup",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new w.a(function(e,n){var i=navigator;navigator.getUserMedia=navigator.getUserMedia||i.webkitGetUserMedia||i.mozGetUserMedia||i.msGetUserMedia,navigator.getUserMedia?navigator.getUserMedia({video:!0},function(n){t.webcamElement.srcObject=n,t.webcamElement.addEventListener("loadeddata",Object(f["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:t.adjustVideoSize(t.webcamElement.videoWidth,t.webcamElement.videoHeight),e();case 2:case"end":return n.stop()}},n)})),!1)},function(e){n()}):n()}));case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),E={name:"Camera",data:function(){return{webcam:null}},mounted:function(){this.loadWebcam()},methods:{loadWebcam:function(){this.webcam=new k(document.getElementById("webcam")),this.webcam.setup()}}},j=E,O=(n("b6df"),Object(o["a"])(j,v,b,!1,null,"e9cc1076",null)),T=O.exports,R=n("837b"),M=n("be50"),$=(n("bc3a"),n("8aa5")),P=(n("e71f"),{}),C={apiKey:"AIzaSyAenH3ieswlwDrb3NIlTgOZebKUPkzav0g",authDomain:"https://facial-recognition-ef4da.firebaseio.com",databaseURL:"https://facial-recognition-ef4da.firebaseio.com",projectId:"facial-recognition-ef4da",storageBucket:""};$["initializeApp"](C),$["firestore"]().settings(P);var S=$,U={name:"Home",components:{Camera:T},data:function(){return{emotions:["satisfied","neutral","unsatisfied"],classifier:null,mobilenet:null,classification:null,detected_e:null,mode:"train",boards:[],errors:[],ref:S.firestore().collection("trainnings"),selectedBoard:null}},methods:{getTrainings:function(){var e=this;this.ref.onSnapshot(function(t){e.boards=[],t.forEach(function(t){e.boards.push({key:t.id,data:t.data()})}),e.boards.forEach(function(t){console.log("fetch data for",t.key),e.getLogit(t.key)})})},getLogit:function(e){var t=this,n=this.ref.doc(e);n.get().then(function(n){if(n.exists){var i=n.data(),a=document.createElement("img"),r=t.$children[0].$children[2].webcam.webcamElement,o=r.width/r.height;a.src=i.image,a.width=r.width,a.height=r.height,r.width>=r.height?a.width=o*r.height:r.width<r.height&&(a.height=r.width/o),t.loadTraining(a,i.classification)}else console.log(e,"No such document!")})},loadTraining:function(e,t){var n=x["fromPixels"](e),i=this.mobilenet.infer(n,"conv_preds");console.log(i,"classification: ",t),this.classifier.addExample(i,g()(t)),console.log("training registered")},init:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.classifier=M["a"](),e.next=3,R["a"]();case 3:this.mobilenet=e.sent,this.getTrainings();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),newModel:function(){var e=this.$children[0].$children[2].webcam.webcamElement,t=x["fromPixels"](e),n=document.createElement("canvas"),i=n.getContext("2d"),a=e.width/e.height,r=e.width,o=e.height;e.width>=e.height?r=a*e.height:e.width<e.height&&(o=e.width/a),i.drawImage(e,0,0,r,o);var c=n.toDataURL(),s=this.mobilenet.infer(t,"conv_preds"),l=this.classification+0;console.log(s),this.fbRegister(s,l,c,n)},fbRegister:function(e,t,n,i){var a=this,r={classification:t,image:n};this.ref.add(r).then(function(r){console.log("docREF",r),console.log("logits",e),console.log("document added to FB");var o=document.createElement("img");o.src=n,o.height=i.height,o.width=i.height,a.loadTraining(o,t)})},getEmotion:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=x["fromPixels"](this.$children[0].$children[2].webcam.webcamElement),n=this.mobilenet.infer(t,"conv_preds"),e.next=4,this.classifier.predictClass(n);case 4:i=e.sent,this.detected_e=this.emotions[i.classIndex];case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeOption:function(e){this.mode=e,this.detected_e=null}},mounted:function(){this.init()},created:function(){console.clear()}},I=U,L=Object(o["a"])(I,d,h,!1,null,null,null),z=L.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard"},[n("h1",[e._v("Here's a summmary of how users feel about your service in realtime")]),n("div",[e._l(e.emotions,function(t,i){return[n("div",{key:i},[n("strong",[e._v(e._s(i))]),e._v(" clients: "+e._s(t)+"\n      ")])]})],2)])},D=[],F={name:"Dashboard",data:function(){return{emotions:{angry:0,neutral:0,happy:0},pusher_obj:null,e_channel:null}},mounted:function(){this.init()},methods:{init:function(){this.pusher_obj=new Pusher("be08a90e8cd5beb44bed",{cluster:"ap1",encrypted:!0}),this.e_channel=this.pusher_obj.subscribe("emotion_channel");var e=this;this.e_channel.bind("new_emotion",function(t){e.emotions["".concat(t.emotion)]+=1})}}},G=F,H=Object(o["a"])(G,B,D,!1,null,null,null),A=H.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-layout",[n("v-flex",{staticClass:"text-xs-center"},["train"==e.mode?[n("h1",[e._v("Take pictures that define your different moods")])]:[n("h1",[e._v("Take a picture to let us know how you feel about our service")])]],2)],1),n("v-layout",{staticClass:"mt-5",attrs:{"justify-center":""}},[n("v-flex",{attrs:{md5:""}},[n("v-card",[n("v-card-text",[n("v-layout",[n("v-flex",[n("v-btn",{attrs:{block:""},on:{click:function(t){return e.changeOption("test")}}},[e._v("Test")])],1),n("v-flex",[n("v-btn",{attrs:{block:""},on:{click:function(t){return e.changeOption("train")}}},[e._v("Train")])],1)],1),n("Camera"),"train"==e.mode?[n("v-radio-group",{attrs:{id:"emotion_options"},model:{value:e.classification,callback:function(t){e.classification=t},expression:"classification"}},e._l(e.emotions,function(e,t){return n("v-radio",{key:t,attrs:{label:e,value:t,name:"test"}})}),1),n("v-btn",{attrs:{color:"info",block:""},on:{click:function(t){return e.newModel()}}},[e._v("Train Model")])]:[n("v-btn",{attrs:{block:"",color:"info"},on:{click:function(t){return e.getEmotion()}}},[e._v("Get Emotion")])],e.detected_e?n("v-card",{attrs:{light:""}},[n("v-card-text",[e._v(e._s(e.detected_e))])],1):e._e()],2)],1)],1)],1)],1)},W=[],J={name:"Staging",components:{Camera:T},data:function(){return{emotions:["satisfied","neutral","unsatisfied"],classifier:null,mobilenet:null,classification:null,detected_e:null,mode:"train",boards:[],errors:[],ref:S.firestore().collection("trainnings"),selectedBoard:null}},methods:{getTrainings:function(){var e=this;this.ref.onSnapshot(function(t){e.boards=[],t.forEach(function(t){e.boards.push({key:t.id,data:t.data()})}),e.boards.forEach(function(t){console.log("fetch data for",t.key),e.getLogit(t.key)})})},getLogit:function(e){var t=this,n=this.ref.doc(e);n.get().then(function(n){if(n.exists){var i=n.data(),a=document.createElement("img"),r=t.$children[0].$children[2].webcam.webcamElement,o=r.width/r.height;a.src=i.image,a.width=r.width,a.height=r.height,r.width>=r.height?a.width=o*r.height:r.width<r.height&&(a.height=r.width/o),t.loadTraining(a,i.classification)}else console.log(e,"No such document!")})},loadTraining:function(e,t){var n=x["fromPixels"](e),i=this.mobilenet.infer(n,"conv_preds");console.log(i,"classification: ",t),this.classifier.addExample(i,g()(t)),console.log("training registered")},init:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.classifier=M["a"](),e.next=3,R["a"]();case 3:this.mobilenet=e.sent,this.getTrainings();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),newModel:function(){var e=this.$children[0].$children[2].webcam.webcamElement,t=x["fromPixels"](e),n=document.createElement("canvas"),i=n.getContext("2d"),a=e.width/e.height,r=e.width,o=e.height;e.width>=e.height?r=a*e.height:e.width<e.height&&(o=e.width/a),i.drawImage(e,0,0,r,o);var c=n.toDataURL(),s=this.mobilenet.infer(t,"conv_preds"),l=this.classification+0;console.log(s),this.fbRegister(s,l,c,n)},fbRegister:function(e,t,n,i){var a=this,r={classification:t,image:n};this.ref.add(r).then(function(r){console.log("docREF",r),console.log("logits",e),console.log("document added to FB");var o=document.createElement("img");o.src=n,o.height=i.height,o.width=i.height,a.loadTraining(o,t)})},getEmotion:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=x["fromPixels"](this.$children[0].$children[2].webcam.webcamElement),n=this.mobilenet.infer(t,"conv_preds"),e.next=4,this.classifier.predictClass(n);case 4:i=e.sent,this.detected_e=this.emotions[i.classIndex];case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeOption:function(e){this.mode=e,this.detected_e=null}},mounted:function(){this.init()},created:function(){console.clear()}},K=J,V=Object(o["a"])(K,N,W,!1,null,null,null),Z=V.exports;i["default"].use(u["a"]);var q=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:z},{path:"/dashboard",name:"dashboard",component:A},{path:"/staging",name:"staging",component:Z}]}),Q=n("ce5b"),X=n.n(Q);n("bf40");i["default"].use(X.a),i["default"].config.productionTip=!1,new i["default"]({router:q,render:function(e){return e(l)}}).$mount("#app")},b6df:function(e,t,n){"use strict";var i=n("20b7"),a=n.n(i);a.a}});
//# sourceMappingURL=app.4b5f75c1.js.map