// element collections
const element = {
  //top page
  mainLogo: document.querySelector('.main-logo'),
  inputBox: document.querySelector('.input-box'),
  alertCityNotFound: document.querySelector('.alert-city-not-found'),
  popularCities: document.querySelector('.popular-cities'),
  // result page
  weatherDesc: document.querySelector('.weather-desc'),
  weatherIcon: document.querySelector('.weather-icon'),
  weatherInfoCards: document.querySelectorAll('.weather-info-card'),
};

// TODO: add functions
clickWeatherInfoCard();

function clickWeatherInfoCard() {
  element.weatherInfoCards.forEach((card) => {
    card.addEventListener('click', () => {
      console.log('卡片被点击了');
    });
  });
}

function clickPopularCitiesLabel() {}
