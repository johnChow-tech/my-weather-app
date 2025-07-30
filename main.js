// element collections
const elements = {
  //top page
  mainLogo: document.querySelector('.main-logo'),
  inputBox: document.querySelector('.input-box'),
  searchTextField: document.querySelector('md-outlined-text-field'),
  alertCityNotFound: document.querySelector('.alert-city-not-found'),
  popularCitiesContainer: document.querySelector('.popular-cities'),
  popularCitiesChips: document.querySelectorAll('md-suggestion-chip'),
  // result page
  weatherDesc: document.querySelector('.weather-desc'),
  weatherIcon: document.querySelector('.weather-icon'),
  weatherInfoCards: document.querySelectorAll('.weather-info-card'),
};

// TODO: add functions
clickWeatherInfoCard();
clickPopularCitiesLabel();

function clickWeatherInfoCard() {
  elements.weatherInfoCards.forEach((card) => {
    card.addEventListener('click', () => {
      console.log('卡片被点击了');
    });
  });
}

function clickPopularCitiesLabel() {
  elements.popularCitiesChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      elements.searchTextField.value = chip.label;
      fetchWeatherData(chip.label);
    });
  });
}

elements.searchTextField.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    fetchWeatherData(elements.searchTextField.value);
  }
});

async function fetchWeatherData(cityName) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityName}&aqi=no`;
  try {
    const request = new Request(apiUrl);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
}
