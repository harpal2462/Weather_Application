const apiKey = '';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', fetchWeather);

function fetchWeather() {
    const cityName = cityInput.value;
    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'An error occurred. Please try again later.';
        });
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const iconCode = weather[0].icon;

    weatherInfo.innerHTML = `
        <h3>${name}</h3>
        <img src="http://openweathermap.org/img/w/${iconCode}.png" alt="${description}" class="icon">
        <p>${description}</p>
        <p>Temperature: ${temperature} &#8451;</p>
    `;
}
