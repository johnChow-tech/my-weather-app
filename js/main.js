import { fetchWeatherData } from './api.js';

// -------------------
//  DOM Elements
// -------------------
const elements = {
  body: document.body,
  // top page
  mainLogo: document.querySelector('.main-logo'),
  inputBox: document.querySelector('.input-box'),
  searchTextField: document.querySelector('md-outlined-text-field'),
  alertCityNotFound: document.querySelector('.alert-box'),
  popularCitiesContainer: document.querySelector('.popular-cities'),
  popularCitiesChips: document.querySelectorAll('md-suggestion-chip'),
  // result page
  cityName: document.querySelector('.city-name'),
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

  const {
    location: { name, country },
    current: {
      temp_c,
      condition: { text, icon },
      humidity,
      pressure_mb,
      wind_kph,
    },
  } = data;

  elements.weatherIcon.src = `${icon}`;
  elements.weatherIcon.alt = `${text}`;
  elements.cityName.textContent = `${name},${country}`;
  elements.weatherInfoCards.descriptionCard.textContent = `${text}`;
  elements.weatherInfoCards.temperatureCard.textContent = `${temp_c} ℃`;
  elements.weatherInfoCards.humidityCard.textContent = `${humidity}%`;
  elements.weatherInfoCards.pressureCard.textContent = `${pressure_mb} hpa`;
  elements.weatherInfoCards.windSpeedCard.textContent = `${wind_kph} km/h`;
}

let alertTimeoutId = null;

function showError(message) {
  elements.alertCityNotFound.classList.add('is-visible');
  if (alertTimeoutId) {
    clearTimeout(alertTimeoutId);
  }
  alertTimeoutId = setTimeout(() => {
    elements.alertCityNotFound.classList.remove('is-visible');
  }, 2000);
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
      const weatherData = await fetchWeatherData(elements.searchTextField.value);
      console.log(weatherData);
      updateUI(weatherData);
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
  const clickedCard = event.currentTarget;
  clickedCard.classList.toggle('is-clicked');
  const cardType = clickedCard.dataset.cardType;
  console.log(`A weather card was clicked:${cardType}`);
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
