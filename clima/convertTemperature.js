function convertTemperature(options) {
	if(!!options.celsius || options.celsius == 0) {
		return options.celsius * (9 / 5) + 32;
	} 
}