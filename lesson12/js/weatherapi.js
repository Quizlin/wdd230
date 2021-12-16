const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=557ec8400baee06c0143ae1105085dd1&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=557ec8400baee06c0143ae1105085dd1&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        const temp = Math.round(jsObject.main.temp);
        const speed = Math.round(jsObject.wind.speed);


        // Windchill
        let windChill = "N/A"
        if (temp <= 50 && speed >= 3){
            let f = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) +
            .4275 * temp * Math.pow(speed, .16);
            windChill = Math.round(f) + "°F";
        }

        // This will display the current weather information
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('low').textContent = Math.round(jsObject.main.temp_min);
        document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
        document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('windChill').innerHTML = windChill;

        // This is for the small view
        document.getElementById('current-tempSM').textContent = Math.round(jsObject.main.temp);
        document.getElementById('highSM').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('lowSM').textContent = Math.round(jsObject.main.temp_min);
        document.getElementById('humiditySM').textContent = Math.round(jsObject.main.humidity);
        document.getElementById('windSM').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('windChillSM').innerHTML = windChill;
        
});

// This is for the 5-day forcast
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let num = 0;
        
        // This will loop through 5 times
        for (let i = 0; num < 5; i++) {
  

          if (jsObject.list[i].dt_txt.includes("18:00:00")) {
            num++;

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;
            const date = new Date(jsObject.list[i].dt_txt);
            const day = date.getDay();
        
            // This will display the 5-day forecast
            document.getElementById(`day` + num).textContent = daysWeek[day];
            document.getElementById(`tempH` + num).textContent = Math.round(jsObject.list[i].main.temp_max);
            document.getElementById(`tempL` + num).textContent = Math.round(jsObject.list[i].main.temp_min);
            document.getElementById(`icon` + num).setAttribute('src', imagesrc);
            document.getElementById(`icon` + num).setAttribute('alt', desc);
          }
        }

});