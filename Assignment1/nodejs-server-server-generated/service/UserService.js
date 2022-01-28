'use strict';


/**
 * Create the user, this request does not require authentication only for the sake of the exercise
 *
 * body User_body  (optional)
 * returns inline_response_201
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "c3c0d314-e4f8-4aae-8af9-faa71382f2fb",
  "email" : "email@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

