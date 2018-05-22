let path = require('path');

let pathUltra =  {
    baseNameWithoutExtension : function(filename){
        return path.basename(filename, path.extname(filename));
    }
};

module.exports = Object.assign(path, pathUltra);