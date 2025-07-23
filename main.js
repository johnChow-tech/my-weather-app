document.addEventListener('DOMContentLoaded', () => {
  // element collections
  const element = {
    weatherInfoCards: document.querySelectorAll('.weather-info-card'),
  };
  // TODO: add functions
  clickWeatherInfoCard();

  /**
   *
   */
  function clickWeatherInfoCard() {
    element.weatherInfoCards.forEach((card) => {
      card.addEventListener('click', () => {
        console.log('卡片被点击了');
      });
    });
  }
});
