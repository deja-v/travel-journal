import logo from "./assets/pin.svg"
import React from "react"

function Content(props){
    return (
        <>
        <div className="img-and-content">
            <div className="card">
                <img height="180" width="137" src={props.imageUrl} alt="" className="images"/>
                <div className="content">
                    <img height="11"  src={logo} alt="" />
                    <p className="location">{props.location}</p>
                    <a className="map-link" href={props.mapsUrl}>View on Google Maps</a>
                    <h1>{props.title}</h1>
                    
                    <p><b>{props.startDate} - {props.endDate}</b></p>
                    <p>{props.desc}</p>
                </div>
            </div>   
        </div>
        <hr />
        
        </>
    )
}

export default Content