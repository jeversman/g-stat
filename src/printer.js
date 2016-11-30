var personControllerModule = require('./person-controller.js');
var mathUtils = require('./math-utils');

function printTitle(titleName) {
  console.log("================ " + titleName + " =============")
}

function showMsg(msg) {
  console.log("*** " + msg + " ***")
}

function showListWithProperty(propName) {

  var persons = personControllerModule.getPersons();

  console.log('**********' + persons.length);
  
  if (persons.length <= 0) return;

  var LENGTH_STR = 10;

  console.log(' ');
  console.log('== LIST ' + propName + ' ==================');

  var listForSorting = ((parseInt(persons[0][propName]) != null ) && (persons.length > 0)) ? mathUtils.sortByProperty(persons, propName) : persons;

  for (var i = 0; i < listForSorting.length; i++) {
    var spaces = getSpaces(LENGTH_STR - listForSorting[i].name.length);
    console.log((i + 1) + '. ' + listForSorting[i].name + spaces + listForSorting[i][propName]);
  }

  console.log(' ');
}

exports.printTitle = printTitle;
exports.showMsg = showMsg;
exports.showListWithProperty = showListWithProperty;
