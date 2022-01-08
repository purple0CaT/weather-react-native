export const fetchIpLocationWeather = async () => {
  try {
    const url = "https://api.my-ip.io/ip.json";
    const resIp = await fetch(url);
    if (resIp.ok) {
      const apiData = await resIp.json();
      // fetch ipLocation
      const url2 = `https://api.ip2loc.com/HTPEPskPsHe7uyNoZABZta36Gj8fVVTe/${apiData.ip}?include=city,location_latitude,location_longitude`;
      const resLocation = await fetch(url2);
      if (resLocation.ok) {
        const dataLocation = await resLocation.json();
        // fetch Weather
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${dataLocation.location_latitude}&lon=${dataLocation.location_longitude}&units=metric&appid=2bfd5ccc7de6daf21fc35b1af7b3431c`;
        const fetchWeather = await fetch(weatherUrl);
        const weatherData = await fetchWeather.json();
        if (fetchWeather.ok) {
          return weatherData;
        } else {
          alert("Weather fetch error");
          console.log(fetchWeather);
        }
      } else {
        alert("Error fetching location");
        console.log(resLocation);
      }
    } else {
      console.log(resIp);
      alert("Error fetching ip");
    }
  } catch (error) {
    // alert("Error");
    console.log(error);
  }
};
