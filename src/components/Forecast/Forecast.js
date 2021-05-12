import React,{useState} from 'react';
import Current from '../Current/Current'
import Day from './Day'

const Forecast = () => {
    
	let [currentData, setCurrentData] = useState({});
	let [todayData, setTodayData] = useState({});
	let [tomorrowData,setTomorrowData]=useState({});

function getForecast() {

fetch("http://api.weatherapi.com/v1/forecast.json?key=9fb64bb96b4c40e7bb2193753210805&q=auto:ip&days=2&aqi=no&alerts=no", {
	"method": "GET",
})
.then(response => {
return	response.json()
})
.then(response=>{
    console.log(response)
	let current={
		text:response.current.condition.text,
		feelsLike:response.current.feelslike_c,
		tempC:response.current.temp_c,
		icon:response.current.condition.icon,
	    status:200
	}
	setTodayData( {...response.forecast.forecastday[0],status:200,name:"Днес"});
	console.log(response.forecast.forecastday[0])
	setTomorrowData( {...response.forecast.forecastday[1],status:200,name:"Утре"});
    setCurrentData(current);
})
.catch(err => {
	console.error(err);
});
}


return (
// JSX code will go here
<div>
<h2>Прогнозата за времето</h2>

<button onClick={getForecast}>Get Forecast</button>
<Current currentData={currentData}></Current>
<div className="today container">
    <Day dayData={todayData}></Day>
</div>
<div className="tomorrow container">
    <Day dayData={tomorrowData}></Day>
</div>
</div>
)
}

export default Forecast;



