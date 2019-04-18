const fs = require('fs');
var content;

exports.countriesEnglish = function() {
  fs.readFile('./Countries/countries-english.txt', 'utf8', function read(err, data) {
    if (err) {
      console.error(err);
    }
    console.log("These countries speak English:");
    console.log(data);
  });
};

exports.countriesJapanese = function() {
  fs.readFile('./Countries/countries-japanese.txt', 'utf8', function read(err, data) {
    if (err) {
      console.error(err);
    }
    console.log("These countries speak Japanese:")
    console.log(data);
  });
};

exports.countriesSpanish = function() {
  fs.readFile('./Countries/countries-spanish.txt', 'utf8', function read(err, data) {
    if (err) {
      console.error(err);
    }
    console.log("These countries speak Spanish:")
    console.log(data);
  });
};

exports.countriesIcelandic = function() {
  fs.readFile('./Countries/countries-icelandic.txt', 'utf8', function read(err, data) {
    if (err) {
      console.error(err);
    }
    console.log("These countries speak Icelandic:")
    console.log(data);
  });
};
