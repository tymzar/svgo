'use strict';

exports.type = 'full';

exports.active = false;

exports.description = 'chechs if viewBox has correcrt size';

// exports.fn = function (data) {
//   console.log('test');
//   // check if name is written in snake_case and return boolean
//   // var name = data.filname.split('.');
//   // console.log(name);
//   // var regex = /^[a-z][a-z0-9_]+$/;
//   // var result = regex.test(name);
// };

exports.fn = function (root, validateResult) {
  // console.log(validateResult);
  var filename = root.filename;
  filename = filename.substring(0, filename.length - 4);
  var regex = /^[a-z][a-z0-9_]+$/;
  var result = regex.test(filename);

  // if (result) {
  //   console.log('regex passed');
  // } else {
  //   console.log('error');
  // }

  validateResult.isSnakeCase = result;

  return [root, validateResult];
};
