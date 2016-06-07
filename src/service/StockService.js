var Promise = require("bluebird");

var OperationQueue = function () {

  var queue = [];
  var runningOperation;

  var createPromise = function (fn) {
    new Promise(resolve => {
      var result = {};
      try {
        result = fn();
      } catch (e) {
      }
      resolve(result);
    }).finally(() => {
      runningOperation = null;
      if (queue.length > 0) {
        runningOperation = createPromise(queue.shift());
      }
    });
  };

  this.runOperation = (operationFn) => {
    if (runningOperation) {
      queue.push(operationFn);
    }
    runningOperation = createPromise(operationFn)
  }

};

module.exports = OperationQueue;
