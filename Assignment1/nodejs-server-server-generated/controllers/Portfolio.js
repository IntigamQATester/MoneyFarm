'use strict';

var utils = require('../utils/writer.js');
var Portfolio = require('../service/PortfolioService');

module.exports.addFunds = function addFunds (req, res, next, body, id) {
  Portfolio.addFunds(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createPortfolio = function createPortfolio (req, res, next, body) {
  Portfolio.createPortfolio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPortfolios = function getPortfolios (req, res, next) {
  Portfolio.getPortfolios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
