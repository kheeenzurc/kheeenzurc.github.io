(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)i=s[u],r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6baa7db9"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("1356"),r=n.n(a);r.a},"0a6e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[e._v("\n     dashboard\n    ")])],1)],1)},r=[],o={data:function(){return{}}},i=o,s=n("2877"),c=n("6544"),l=n.n(c),u=n("a523"),d=n("0e8f"),m=n("a722"),f=Object(s["a"])(i,a,r,!1,null,null,null);t["default"]=f.exports;l()(f,{VContainer:u["a"],VFlex:d["a"],VLayout:m["a"]})},1:function(e,t){},1356:function(e,t,n){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"4e69":function(e,t,n){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"font-weight-light"},[e._v("Facial Recognition")])])],1),n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"}},[n("router-link",{attrs:{to:"/about"}},[e._v("\n          About\n        ")])],1),n("v-btn",{attrs:{flat:"",color:"primary"}},[n("router-link",{attrs:{to:"/admin/settings"}},[e._v("\n          Settings\n        ")])],1)],1),n("v-content",[n("router-view")],1),n("v-footer",{staticClass:"pa-3"},[n("span",{staticClass:"font-weight-medium"},[e._v("Taguig City University")]),n("v-spacer"),n("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)],1)},i=[],s={name:"App",data:function(){return{}}},c=s,l=(n("034f"),n("2877")),u=n("6544"),d=n.n(u),m=n("7496"),f=n("8336"),v=n("549c"),p=n("553a"),b=n("9910"),h=n("71d9"),g=n("2a7f"),w=Object(l["a"])(c,o,i,!1,null,null,null),y=w.exports;d()(w,{VApp:m["a"],VBtn:f["a"],VContent:v["a"],VFooter:p["a"],VSpacer:b["a"],VToolbar:h["a"],VToolbarTitle:g["a"]});var x=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{wrap:"","justify-center":"true"}},[n("v-flex",{attrs:{"text-xs-center":"",xs12:""}},[n("h1",{staticClass:"title text-uppercase"},[e._v("Take a picture to let us know how you feel")]),n("p",{staticClass:"subheading font-weight-thin"},[e._v("about our service")])]),n("v-flex",{attrs:{sm7:"",md6:""}},[n("Camera"),n("v-btn",{attrs:{large:"",block:"",color:"primary",dark:""},on:{click:e.capture}},[e._v("capture")])],1)],1),n("v-dialog",{attrs:{persistent:"",width:"800"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-card",[n("v-card-title",[n("h3",{staticClass:"font-weight-light display-1"},[e._v("Review")])]),n("v-card-text",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{sm4:"",md4:""}},[n("div",{attrs:{id:"result-image"}}),n("p",{staticClass:"result"},[e._v(e._s(e.review.emotion))])]),n("v-flex",{attrs:{sm8:"",md8:""}},[n("div",{staticClass:"px-3"},[n("div",{staticClass:"pb-1"},[n("label",[e._v("Name: "),n("i",{staticClass:"grey--text"},[e._v("Optional")])]),n("v-text-field",{model:{value:e.review.name,callback:function(t){e.$set(e.review,"name",t)},expression:"review.name"}})],1),n("div",{staticClass:"pb-1"},[n("label",[e._v("Comments: "),n("i",{staticClass:"grey--text"},[e._v("Optional")])]),n("v-textarea",{model:{value:e.review.comment,callback:function(t){e.$set(e.review,"comment",t)},expression:"review.comment"}})],1)])])],1)],1),n("v-card-actions",{staticClass:"mt-4"},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"success"}},[e._v("\n\t\t\t\t\tSubmit\n\t\t\t\t")]),n("v-btn",{attrs:{flat:"",color:"secondary"},on:{click:e.resumeCamera}},[e._v("\n\t\t\t\t\tCancel\n\t\t\t\t")])],1)],1)],1)],1)},_=[],k=(n("96cf"),n("3b8d")),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[n("video",{attrs:{autoplay:"",playsinline:"",muted:"",id:"webcam"},domProps:{muted:!0}})])],1)},j=[],E=n("795b"),O=n.n(E),T=(n("673e"),n("d225")),M=n("b0b4"),S=n("0b53"),P=function(){function e(t){Object(T["a"])(this,e),this.webcamElement=t}return Object(M["a"])(e,[{key:"capture",value:function(){var e=this;return S["tidy"](function(){var t=S["fromPixels"](e.webcamElement),n=e.cropImage(t),a=n.expandDims(0);return a.toFloat().div(S["scalar"](127)).sub(S["scalar"](1))})}},{key:"cropImage",value:function(e){var t=Math.min(e.shape[0],e.shape[1]),n=e.shape[0]/2,a=n-t/2,r=e.shape[1]/2,o=r-t/2;return e.slice([a,o,0],[48,48,1])}},{key:"adjustVideoSize",value:function(e,t){var n=e/t;e>=t?this.webcamElement.width=n*this.webcamElement.height:e<t&&(this.webcamElement.height=this.webcamElement.width/n)}},{key:"setup",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new O.a(function(e,n){var a=navigator;navigator.getUserMedia=navigator.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia,navigator.getUserMedia?navigator.getUserMedia({video:!0},function(n){t.webcamElement.srcObject=n,t.webcamElement.addEventListener("loadeddata",Object(k["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:t.adjustVideoSize(t.webcamElement.videoWidth,t.webcamElement.videoHeight),e();case 2:case"end":return n.stop()}},n)})),!1)},function(e){n()}):n()}));case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),R={data:function(){return{webcam:null}},mounted:function(){this.loadWebcam()},methods:{loadWebcam:function(){this.webcam=new P(document.getElementById("webcam")),this.webcam.setup()}}},F=R,B=(n("6b11"),n("b0af")),U=n("99d9"),$=Object(l["a"])(F,V,j,!1,null,"291e75f2",null),A=$.exports;d()($,{VCard:B["a"],VCardText:U["b"]});var I=n("837b"),L=n("be50"),N=(n("bc3a"),{components:{Camera:A},data:function(){return{modal:!1,review:{emotion:"",name:"",comment:""}}},methods:{init:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.classifier=L["a"](),e.next=3,I["a"]();case 3:this.mobilenet=e.sent;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),capture:function(){var e=document.getElementById("webcam"),t=document.createElement("canvas"),n=document.getElementById("result-image");t.width=300,t.height=300;var a=t.getContext("2d");a.drawImage(e,0,0,t.width,t.height),n.innerHTML="",n.appendChild(t),e.pause(),this.review.emotion="satisfied",this.modal=!0},resumeCamera:function(){this.modal=!1,document.getElementById("webcam").play()}}}),G=N,z=(n("cccb"),n("12b2")),D=n("a523"),W=n("169a"),q=n("0e8f"),H=n("a722"),J=n("2677"),Y=n("a844"),K=Object(l["a"])(G,C,_,!1,null,null,null),Q=K.exports;d()(K,{VBtn:f["a"],VCard:B["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:z["a"],VContainer:D["a"],VDialog:W["a"],VFlex:q["a"],VLayout:H["a"],VSpacer:b["a"],VTextField:J["a"],VTextarea:Y["a"]});n("0a6e");var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{wrap:"","justify-center":"true"}},[n("v-flex",{attrs:{"text-xs-center":"",xs12:""}},[n("h1",{staticClass:"title text-uppercase"},[e._v("Take a picture to let us know how you feel")]),n("p",{staticClass:"subheading font-weight-thin"},[e._v("about our service")])]),n("v-flex",{attrs:{sm7:"",md6:""}},[n("Camera"),n("div",{staticClass:"my-3"},[n("v-card",[n("v-card-text",[n("v-radio-group",{model:{value:e.emotion,callback:function(t){e.emotion=t},expression:"emotion"}},[n("v-radio",{attrs:{label:"Satisfied",value:"0"}}),n("v-radio",{attrs:{label:"Neutral",value:"1"}}),n("v-radio",{attrs:{label:"Unsatisfied",value:"3"}})],1)],1)],1)],1),n("v-btn",{attrs:{large:"",block:"",color:"primary",dark:""},on:{click:e.trainModel}},[e._v("train")])],1)],1)],1)},Z=[],ee=n("e814"),te=n.n(ee),ne={components:{Camera:A},data:function(){return{emotion:"satisfied",classifier:null,mobilenet:null}},methods:{init:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.classifier=L["a"](),e.next=3,I["a"]();case 3:this.mobilenet=e.sent;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),trainModel:function(){document.getElementById("webcam");console.log(S);try{var e=S["fromPixels"](this.$children[0].webcam.webcamElement),t=this.mobilenet.infer(e,"conv_preds");this.classifier.addExample(t,te()(this.emotion))}catch(n){console.log(n)}}}},ae=ne,re=n("67b6"),oe=n("43a6"),ie=Object(l["a"])(ae,X,Z,!1,null,null,null),se=ie.exports;d()(ie,{VBtn:f["a"],VCard:B["a"],VCardText:U["b"],VContainer:D["a"],VFlex:q["a"],VLayout:H["a"],VRadio:re["a"],VRadioGroup:oe["a"]}),a["a"].use(x["a"]);var ce=new x["a"]({mode:"history",base:"/app/",routes:[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/admin",name:"dashboard",component:function(){return Promise.resolve().then(n.bind(null,"0a6e"))}},{path:"/admin/settings",name:"settings",component:se}]}),le=n("9483");Object(le["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:ce,render:function(e){return e(y)}}).$mount("#app")},6:function(e,t){},"6b11":function(e,t,n){"use strict";var a=n("df3a"),r=n.n(a);r.a},7:function(e,t){},cccb:function(e,t,n){"use strict";var a=n("4e69"),r=n.n(a);r.a},df3a:function(e,t,n){}});
//# sourceMappingURL=app.73fd3b19.js.map