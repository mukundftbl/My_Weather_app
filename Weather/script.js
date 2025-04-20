async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "f3265a6d7058411b3090a83a96c3594a";
    
    if (!city) {
      alert("Please enter a city name!");
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // 👈 See the full response
  
      if (data.cod === 404) {
        document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
      } else {
        const weatherInfo = `
          <p><strong>${data.name}, ${data.sys.country}</strong></p>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherInfo;
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
    }
  }
  
  