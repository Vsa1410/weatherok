import React, { useEffect, useState } from "react";





function ActualWeather(){
    const [actual, setActual]= useState([])

    async function getData(){
        let response = await fetch('https://dataservice.accuweather.com/currentconditions/v1/33806?apikey=lqEAAB3HFjHmt2QXmRfvWHBA2h7T7tM0&language=pt-br&details=true HTTP/1.1')
        let data = response.json()
        

        console.log(data)
        return data
    }
     
    useEffect(()=>{

        getData().then(data => {

            setActual(data[0])
            console.log(data)
            console.log(actual)
            
        })
            
        

    },[])
   
    let currentconditions = actual.Temperature.Metric.Value + " °"+ actual.Temperature.Metric.Unit
        
    
    return(
        
         <div>   
            
                <div className="current-information" style={{display:"flex",
                                                        justifyContent:"space-around"           }}>
                <div>
                    <h3 style={{color:"white",marginBottom:"10px"}}>Juiz de Fora, MG</h3>
                    <h1 style={{color:"white", fontSize:"60px",paddingTop:"0",marginTop: "0",marginBottom:"0"}}>{currentconditions}</h1>
                    <h5 style={{color:"white",marginBottom:"10px", marginTop:"0"}}>{actual.WeatherText}</h5>
                </div>

                <div>
                    <p style={{fontSize:"10px", marginBottom:"0", marginTop:"20px"}}>Max</p>
                    <h4 style={{marginTop: "0", paddingTop:"0"}}>0</h4>
                    <p style={{fontSize:"10px", marginBottom:"0"}}>Min</p>
                    <h4 style={{marginTop: "0", paddingTop:"0"}}>12°</h4>

                </div>
        </div>
    </div>
    )

} export default ActualWeather

