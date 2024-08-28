var fs = require('fs')
var os = require('os')
 
var user = os.userInfo();
console.log(user)
console.log(user.username)
fs.appendFile('message.txt','fs module is being used in' + user.username + '\n',()=>console.log('file created'))
