"use strict"
define("qr-and-barcode-scanner-demo/app",["exports","qr-and-barcode-scanner-demo/resolver","ember-load-initializers","qr-and-barcode-scanner-demo/config/environment"],function(e,n,r,t){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:t.default.modulePrefix,podModulePrefix:t.default.podModulePrefix,Resolver:n.default});(0,r.default)(o,t.default.modulePrefix),e.default=o}),define("qr-and-barcode-scanner-demo/components/code-scanner",["exports","ember-qr-scanner"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Component,t=Ember.setProperties,o=Ember.observer,a=Ember.get,d=Ember.set,i=Ember.run.next,l=window.Quagga
e.default=r.extend({isSupported:n.isSupported,classNames:["centered"],isShowingQRScanner:!1,isShowingBarcodeScanner:!1,onIsShowingBarcodeScannerChanged:o("isShowingBarcodeScanner",function(){a(this,"isShowingBarcodeScanner")?i(function(){l.init({decoder:{readers:["code_128_reader"]}},function(){l.start()})}):l.stop()}),didInsertElement:function(){var e=this
l.onDetected(function(n){var r=n.codeResult.code
e.isSaneResult(r)&&d(e,"result",r)})},isSaneResult:function(e){return 16===e.length&&e.match(/^\w+$/)},actions:{toggleShowQR:function(){this.toggleProperty("isShowingQRScanner"),t(this,{isShowingBarcodeScanner:!1,result:null})},toggleShowBarcode:function(){this.toggleProperty("isShowingBarcodeScanner"),t(this,{isShowingQRScanner:!1,result:null})}}})}),define("qr-and-barcode-scanner-demo/components/qr-scanner",["exports","ember-qr-scanner/components/qr-scanner"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("qr-and-barcode-scanner-demo/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return n.and}})}),define("qr-and-barcode-scanner-demo/helpers/app-version",["exports","qr-and-barcode-scanner-demo/config/environment","ember-cli-app-version/utils/regexp"],function(e,n,r){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return n.hideSha?o.match(r.versionRegExp)[0]:n.hideVersion?o.match(r.shaRegExp)[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=t
var o=n.default.APP.version
e.default=Ember.Helper.helper(t)}),define("qr-and-barcode-scanner-demo/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return n.equal}})}),define("qr-and-barcode-scanner-demo/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return n.gt}})}),define("qr-and-barcode-scanner-demo/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return n.gte}})}),define("qr-and-barcode-scanner-demo/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return n.isArray}})}),define("qr-and-barcode-scanner-demo/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return n.isEqual}})}),define("qr-and-barcode-scanner-demo/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return n.lt}})}),define("qr-and-barcode-scanner-demo/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return n.lte}})}),define("qr-and-barcode-scanner-demo/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return n.notEq}})}),define("qr-and-barcode-scanner-demo/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return n.not}})}),define("qr-and-barcode-scanner-demo/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return n.or}})}),define("qr-and-barcode-scanner-demo/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return n.xor}})}),define("qr-and-barcode-scanner-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","qr-and-barcode-scanner-demo/config/environment"],function(e,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var t=void 0,o=void 0
r.default.APP&&(t=r.default.APP.name,o=r.default.APP.version),e.default={name:"App Version",initialize:(0,n.default)(t,o)}}),define("qr-and-barcode-scanner-demo/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("qr-and-barcode-scanner-demo/initializers/export-application-global",["exports","qr-and-barcode-scanner-demo/config/environment"],function(e,n){function r(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var t,o=n.default.exportApplicationGlobal
t="string"==typeof o?o:Ember.String.classify(n.default.modulePrefix),r[t]||(r[t]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[t]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("qr-and-barcode-scanner-demo/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("qr-and-barcode-scanner-demo/router",["exports","qr-and-barcode-scanner-demo/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
r.map(function(){}),e.default=r}),define("qr-and-barcode-scanner-demo/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("qr-and-barcode-scanner-demo/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3RHtFyVg",block:'{"symbols":[],"statements":[[6,"h2"],[9,"class","centered"],[7],[0,"Bar code and QR code scanning demo"],[8],[0,"\\n\\n"],[1,[18,"code-scanner"],false]],"hasEval":false}',meta:{moduleName:"qr-and-barcode-scanner-demo/templates/application.hbs"}})}),define("qr-and-barcode-scanner-demo/templates/components/code-scanner",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"7zbEbcZ8",block:'{"symbols":[],"statements":[[4,"if",[[20,["isSupported"]]],null,{"statements":[[0,"  "],[6,"div"],[9,"class","margin-bottom"],[7],[0,"\\n    "],[6,"button"],[3,"action",[[19,0,[]],"toggleShowQR"]],[7],[0,"\\n      Toggle QR Scanner\\n    "],[8],[0,"\\n\\n    "],[6,"button"],[3,"action",[[19,0,[]],"toggleShowBarcode"]],[7],[0,"\\n      Toggle Barcode Scanner\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n"],[4,"if",[[20,["result"]]],null,{"statements":[[0,"    "],[6,"h3"],[7],[0,"Result:"],[8],[0,"\\n    "],[6,"h3"],[7],[1,[18,"result"],false],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[20,["isShowingQRScanner"]]],null,{"statements":[[0,"    "],[1,[25,"qr-scanner",null,[["onSuccess"],[[25,"action",[[19,0,[]],[25,"mut",[[20,["result"]]],null]],null]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[20,["isShowingBarcodeScanner"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"id","interactive"],[9,"class","viewport"],[7],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},{"statements":[[0,"  "],[6,"p"],[7],[0,"QR and barcode scanning is not supported in your browser."],[8],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"qr-and-barcode-scanner-demo/templates/components/code-scanner.hbs"}})}),define("qr-and-barcode-scanner-demo/config/environment",[],function(){try{var e="qr-and-barcode-scanner-demo/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(n))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("qr-and-barcode-scanner-demo/app").default.create({name:"qr-and-barcode-scanner-demo",version:"0.0.0+70973a8d"})