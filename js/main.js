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
 * update UI after recieving the response from weather api.
 * @param {JSON} data - response from weather api
 */
function updateUI(data) {
  elements.body.classList.add('view-results');

  const { location, current } = data;
  const { name, country } = location;
  const { temp_c, condition } = current;
  const { text, icon } = condition;

  console.log(temp_c);
  console.log(name);
  console.log(country);
  console.log(text);

  elements.weatherInfoCards.temperatureCard.textContent = temp_c;
}

function showError(message) {
  console.error('❌ Error! Should show feedback to user:', message);
}

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
const handleSearchKeydown = async (event) => {
  if (event.code === 'Enter') {
    try {
      const data = await fetchWeatherData(elements.searchTextField.value);
      updateUI(data);
    } catch (error) {
      showError(error);
    }
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
