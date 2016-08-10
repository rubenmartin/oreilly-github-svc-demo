'use strict';

// Turns a 'String' into HaCkErCaSe, optionally replacing some characters in
// the result with others (case-insensitively)
module.exports = function hackerCase(text, replaceMap) {
  var upperCase = false;

  var result = text.replace(/\w/g, function(char) {
  	 return char[(upperCase =! upperCase) ? 'toLocaleUpperCase': 'toLocaleLowerCase']();
  });

  if('object' === typeof replaceMap) {
  	 for(var src in replaceMap) {
  	 	if (replaceMap.hasOwnProperty(src)) {
  	 		result = result.replace(new RegExp(src, 'gi'), String(replaceMap[src]));
  	 	}
  	 	
  	 }
  }

  return result;
};
