
function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;

    async function getData(){
        try {

            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c0b645bd9a8340d4b66141413240907&q=${location}&aqi=no`)
            const data = await response.json();
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>${data.location.name}</h2>
                                                <p>Temperature: ${data.current.temp_c}°C</p>
                                                <p>Weather: ${data.current.condition.text}</p>
                                                <img src="${data.current.condition.icon}" alt="">`;
        }
        catch (error) {console.error('Error:', error)}

    }
    getData()
}