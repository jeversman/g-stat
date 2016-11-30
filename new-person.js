var printer = require('./printer.js');
var personControllerModule = require('./person-controller.js');
var promptHelperModule = require('./prompt-helper.js');

function startCreatingNewPerson(id, cb) {
  printer.printTitle("NEW PERSON");

  var person = {id: id};

  var msg = "name";
  var getValue = function (value) {
      person[msg] = value;
      printer.showMsg("person created");

      enterProperty(PROPS, 0, person, cb);
  }

  promptHelperModule.wait(msg, getValue);
}
exports.startCreatingNewPerson = startCreatingNewPerson;

function enterProperty(props, propertyIndex, personObj, finishCb) {
  if (props[propertyIndex] != null) {
    
    var propertyName = props[propertyIndex];

    printer.showListWithProperty(propertyName);

    var cb = function(value) {
      personObj[propertyName] = value;
      enterProperty(props, propertyIndex + 1, personObj, finishCb);
    };

    promptHelperModule.wait(propertyName, cb);
  }
  else {
    finishCb(personObj);
  }
}

var PROPS = ['mind', 'flair', 'throw accuracy', 'throw distance', 'speed'];


// var PROPERTIES = [
//   {
//     "interior": [
//       {
//         "mind": 1
//       },
//       {
//         "flair": 1
//       }
//     ]
//   },
//   {
//     "external": [
//       {
//         "throw": [
//           {
//             "accuracy": 1
//           },
//           {
//             "distance": 1
//           }
//         ]
//       },
//       {
//         "speed": 1
//       }
//     ]
//   }
// ];
