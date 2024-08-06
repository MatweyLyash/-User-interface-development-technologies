import React from "react";
import notFound from "../notFound.jpg"

const NotFound = ()=>{
    return(
        <div className="notFound" style={{display:"flex", justifyContent:"center", height:"395px"}}>
            <img src={notFound} alt="Not Found"/>
        </div>
    )
}
export default NotFound;