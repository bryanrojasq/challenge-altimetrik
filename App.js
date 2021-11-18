
var fs = require('fs');

const utils = require('./test/utils');

const path = require('path');
const ROOT_DIR = path.resolve('./');
const TEST_DATA_JSON = ROOT_DIR + '/data.json';

const main = () => {

  return utils.readFile(TEST_DATA_JSON, true).then(function(res){
    return res;
  }).catch(function(err){
    console.error(err)
  });
    
};



module.exports = main;
