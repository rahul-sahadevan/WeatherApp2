
const button = document.querySelector(".btn")
const searchInput = document.querySelector(".searchinput");


button.addEventListener("click",() =>{
    const searchVal = searchInput.value;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=85d6588eaee5a0d134b1e5e179482061&units=metric`
    async function getDetails(){
        const response = await fetch(endpoint);
        const result = await response.json();
        if(result.message == "city not found"){
            const error = document.querySelector(".error");
            error.style.display = "block";
            document.querySelector(".weather").style.display = "none"
        }
        else{

            console.log(result);
            const temp = document.querySelector(".temp");
            const tempRes = result.main.temp;
            temp.innerText = Math.round(tempRes)+"°C"
          
    
            const city = document.querySelector(".city");
            city.innerText = result.name;
    
            const humidity = document.querySelector(".humidity");
            const humRes = result.main.humidity;
            humidity.innerText = humRes+"%";
    
            const wind = document.querySelector(".wind");
            const windRes = result.wind.speed;
            wind.innerText = windRes+" kmph";
            const wIcone  = document.querySelector(".w-icon");
    
            if(result.weather[0].main == "Clouds"){
                wIcone.src = "assets/clouds.png";
            }
            if(result.weather[0].main == "Clear"){
                wIcone.src = "assets/clear.png";
            }
            if(result.weather[0].main == "Drizzle"){
                wIcone.src = "assets/drizzle.png";
            }
            if(result.weather[0].main == "Mist"){
                wIcone.src = "assets/mist.png";
            }
            if(result.weather[0].main == "Rain"){
                wIcone.src = "assets/rain.png";
            }
            if(result.weather[0].main == "Snow"){
                wIcone.src = "assets/snow.png";
            }
            document.querySelector(".error").style.display = "none";
            document.querySelector(".weather").style.display = "block"
        }
      
    }
    getDetails();
})