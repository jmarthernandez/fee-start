// add more libraries with npm https://www.npmjs.com/ by running npm install --save whatever
// and require them in
var $ = require('jquery');

// require imports an object
console.log(require('jquery'));

$('#app').html('<button id="click">Click me</button>');

$('#click').click(function (e) {
  console.log(e);
  alert('clicked');
})