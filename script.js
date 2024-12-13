document.getElementById("refresh-btn").addEventListener("click", updateWeather);

function updateWeather() {
    // Get the selected city
    const city = document.getElementById("city").value;

    // Simulate fetching data for the selected city
    const weatherData = {
        vilnius: {
            temperature: (Math.random() * 30).toFixed(1),
            humidity: (Math.random() * 100).toFixed(1),
            windSpeed: (Math.random() * 20).toFixed(1),
        },
        kaunas: {
            temperature: (Math.random() * 30).toFixed(1),
            humidity: (Math.random() * 100).toFixed(1),
            windSpeed: (Math.random() * 20).toFixed(1),
        },
        klaipeda: {
            temperature: (Math.random() * 25).toFixed(1),
            humidity: (Math.random() * 90).toFixed(1),
            windSpeed: (Math.random() * 15).toFixed(1),
        },
        siauliai: {
            temperature: (Math.random() * 20).toFixed(1),
            humidity: (Math.random() * 80).toFixed(1),
            windSpeed: (Math.random() * 10).toFixed(1),
        },
        panevezys: {
            temperature: (Math.random() * 22).toFixed(1),
            humidity: (Math.random() * 85).toFixed(1),
            windSpeed: (Math.random() * 12).toFixed(1),
        },
    };

    // Get data for the selected city
    const selectedCityWeather = weatherData[city];

    // Update the UI with the new data
    document.getElementById("temperature").textContent = `${selectedCityWeather.temperature}°C`;
    document.getElementById("humidity").textContent = `${selectedCityWeather.humidity}%`;
    document.getElementById("wind-speed").textContent = `${selectedCityWeather.windSpeed} km/h`;
}
