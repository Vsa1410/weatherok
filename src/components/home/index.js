import React, {useState } from "react";
import "./index.css"
import DailyForecast from "./daylyforecast";
import ActualWeather from "./currentforecast";


const daysForecasts = []
let daysForecasts3 = []








function Home (){
    
    const [daysForecasts3 ,setForecasts3] = useState([])
    
    async function getData(){
        let response = await fetch ('https://dataservice.accuweather.com/forecasts/v1/daily/5day/33806?apikey=fLEnBDZUYLr7GMScmfxJrlm01rNUwTmY&language=pt-br&details=true&metric=true HTTP/1.1')
        let data = await response.json()
        
        
        daysForecasts.push(data.DailyForecasts)
        setForecasts3(daysForecasts[0])
        console.log(daysForecasts3)
        
    }
    
    getData()
    
    return(
        
        


        <div className="body">
                <div>
                    <h4 style={{color:"white", 
                                margin: "60px 0 10% 40px "}}>
                        Bem vindo
                    </h4>
                </div>
                <ActualWeather/>      
                
                {daysForecasts3.map((day, index)=> 
                    <DailyForecast 
                    key={index}
                    date={day.Date}
                    tempmax={day.Temperature.Maximum.Value}
                    tempmin={day.Temperature.Minimum.Value}
                    rainmm={day.Night.TotalLiquid.Value}
                />
                )}
                
    
                

                
        </div>
    )
}
export default Home