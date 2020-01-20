
const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('hello world');
		res.end();
	}

	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}

});

server.listen(3000);

console.log('Listening on port 3000...')

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// const Logger = require('./logger')
// const logger = new Logger();

// 	emitter.on('messageLogged', (arg) => {
// 		console.log('Listener called', arg);
// 	});

// logger.log('message');

// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function(err, files) {
// 	if (err) console.log('Error', err);
// 	else console.log('Result', files);
// });


// const os = require('os');


// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// //console.log('Total Memory: ' + totalMemory);

// //Template string 
// // ES6 / ES2015 : ECMAScript 6


// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
