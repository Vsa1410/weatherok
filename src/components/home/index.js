import React, { Fragment, useState, useEffect } from "react";
import "./index.css"
import DailyForecast from "./daylyforecast";

const daysForecasts = []
let daysForecasts3 = []








function Home (){
    
    const [daysForecasts3 ,setForecasts3] = useState([])
    
    async function getData(){
        let response = await fetch ('http://dataservice.accuweather.com/forecasts/v1/daily/5day/33806?apikey=fLEnBDZUYLr7GMScmfxJrlm01rNUwTmY&language=pt-br&details=true&metric=true HTTP/1.1')
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
                <div className="current-information" style={{display:"flex",
                                                             justifyContent:"space-around"           }}>
                    <div>
                        <h3 style={{color:"white",marginBottom:"10px"}}>Juiz de Fora, MG</h3>
                        <h1 style={{color:"white", fontSize:"60px",paddingTop:"0",marginTop: "0"}}>22°C</h1>
                    </div>

                    <div>
                        <p style={{fontSize:"10px", marginBottom:"0", marginTop:"20px"}}>Max</p>
                        <h4 style={{marginTop: "0", paddingTop:"0"}}>25°</h4>
                        <p style={{fontSize:"10px", marginBottom:"0"}}>Min</p>
                        <h4 style={{marginTop: "0", paddingTop:"0"}}>12°</h4>

                    </div>
                </div>
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