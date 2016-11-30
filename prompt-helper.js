var prompt = require('prompt');

function wait(msg, cb) {
  prompt.get(msg, function(err, result) {
    cb(result[msg]);
  });
}

exports.wait = wait;
