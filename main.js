
var fs = require('fs');
var jsonfile = require('jsonfile');
var readLineSync = require('readline-sync');
var prompt = require('prompt');
var mathUtils = require('./math-utils.js');
var standings = require('./standings');

const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

var menu = ["new", "edit", "standigns", "delete", "exit"];
var properties = ["name", "age", "power", "skill", "speed", "mind"];
var persons = [];
var lastId = 0;

function main() {
  start();
  // test();
}

function test() {

}


function start() {
  loadPersons();
  showMenu();
}

function loadPersons() {
  jsonfile.readFile("./test.json", function(err, obj) {
    persons = obj;
    lastId = getMaxId();
  });
}

function getMaxId() {
  var id = 0;
  for (var i = 0; i < persons.length; i++) {
    if (persons[i].id > id) {
      id = persons[i].id;
    }
  }
  return id;
}

function showMenu() {
  console.log(' ');
  console.log('== MENU =======================');
  for (var i = 0; i < menu.length; i++) {
    console.log((i+1) + ". " + menu[i]);
  }
  console.log(' ');

  prompt.get('select', function(err, result) {
    getSelectedMenuItem(parseInt(result.select));
  });
}

function getSelectedMenuItem(itemNumber) {
  switch (itemNumber) {
    case 1:
      newPerson();
      break;
    case 2:
      edit();
      break;
    case 3:
      standingsSelected();
      break;
    case 4:
      deletePerson();
      break;
    case 5:
      exit();
      break;
    default:
      showMenu();
      break;
  }
}



// function setPersonProperty(propertyIndex, newPersonJSONObj) {
//   if (properties[propertyIndex] != null) {
//
//     showListWithProperty(propertyIndex);
//
//     var propertyName = properties[propertyIndex];
//     prompt.get(propertyName, function(err, result) {
//       newPersonJSONObj[propertyName] = result[propertyName];
//       setPersonProperty(propertyIndex + 1, newPersonJSONObj);
//     });
//   }
//   else {
//     persons.push(newPersonJSONObj);
//     console.log("person added");
//     showMenu();
//   }
// }

function showListWithProperty(indexProperty) {
  var propName = properties[indexProperty];

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

function getSpaces(count) {
  var spaces = '';
  var j = 0;
  while (j < count) {
    spaces += ' ';
    j++;
  }
  return spaces;
}

function edit() {
  showPersons();

  prompt.get('person', function(err, result) {
    var number = parseInt(result.person);
    editPerson(number - 1);
  });
}

function editPerson(index) {
  var id = persons[index].id;
  persons.splice(index, 1);

  var newPersonJSONObj = {id: id};
  setPersonProperty(0, newPersonJSONObj);
}

function deletePerson() {
  showPersons();

  prompt.get('person', function(err, result) {
    var number = parseInt(result.person);
    persons.splice(number - 1, 1);
    showMenu();
  });
}

function exit() {
  save();
}

function standingsSelected() {
  standings.showMenu();
}

function list() {
  showPersons();
  showMenu();
}

function showPersons() {
  console.log(' ');
  console.log('== PERSONS ===================');

  for (var i = 0; i < persons.length; i++) {
    console.log((i + 1) + ". " + persons[i].name);
  }
  console.log(' ');
}

function save() {
  var obj = {
    properties: JSON.parse(JSON.stringify(properties)),
    persons: JSON.parse(JSON.stringify(persons))
  };
  writeJSON();
}

function writeJSON(obj) {
	jsonfile.writeFile('test.json', obj, function (err) {
		if (err) console.error(err);
    else console.error("saved");
	});
}

function getNextId() {
  lastId++;
  return lastId;
}

main();
