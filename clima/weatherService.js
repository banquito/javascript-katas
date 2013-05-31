function WeatherService(options) {
	this.state = options.state;
	this.temperature = options.temperature;
}

WeatherService.prototype.getPronostico = function() {
	return { state: this.state, temperature: this.temperature};
}