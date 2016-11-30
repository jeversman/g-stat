var jsonfile = require('jsonfile');

var persons = [];
var lastId = 0;

function init() {
  _loadPersons();
}

function addPerson(person) {
  persons.push(person);
}

function getPersons() {
  return persons;
}

function getNextId() {
  return lastId;
}

exports.getPersons = getPersons;
exports.addPerson = addPerson;
exports.init = init;
exports.getNextId = getNextId;

function _loadPersons() {
  jsonfile.readFile("./test.json", function(err, obj) {
    persons = obj;
    lastId = _getMaxId();
  });
}

function _getMaxId() {
  var id = 0;
  for (var i = 0; i < persons.length; i++) {
    if (persons[i].id > id) {
      id = persons[i].id;
    }
  }
  return id;
}
