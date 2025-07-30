import { WEATHER_API_KEY } from './config.js';
import { elements } from './main.js';

export async function fetchWeatherData(cityName) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityName}&aqi=no`;
  try {
    const request = new Request(apiUrl);
    const response = await fetch(request);
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
}
/**
 *
 * @param {JSON} data
 */
async function updateUI(data) {
  const temperature = data.current.temp_c;
  elements.weatherInfoCards.temperatureCard.textContent = temperature;
}
