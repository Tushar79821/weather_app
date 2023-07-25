const apiKey = 'e7d5c88e3bd11d58e5543be7558d8dba';

document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
