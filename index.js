var profile = function() {
	this.now = require('performance-now');	
	this.timerObj = {};
	this.returnObj = {}
}
profile.prototype.time = function(id) {
	if(!this.timerObj[id]) {
		this.timerObj[id] = {};
	}
	if(!this.timerObj[id].start) {
		this.timerObj[id].start = this.now();
	} else if(!this.timerObj[id].end) {
		this.timerObj[id].end = this.now();
	} else {
		console.log('Id in profiler already used')
	}
};
profile.prototype.report = function() {
	for(var x in this.timerObj) {
		if(this.timerObj[x].start && this.timerObj[x].end) {
			this.returnObj[x] =`${this.timerObj[x].end -this.timerObj[x].start}ms`
		}
	}
	return this.returnObj
}

module.exports = profile;