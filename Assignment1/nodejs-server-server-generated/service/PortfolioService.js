'use strict';


/**
 * Add funds to an existing portfolio
 *
 * body Id_addfunds_body  (optional)
 * id UUID Portfolio UUID
 * no response value expected for this operation
 **/
exports.addFunds = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a user portfolio
 *
 * body Portfolio_body  (optional)
 * returns inline_response_201_1
 **/
exports.createPortfolio = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalAmount" : 0,
  "riskLevel" : 1.7207453714149104,
  "name" : "Portfolio 1",
  "id" : "c3c0d314-e4f8-4aae-8af9-faa71382f2fb"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of available portfolios
 *
 * returns List
 **/
exports.getPortfolios = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "totalAmount" : 0,
  "riskLevel" : 1.7207453714149104,
  "name" : "Portfolio 1",
  "id" : "c3c0d314-e4f8-4aae-8af9-faa71382f2fb"
}, {
  "totalAmount" : 0,
  "riskLevel" : 1.7207453714149104,
  "name" : "Portfolio 1",
  "id" : "c3c0d314-e4f8-4aae-8af9-faa71382f2fb"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

