var mathUtils = require('./math-utils');



function main() {
  arr = PROPERTIES;

  arr.forEach(iterate);
}

function iterate(obj, index, arr) {
  if (typeof arr[index] === 'object') {
    console.log('****');
    arr[index].forEach(iterate);
  }
  else {
    console.log(obj);
  }
}

var TEST = ['sadkjahsdasdasd', 'sadasdasd', 'sadfsaf', 'dsfsdf', 'sdf'];


var PROPERTIES = [
  {
    "interior": [
      {
        "mind": 1
      },
      {
        "flair": 1
      }
    ]
  },
  {
    "external": [
      {
        "throw": [
          {
            "accuracy": 1
          },
          {
            "distance": 1
          }
        ]
      },
      {
        "speed": 1
      }
    ]
  }
];

main();
