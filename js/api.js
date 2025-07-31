import { WEATHER_API_KEY } from './config.js';
import { elements } from './main.js';

/**
 * Get JSON data from weather api
 * @param {string} cityName
 * @returns JSON
 */
export async function fetchWeatherData(cityName) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityName}&aqi=no`;
  try {
    // const request = new Request(apiUrl);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
}
