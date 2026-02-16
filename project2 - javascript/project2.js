document.addEventListener("DOMContentLoaded",()=>{
        const cityinput = document.getElementById("city-input");
        const getweatherbtn = document.getElementById("get-weather-btn");
        const weatherinfo = document.getElementById("weather-info");
        const cityname = document.getElementById("city-name");
        const citytemp = document.getElementById("temperature");
        const citydescription = document.getElementById("description");
        const errorMessage = document.getElementById("error-messag");
        const API_KEY = "eacef693671b6ec1aaaf9e99b7055166";

        getweatherbtn.addEventListener("click",async (e)=>{
            const city = cityinput.value.trim();
            if(!city) return;
            try{
                const weatherdata = await fetchWeatherData(city);
                displayweather(weatherdata);
            }
            catch(error){
                showerror();
            }
        });
         async function fetchWeatherData(city) {
    //gets the data
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(" City Not found");
            }
            const data = await response.json();
            return data;
  }

        function displayweather(data){
            console.log(data);
            const {name,main,weather} = data;
            cityname.textContent = name;
            citytemp.textContent = `Temperature: ${main.temp} °C`;
            citydescription.textContent = `Weather: ${weather[0].description}`;
             weatherinfo.classList.remove('hidden');
            errorMessage.classList.add('hidden');

        };
        function showerror(){
            weatherinfo.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        }
        
})
