const jsf = require('json-schema-faker');
const fs = require('fs');
const schema = require('./mockDataSchema');
const faker = require('faker');

jsf.extend('faker', () => faker);

jsf.resolve(schema).then(sample => {
  fs.writeFile("./src/db.json", JSON.stringify(sample), function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Mock data generated.");
    }
  });
});
