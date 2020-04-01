const os = require('os');
const fs = require('fs');

let user = os.userInfo();
let date = new Date();

let message = `User "${user.username}" started a app at ${date} Bozo`;
console.log(message);

let bozo;
bozo = fs.appendFile('hello.txt', message, function(err) {
  if (err) {
    console.log('Not able to append');
  }
});

console.log(bozo);
