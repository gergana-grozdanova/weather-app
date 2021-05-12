import React,{useState} from 'react';

const Current = (props) => {

function getForecast() {
    
}

return (

<div>
    {props.currentData.status===200?
    <>
    <h1>В момента:</h1>
    <img src={props.currentData.icon}/>
    <p>{props.currentData.text}</p>
    <strong>{props.currentData.tempC}°C</strong>
    <p>Усеща се: {props.currentData.feelsLike}</p>
    </>:null
}

</div>
)
}

export default Current;



