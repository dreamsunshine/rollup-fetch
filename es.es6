'use strict';
// import  "./es6/node_modules/es6-promise/dist/es6-promise.auto";
// import "./es6/node_modules/fetch-detector/index";

import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
import 'es6-promise/auto';
import 'fetch-detector';
import 'fetch-ie8';
import 'fetch-jsonp';
import 'whatwg-fetch';


{
  var b=1;
  let a=2;
}

fetch('/').then(function(res){
  console.log(res.headers.get('Content-Type'));
})


