'use strict';

//https://github.com/mondeja/svg-path-bbox

exports.type = 'full';

exports.active = true;

exports.description = 'chechs if viewBox has correcrt size';

/**
 * Chech if the viewBox has correct size
 *
 * @example
 *
 * @param {Object} root current iteration root
 * @param {Object} params current iteration params
 *
 * @return {Boolean} if false, root will be filtered out
 *
 * @author Tymon Żarski
 */

var ENOCLS = `Error in plugin "isArtBoardCorrect": absent parameters.
 It should have a list of classes in "classNames" or one "className".
 Config example:

 plugins:
 - isArtBoardCorrect:
     size: ["24", "24"]
 `;

exports.fn = function (root, validateResult, params) {
  // if (
  //   params &&
  //   root.type === 'element' &&
  //   root.name === 'svg' &&
  //   viewBoxElems.includes(root.name) &&
  //   root.attributes.viewBox != null &&
  //   !validateResult.isArtBoardCorrect
  // ) {
  //   var result = false;
  //   let viewBox = root.attributes.viewBox.split(' ');
  //   viewBox = nonZero(viewBox);
  //   if (compareArrays(viewBox, params.size)) {
  //     result = true;
  //     console.log('correct size');
  //   } else {
  //     console.log('incorrect size');
  //     result = false;
  //   }
  //   validateResult.isArtBoardCorrect = result;
  // } else if (!params) {
  //   console.error(ENOCLS);
  // }

  var result = false;
  let viewBox = root.children[0].attributes.viewBox.split(' ');
  viewBox = nonZero(viewBox);
  if (compareArrays(viewBox, params.size)) {
    result = true;
  } else {
    result = false;
  }
  validateResult.isArtBoardCorrect = result;

  return [root, validateResult];
};

// remove all 0 form array and return it
function nonZero(array) {
  let result = [];

  array.forEach(function (item) {
    if (item !== '0') {
      result.push(item);
    }
  });

  return result;
}

// compare values of two arrays and return true if they are equal
function compareArrays(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every(function (root, index) {
      return root === array2[index];
    })
  );
}
