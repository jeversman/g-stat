var newPersonModule = require('./new-person.js');
var personControllerModule = require('./person-controller.js');
var saverModule = require('./saver.js');
var promptHelperModule = require('./prompt-helper.js');

var COMMANDS = {
  "new": function () {
    newPerson();
  },
  "list": function () {
    showList();
  },
  "delete": function () {
    deletePerson();
  },
  "exit": function () {
    exit();
  }
};

main();

function main() {
  init();

  waitCommand('enter command');
}

function init() {
  personControllerModule.init();
}

function waitCommand(msg) {
  promptHelperModule.wait(msg, function (res) {
    runCommand(res);
  });
}

function runCommand(command) {
  COMMANDS[command]();
}

function newPerson() {
  var id = 1; //FIX THIS

  newPersonModule.startCreatingNewPerson(id, function (person) {
    personControllerModule.addPerson(person);
    waitCommand('enter command');
  });
}

function showList() {
  console.log("show list of persons");
}

function deletePerson() {
  console.log("deleting person");
}

function exit() {
  var persons = personControllerModule.getPersons();
  saverModule.save("persons", persons);
}
