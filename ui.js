class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.clouds = document.getElementById('clouds');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = Math.floor(weather.main.temp - 273.15) + '°C';
    this.icon.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    this.clouds.textContent = `Clouds All: ${ weather.clouds.all + '%'}`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity + '%'}`;
    this.pressure.textContent = `Air Pressure: ${weather.main.pressure + '°'}`;
    this.wind.textContent = `Wind: ${weather.wind.speed + ' km/h'}`;
  }
}