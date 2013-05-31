function Weather(service) {
	this.service = service;
	this.siglas = {
		'celsius' : 'C',
		'farenheit' : 'F'
	}

	this.state = 'celsius';	
}

// Nube: wicon cond26 Sol: wicon cond34
Weather.prototype.update = function() {
	var pronostico = this.service.getPronostico();
	this.temperature = pronostico.temperature;
	
	$("#state").removeClass();
	$("#state").addClass(pronostico.state);
	
	if(pronostico.state == 'nube') {
		$("#state").addClass("wicon cond26");
	}
	else {
		$("#state").addClass("wicon cond34");
	}
	
	$("#temperature").html(pronostico.temperature + " C");	
}

Weather.prototype.convert = function() {
	if(this.state == 'celsius') {
		t = convertTemperature({'celsius': this.temperature});
		this.state = 'farenheit';	
	}
	else {
		t = this.temperature;
		this.state = 'celsius';	
	}
		
	$("#temperature").html(t + " " + this.siglas[this.state]);		
}
