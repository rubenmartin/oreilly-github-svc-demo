'use strict';

module.exports = function hackerCase(text, replaceMap) {
  var upperCase = false;

  var result = text.replace(/\w/g, function(char){
  	 return char[(uppercase = !uppercase) ? 'toLocaleUpperCase': 'toLocaleLowerCase']();
  });

  if(replaceMap){
  	 for(var src in replaceMap){
  	 	result = result.replace(new RegExp(src, 'gi'), String(replaceMap[src]));
  	 }
  }

  return result;
};
