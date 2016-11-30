function sortByProperty(array, propName) {
  var sortedArr = array;

  for (var j = 0, len = sortedArr.length - 1; j < len; j++) {
    var swapped = false;
    var i = 0; //len - j
    while (i < len - j) {
      if (sortedArr[i][propName] < sortedArr[i + 1][propName]) {
        var c = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = c;
        swapped = true;
      }
      i++;
    }

    if(!swapped)
      break;
  }
  return sortedArr;
}
exports.sortByProperty = sortByProperty;

