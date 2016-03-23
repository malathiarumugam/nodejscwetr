'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.nodeJsGet = function nodeJsGet (req, res, next) {
  Default.nodeJsGet(req.swagger.params, res, next);
};

module.exports.nodeJsPost = function nodeJsPost (req, res, next) {
  Default.nodeJsPost(req.swagger.params, res, next);
};

module.exports.nodeJsNodeJsIdGet = function nodeJsNodeJsIdGet (req, res, next) {
  Default.nodeJsNodeJsIdGet(req.swagger.params, res, next);
};

module.exports.nodeJsNodeJsIdPut = function nodeJsNodeJsIdPut (req, res, next) {
  Default.nodeJsNodeJsIdPut(req.swagger.params, res, next);
};

module.exports.nodeJsNodeJsIdDelete = function nodeJsNodeJsIdDelete (req, res, next) {
  Default.nodeJsNodeJsIdDelete(req.swagger.params, res, next);
};
