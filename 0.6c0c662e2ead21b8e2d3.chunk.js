webpackJsonp([0],{"./app/components/Download/index.js":function(n,e,o){"use strict";function t(n){var e=n.year,t=n.name,i=n.hash,l=n.photo,u=o.i(a.a)(e,t,i,l),d=o.i(a.a)(e,t,i,l,n.sizes[n.sizes.length-1]),c=o.i(a.a)(e,t,i,l,n.sizes[n.sizes.length-2]);return s(r.a,{},void 0,p,s("ol",{},void 0,s("li",{},void 0,s("a",{href:u},void 0,"Origineel")),s("li",{},void 0,s("a",{href:d},void 0,"Groot")),s("li",{},void 0,s("a",{href:c},void 0,"Normaal"))))}var i=o("./node_modules/react/react.js"),r=(o.n(i),o("./app/components/Download/styles.js")),a=o("./app/utils/utils.js");e.a=t;var s=function(){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,o,t,i){var r=e&&e.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&r)for(var s in r)void 0===o[s]&&(o[s]=r[s]);else o||(o=r||{});if(1===a)o.children=i;else if(a>1){for(var p=Array(a),l=0;l<a;l++)p[l]=arguments[l+3];o.children=p}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}(),p=s("span",{},void 0,"Download ⟶")},"./app/components/Download/styles.js":function(n,e,o){"use strict";var t=o("./node_modules/styled-components/lib/index.js"),i=o.n(t);o.d(e,"a",function(){return a});var r=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  padding: 4px 6px;\n  color: white;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.2);\n\n  z-index: 1000;\n\n  display: flex;\n\n  & a, & a:visited {\n    color: white;\n  }\n\n  & ol {\n    display: none;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  & ol li {\n    margin-left: 1em;\n    padding: 0;\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  &:hover ol {\n    display: flex;\n  }\n"],["\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  padding: 4px 6px;\n  color: white;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.2);\n\n  z-index: 1000;\n\n  display: flex;\n\n  & a, & a:visited {\n    color: white;\n  }\n\n  & ol {\n    display: none;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  & ol li {\n    margin-left: 1em;\n    padding: 0;\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  &:hover ol {\n    display: flex;\n  }\n"]),a=i.a.header(r)},"./app/containers/Photo/index.js":function(n,e,o){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function a(n){return{changeRoute:function(e){return n(o.i(u.push)(e))}}}Object.defineProperty(e,"__esModule",{value:!0});var s=o("./node_modules/react/react.js"),p=o.n(s),l=o("./node_modules/react-redux/lib/index.js"),u=(o.n(l),o("./node_modules/react-router-redux/lib/index.js")),d=(o.n(u),o("./node_modules/react-dom/index.js")),c=(o.n(d),o("./node_modules/reselect/es/index.js")),h=o("./app/utils/utils.js"),f=o("./app/containers/App/selectors.js"),b=o("./app/components/Download/index.js"),v=o("./app/containers/Photo/styles.js");o.d(e,"Photo",function(){return w});var y=function(){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,o,t,i){var r=e&&e.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&r)for(var s in r)void 0===o[s]&&(o[s]=r[s]);else o||(o=r||{});if(1===a)o.children=i;else if(a>1){for(var p=Array(a),l=0;l<a;l++)p[l]=arguments[l+3];o.children=p}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}(),g=function(){function n(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}}(),m=y("div",{},void 0,"Loading"),x=y(v.a,{}),w=function(n){function e(){return t(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,n),g(e,[{key:"setLoading",value:function(){o.i(d.findDOMNode)(this.refs.photo).src=""}},{key:"getPreviousPhoto",value:function(n){var e=this.props.photoMap[n];if(e)return e.previous}},{key:"getNextPhoto",value:function(n){var e=this.props.photoMap[n];if(e)return e.next}},{key:"previousPhoto",value:function(){var n=this.getPreviousPhoto(this.props.params.photo);if(n){this.setLoading();var e=this.props.params.year,o=this.props.params.name,t=this.props.params.hash;this.props.changeRoute(e+"/"+o+"/"+t+"/"+n)}}},{key:"nextPhoto",value:function(){var n=this.getNextPhoto(this.props.params.photo);if(n){this.setLoading();var e=this.props.params.year,o=this.props.params.name,t=this.props.params.hash;this.props.changeRoute(e+"/"+o+"/"+t+"/"+n)}}},{key:"back",value:function(){var n=this.props.params.year,e=this.props.params.name,o=this.props.params.hash;this.props.changeRoute(n+"/"+e+"/"+o)}},{key:"componentDidMount",value:function(){this.boundKeyDown=this.keyDown.bind(this),window.addEventListener("keydown",this.boundKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.boundKeyDown)}},{key:"render",value:function(){if(this.props.loading||!this.props.sizes.length)return m;var n=this.props.params.year,e=this.props.params.name,t=this.props.params.hash,i=this.props.params.photo,r=o.i(h.b)(this.props.sizes),a=o.i(h.a)(n,e,t,i,r),s=this.getPreviousPhoto(i),l=s&&o.i(h.a)(n,e,t,s,r),u=this.getNextPhoto(this.props.params.photo),d=u&&o.i(h.a)(n,e,t,u,r);return y(v.b,{},void 0,x,y(v.c,{hidden:!0,src:l}),p.a.createElement(v.c,{ref:"photo",src:a}),y(v.c,{hidden:!0,src:d}),y(b.a,{year:n,name:e,hash:t,photo:i,sizes:this.props.sizes}))}},{key:"keyDown",value:function(n){37===n.keyCode?this.previousPhoto():39===n.keyCode?this.nextPhoto():27===n.keyCode&&this.back()}}]),e}(p.a.Component);e.default=o.i(l.connect)(o.i(c.a)(o.i(f.d)(),o.i(f.e)(),function(n,e){return{sizes:n,photoMap:e}}),a)(w)},"./app/containers/Photo/styles.js":function(n,e,o){"use strict";function t(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var i=o("./node_modules/styled-components/lib/index.js"),r=o.n(i),a=o("./app/images/loading.gif"),s=o.n(a);o.d(e,"b",function(){return d}),o.d(e,"c",function(){return c}),o.d(e,"a",function(){return h});var p=t(["\n  width 100%;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  width 100%;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),l=t(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  z-index: 999;\n  display: ",";\n"],["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  z-index: 999;\n  display: ",";\n"]),u=t(["\n  position: absolute;\n  box-sizing: border-box;\n\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repear;\n"],["\n  position: absolute;\n  box-sizing: border-box;\n\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repear;\n"]),d=r.a.div(p),c=r.a.img(l,function(n){return n.hidden?"none":"inherit"}),h=r.a.div(u,s.a)},"./app/images/loading.gif":function(n,e,o){n.exports=o.p+"e858d896f8c6fb24354c0439d06cb9c1.gif"},"./app/utils/utils.js":function(n,e,o){"use strict";function t(){var n=window.devicePixelRatio;return n||(n=1),[window.innerWidth*n,window.innerHeight*n]}function i(n){for(var e=t(),o=n[n.length-1],i=e[0],r=e[1],a=0;a<n.length;a++){var s=n[a][0],p=n[a][1];if(1.1*s>=i&&1.1*p>=r){o=n[a];break}}return o}function r(n,e,o,t,i){var r={publicPath:"/kijken/",s3:{baseUrl:"http://s3.bertspaan.nl.s3.amazonaws.com/photos/",filename:"photos.json"},cssVariables:{headerHeight:"30px"}}.s3.baseUrl;return i?""+r+n+"/"+e+"/"+o+"/sizes/"+i.join("x")+"/"+t:""+r+n+"/"+e+"/"+o+"/"+t}e.b=i,e.a=r}});