import { fetchWeatherData } from './api.js';

// -------------------
//  DOM Elements
// -------------------
export const elements = {
  body: document.body,
  // top page
  mainLogo: document.querySelector('.main-logo'),
  inputBox: document.querySelector('.input-box'),
  searchTextField: document.querySelector('md-outlined-text-field'),
  alertCityNotFound: document.querySelector('.alert-city-not-found'),
  popularCitiesContainer: document.querySelector('.popular-cities'),
  popularCitiesChips: document.querySelectorAll('md-suggestion-chip'),
  // result page
  weatherDesc: document.querySelector('.weather-desc'),
  weatherIcon: document.querySelector('.weather-icon'),
  // weatherInfoCards: document.querySelectorAll('.weather-info-card'),
  weatherInfoCards: {
    all: document.querySelectorAll('.weather-info-card'),
    descriptionCard: document.querySelector('.weather-info-card.description'),
    temperatureCard: document.querySelector('.weather-info-card.temperature'),
    humidityCard: document.querySelector('.weather-info-card.humidity'),
    pressureCard: document.querySelector('.weather-info-card.barometric-pressure'),
    windSpeedCard: document.querySelector('.weather-info-card.wind-speed'),
  },
};

// -------------------
//  Functions
// -------------------
/**
 * Handles the click event on a popular city chip.
 * Sets the search text field's value to the chip's label.
 * @param {Event} event - The click event object.
 */
const handlePopularCityClick = (event) => {
  const chip = event.currentTarget;
  elements.searchTextField.value = chip.label;
};

/**
 * Handles the keydown event on the search text field.
 * Logs the input value to the console if the Enter key is pressed.
 * @param {KeyboardEvent} event - The keydown event object.
 */
const handleSearchKeydown = (event) => {
  if (event.code === 'Enter') {
    fetchWeatherData(elements.searchTextField.value);
  }
};

/**
 * Handles the click event on a weather info card.
 * (Currently logs a message to the console).
 * @param {Event} event - The click event object.
 */
const handleWeatherInfoCardClick = (event) => {
  console.log('A weather card was clicked.');
};

// -------------------
//  Event Listeners
// -------------------
/**
 * Adds all necessary event listeners to the DOM elements.
 */
const addEventListeners = () => {
  elements.popularCitiesChips.forEach((chip) => {
    chip.addEventListener('click', handlePopularCityClick);
  });

  elements.searchTextField.addEventListener('keydown', handleSearchKeydown);

  elements.weatherInfoCards.all.forEach((card) => {
    card.addEventListener('click', handleWeatherInfoCardClick);
  });
};

// -------------------
//  Initialization
// -------------------
addEventListeners();
