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
      console.log(chip.label);
    });
  });
}
