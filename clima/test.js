
test( "10 C y nublado", function() {
  var weatherService = new WeatherService({state :"nube", temperature: "10"});
  var weather = new Weather(weatherService);
  weather.update();
  ok($("#state").hasClass("nube"));  
  ok($("#state").hasClass("wicon cond26"));  
  equal($("#temperature").html(), "10 C" );
});

test( "5 C y sol", function() {
  var weatherService = new WeatherService({state :"sol", temperature: "5"});
  var weather = new Weather(weatherService);
  weather.update();

  ok($("#state").hasClass("sol"));  
  ok($("#state").hasClass("wicon cond34"));    
  equal($("#temperature").html(), "5 C" );
});

test(" 1 C a 33.8 F", function() {
	var farenheit = convertTemperature({ celsius : 1 });
	equal(farenheit, 33.8);
});

test(" 0 C a 32 F", function() {
	var farenheit = convertTemperature({ celsius : 0 });
	equal(farenheit, 32);
});

test( "5 C y sol", function() {
  var weatherService = new WeatherService({state :"sol", temperature: "0"});
  var weather = new Weather(weatherService);
  weather.update();
  equal($("#temperature").html(), "0 C" );

  weather.convert();
  equal($("#temperature").html(), "32 F" );
  
  weather.convert();
  equal($("#temperature").html(), "0 C" );
});

