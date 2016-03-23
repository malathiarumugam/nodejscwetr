'use strict';

exports.nodeJsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "node-js_id" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodeJsPost = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = {
  "node-js_id" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodeJsNodeJsIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * nodeJsId (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "node-js_id" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodeJsNodeJsIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
   * nodeJsId (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "node-js_id" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodeJsNodeJsIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
   * nodeJsId (String)
   **/

var examples = {};
  

  
  res.end();
}
