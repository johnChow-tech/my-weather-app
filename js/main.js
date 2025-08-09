import { fetchWeatherData } from './api.js';

// -------------------
//  DOM Elements
// -------------------
const weatherInfoCardsTypes = ['humidity', 'description', 'temperature', 'pressure', 'windSpeed'];

const elements = {
  body: document.body,
  // top page
  mainLogo: document.querySelector('.main-logo'),
  inputBox: document.querySelector('.input-box'),
  searchTextField: document.querySelector('md-outlined-text-field'),
  alertBox: document.querySelector('.alert-box'),
  alertBoxText: document.querySelector('.alert-box-message'),
  popularCitiesContainer: document.querySelector('.popular-cities'),
  popularCitiesChips: document.querySelectorAll('md-suggestion-chip'),
  // result page
  cityName: document.querySelector('.city-name'),
  weatherIcon: document.querySelector('.weather-icon'),
  // weatherInfoCards: document.querySelectorAll('.weather-info-card'),
  weatherInfoCards: weatherInfoCardsTypes.reduce(
    (acc, type) => {
      // 根据类型找到卡片容器
      const cardElement = document.querySelector(`.weather-info-card.${type}`);
      // 在卡片容器内找到显示文本的元素
      const textElement = cardElement.querySelector('.weather-info-detail-body');

      // 将卡片和文本元素都存入对象中
      acc[type] = {
        card: cardElement,
        text: textElement,
      };

      return acc;
    },
    { all: document.querySelectorAll('.weather-info-card') }
  ),
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

  elements.weatherIcon.src = `https:${icon}`;
  elements.weatherIcon.alt = `${text}`;
  elements.cityName.textContent = `${name},${country}`;
  elements.weatherInfoCards.humidity.text.textContent = `${humidity}%`;
  elements.weatherInfoCards.description.text.textContent = `${text}`;
  elements.weatherInfoCards.temperature.text.textContent = `${temp_c} ℃`;
  elements.weatherInfoCards.pressure.text.textContent = `${pressure_mb} hpa`;
  elements.weatherInfoCards.windSpeed.text.textContent = `${wind_kph} km/h`;
}

/**
 * Display alert box when error occurs.
 * @param {string} message - alert message to display
 */
let alertTimeoutId = null;
function showError(message) {
  elements.alertBoxText.textContent = message;
  elements.alertBox.classList.add('is-visible');
  if (alertTimeoutId) {
    clearTimeout(alertTimeoutId);
  }
  alertTimeoutId = setTimeout(() => {
    elements.alertBox.classList.remove('is-visible');
  }, 2000);
  console.error('❌ Error! Should show feedback to user:', message);
}

/**
 * Call weather api with fetchWeatherData()
 * @param {string} cityName
 */
async function callApi(cityName) {
  try {
    const weatherData = await fetchWeatherData(cityName);
    updateUI(weatherData);
  } catch (error) {
    showError(error);
  }
}

// -------------------
//  Handlers
// -------------------
/**
 * Handles the click event on a popular city chip.
 * Sets the search text field's value to the chip's label.
 * @param {Event} event - The click event object.
 */
const handlePopularCityClick = (event) => {
  const chip = event.currentTarget;
  callApi(chip.label);
};

/**
 * Handles the keydown event on the search text field.
 * Logs the input value to the console if the Enter key is pressed.
 * @param {KeyboardEvent} event - The keydown event object.
 */
const handleSearchKeydown = async (event) => {
  if (event.code === 'Enter') {
    callApi(elements.searchTextField.value);
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
