navigator.geolocation.getCurrentPosition( position=> {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Fetch weather data from weather API using the user's location
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=c1518ea45a928df704dadd58f0d3222d&units=metric#`
        )
          .then(response => response.json())
          .then(data => {
            displayCurrentWeather(data);
          })
          .catch(error => {
            console.log(error);
          })
      });}

      
      
function weatherinformation() {
    const city = document.getElementById("cityInput" ).value;
  
   
    const location = city || delhi ;
  
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5c4a2195070d1ac47918ade64d1ae491&units=metric#&lang=en`)
    
      .then(response => response.json())
      .then(data => {
        displayCurrentWeather(data);
   
      })
      .catch(error => {
        console.log(error);
      });
  }
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  
  function displayCurrentWeather(currentWeather) {
    const currentWeatherContainer = document.getElementById("currentWeather");
    currentWeatherContainer.innerHTML = `
      <p> ${formattedDate}</p>
      <p> ${currentWeather.name}</p>
      <p>${currentWeather.weather[0].description}</p>
      <img src=${"https://openweathermap.org/img/wn/"+currentWeather.weather[0].icon+"@2x.png"}>
      <p>Temperature: ${currentWeather.main.temp }c</p>
      <p>Humidity: ${currentWeather.main.humidity}%</p>
      <p>Wind Speed: ${currentWeather.wind.speed} km/h</p>

    `;
  }
