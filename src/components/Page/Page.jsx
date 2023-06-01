import React from "react";
import './Page.css'


export const Page = ({elem}) =>{
     
    return(
        <div className="mainBlockDiv">
             <div>  
              <h2> {elem.earth_date}</h2>
              </div>  
            <div>  
                  <p>{elem.camera.name}</p>
                  <p>{elem.camera.fill_name}</p>
                  </div>     
                 
              <img width='400px' src ={elem.img_src}/>
           </div> 
    )
}