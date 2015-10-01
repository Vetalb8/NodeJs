var fs = require("fs");
function getFile(name){
    return fs.createReadStream(name);
}
//получаем модуль
module.exports = getFile;

