
const formInput = document.getElementById("formInput");
const searchBtn = document.querySelector("#searchBtn");

const currentday = document.querySelector(".currentday");
const currentmonth = document.querySelector(".currentmonth");
const currentdate = document.querySelector(".currentdate");
const city = document.querySelector(".city");
const condition = document.querySelector(".condition");
const temp = document.querySelector(".temp");

const weather = document.querySelector(".weather");


let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getTime = ()=> {   
const now = new Date();
const day = now.getDay();
currentday.innerHTML = Days[day];

const date = now.getDate();
currentdate.innerHTML = date;

const month = now.getMonth();
currentmonth.innerHTML = Months[month];
}


const getInfo = async (event) => {
  event?.preventDefault(); // Safely handle optional 
  let city_name = formInput.value;
  city_name = formInput.value.trim();
  
    if(city_name ===""){
        condition.classList.add("data_set");
       city.innerHTML = "<h3>Enter city to know its weather</h3>";
     return;
    } else{
   try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${config.apiKey}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
      
        condition.classList.remove("data_set");
        city.innerHTML = `${data.name} , ${data.sys.country}`;
        temp.innerHTML = `${data.main.temp} <sup>0</sup>C`;
        // weather.innerHTML = data.weather[0].main;
        let weatherType = data.weather[0].main
        if(weatherType == 'Clouds'){
          weather.innerHTML = `<i class="fa fa-cloud" style="color:white;" ></i>`
        } else if(weatherType == 'Rain'){
          weather.innerHTML =  `<i class="fa-solid fa-cloud-rain" style="color:white;"></i>`

        }else if(weatherType == 'Clear'){
          weather.innerHTML =  `<i class="fa-regular fa-sun" style="color: yellow;"></i>`

        }
      } catch (error) {
        console.log("Error found");
        condition.classList.add("data_set");
        
        city.innerHTML = `<h4> ${city_name} is incorrect.Please, Enter city name correctly</h4>`;
      }
    }
};




document.addEventListener("DOMContentLoaded", () => {
  getTime();
  getInfo(); // Now safely called without event
});

searchBtn.addEventListener("click", getInfo);
