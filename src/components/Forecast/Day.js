import React from 'react';

const Day = (props) => {

    function getData() {
        return {
            sunrise:props.dayData.astro.sunrise,
            sunset:props.dayData.astro.sunset,
            maxTemp:props.dayData.day.maxtemp_c,
            minTemp:props.dayData.day.mintemp_c,
            hours:props.dayData.hour,
        }
    }

return (

<div>
    {props.dayData.status===200?
    <>
    <h1>{props.dayData.name}</h1>
    <div>
        <i>{getData().sunrise}</i>
        <i>{getData().sunset}</i>
    </div>
    <div>
        <i>Max: {getData().maxTemp}°C</i>
        <i>Min: {getData().minTemp}°C</i>
    </div>
    <div>
        { getData().hours.map(hour => {
      return( <div>
      <i>{hour.time.split(" ")[1]}</i>
      <img src={hour.condition.icon}></img> 
      <i>{hour.condition.text}</i>
      <i>{hour.temp_c}°C</i>
      </div>)
   })}
    </div>
     
   </>
   :null
}
</div>
)
}

export default Day;



