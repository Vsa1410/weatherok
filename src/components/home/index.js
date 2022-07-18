import React, { Fragment, useState, useEffect } from "react";
import "./index.css"


async function getData(){
    let response = await fetch ('http://dataservice.accuweather.com/forecasts/v1/daily/5day/33806?apikey=fLEnBDZUYLr7GMScmfxJrlm01rNUwTmY&language=pt-br&details=true&metric=true HTTP/1.1')
    let data = await response.json()
    console.log(data)
    return data;
}
function Home (){
    


    const [days, setDays] = useState([])

    useEffect(()=> {
        getData().then(data=>{
            setDays(data['days'])
        })
    }, [])


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
                <div className="forecast">
                    <h4>16/07</h4>
                    <h4>25°/12</h4>
                    <h4>0mm</h4>
                </div>

                <div className="forecast">
                    <h4>16/07</h4>
                    <h4>25°/12</h4>
                    <h4>0mm</h4>
                </div>

                <div className="forecast">
                    <h4>16/07</h4>
                    <h4>25°/12</h4>
                    <h4>0mm</h4>
                </div>

                <div className="forecast">
                    <h4>16/07</h4>
                    <h4>25°/12</h4>
                    <h4>0mm</h4>
                </div>

                <div className="forecast">
                    <h4>16/07</h4>
                    <h4>25°/12</h4>
                    <h4>0mm</h4>
                </div>
        </div>
    )
}
export default Home