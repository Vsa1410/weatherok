import React from "react";
import dayjs from "dayjs"

function DailyForecast(props){
    return(

        <div className="forecast">
                    <h4>{dayjs(props.date).format('DD/MM')}</h4>
                    <h4>{props.tempmax}</h4>
                    <h4>{props.tempmin}</h4>
                    <h4>{props.rainmm}</h4>
        </div>
    

    )
}
export default DailyForecast
