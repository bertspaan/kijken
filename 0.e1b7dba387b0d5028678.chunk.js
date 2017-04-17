webpackJsonp([0],{"./app/containers/PhotoList/index.js":function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/react/react.js"),a=t.n(s),p=t("./node_modules/react-redux/lib/index.js"),l=(t.n(p),t("./node_modules/react-router/es/index.js")),u=t("./node_modules/reselect/es/index.js"),c=t("./app/utils/utils.js"),f=t("./app/containers/App/selectors.js"),d=t("./app/containers/PhotoList/styles.js");t.d(n,"PhotoList",function(){return m});var b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===s)t.children=o;else if(s>1){for(var p=Array(s),l=0;l<s;l++)p[l]=arguments[l+3];t.children=p}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),y=b("div",{},void 0,"Loading"),m=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),h(n,[{key:"render",value:function(){if(this.props.loading||!this.props.photoList.length)return y;var e=this.props.sizes[0],n=this.props.params.year,r=this.props.params.name,o=this.props.params.hash;return b(d.a,{},void 0,this.props.photoList.map(function(i,s){return b(d.b,{},s,b(l.d,{to:n+"/"+r+"/"+o+"/"+i},void 0,b("img",{src:t.i(c.a)(n,r,o,e,i)})))}))}}]),n}(a.a.Component);n.default=t.i(p.connect)(t.i(u.a)(t.i(f.b)(),t.i(f.c)(),t.i(f.d)(),function(e,n,t){return{loading:e,photoList:n,sizes:t}}))(m)},"./app/containers/PhotoList/styles.js":function(e,n,t){"use strict";function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var o=t("./node_modules/styled-components/lib/index.js"),i=t.n(o);t.d(n,"a",function(){return p}),t.d(n,"b",function(){return l});var s=r(["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"],["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]),a=r(["\n  margin: 10px;\n  border-color: rgba(255, 255, 255, 0.6);\n  border-width: 1px;\n  border-style: solid;\n  width: 190px;\n  box-sizing: border-box;\n"],["\n  margin: 10px;\n  border-color: rgba(255, 255, 255, 0.6);\n  border-width: 1px;\n  border-style: solid;\n  width: 190px;\n  box-sizing: border-box;\n"]),p=i.a.ol(s),l=i.a.li(a)},"./app/utils/utils.js":function(e,n,t){"use strict";function r(){var e=window.devicePixelRatio;return e||(e=1),[window.innerWidth*e,window.innerHeight*e]}function o(e){for(var n=r(),t=e[e.length-1],o=n[0],i=n[1],s=0;s<e.length;s++){var a=e[s][0],p=e[s][1];if(1.1*a>=o&&1.1*p>=i){t=e[s];break}}return t}function i(e,n,t,r,o){return""+{publicPath:"/kijken/",s3:{baseUrl:"http://s3.bertspaan.nl.s3.amazonaws.com/photos/",filename:"photos.json"},cssVariables:{headerHeight:"30px"}}.s3.baseUrl+e+"/"+n+"/"+t+"/sizes/"+r.join("x")+"/"+o}n.b=o,n.a=i}});