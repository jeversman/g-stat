var jsonfile = require('jsonfile');

function save(dataName, data) {
  var obj = {
    [dataName]: JSON.parse(JSON.stringify(data))
  };
  writeJSON(obj);
}

function writeJSON(obj) {
  jsonfile.writeFile('test.json', obj, function (err) {
    if (err) console.error(err);
    else console.error("saved");
  });
}

exports.save = save;
