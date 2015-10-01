/**
 * Created by vet on 29.09.15.
 */
var warn = function(msg){
  console.log("Warning: ", msg);
};

var info = function(msg){
    console.log("Info: ", msg);
};

var error = function(msg){
    console.log("Error: ", msg);
};

exports.warn = warn;
exports.info = info;
exports.error = error;