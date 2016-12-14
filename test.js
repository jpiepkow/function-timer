var functionTime = require('./index.js');
var p = new functionTime({})
p.time('timerCall')

setTimeout(() => {
p.time('timerCall')
},3000)
p.time('second')
setTimeout(() => {
	
p.time('second')
console.log(p.report())
},5000)
