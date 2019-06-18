const hot = require("../index");
const fs = require("fs");
const path = require("path");

var filename = path.join(__dirname,"./s.js");
fs.writeFileSync(filename, "module.exports=()=>'abc'");

const s = hot.require("./s.js");

console.log(s());

fs.writeFileSync(filename, "module.exports=()=>'123'");

hot.reloadAll();

console.log(s());

fs.unlinkSync(filename);