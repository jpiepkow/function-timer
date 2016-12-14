function-timer
=====
Description: module that makes profileing your application simple.

Getting Started:

	npm install function-timer
	
	var functionTimer = require('function-timer')
	var timer = new functionTimer({});

methods:

	timer.time('id');
	
		params:
			id: the text idea for this block of time
			
		return: none
		
	timer.report():
	
		params: none;
		return: report object for this timer instance.
		
		ex: 
		
		{ timerCall: '3002.40048ms', second: '5001.587941000001ms' }
		
How it works and example:

	timer.time('timerCall')
	
	setTimeout(() => {
			timer.time('timerCall')
		},3000)
		
	timer.time('second')
	
	setTimeout(() => {	
			timer.time('second')
			console.log(p.report())
		},5000)		
		
		//timer connects time() calls with the same id for the report.			