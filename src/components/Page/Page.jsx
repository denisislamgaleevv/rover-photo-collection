import React from "react";
import './Page.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";
export const Page = ({elem}) =>{
     const [isMouseOnPic, setIsMouseOnPic]=useState(false)
    return(
        <div className="mainBlockDiv">
             <div>  
              
              </div>  
            <div>  
                  
                  </div>     
                  <div>  
                  <LazyLoadImage 
                  className="img"
                    key = {elem.img_src}
                    width={400} 
                    height={elem.height}
                    effect="blur"
                    src ={elem.img_src} 
                    onMouseMove={()=>setIsMouseOnPic(true)}
                    onMouseLeave={()=>setIsMouseOnPic(false)}
                  />
                  
                  {isMouseOnPic ? <div 
                   
                   height={elem.height}
                   className="psevdoHover">
                  <p>{elem.earth_date}</p>
                  <p>{elem.camera.name}</p>
                  <p>{elem.camera.full_name}</p>
                  </div>:<></>}
                  </div>
          
           </div> 
    )
}  // <img width='400px' className = 'img' src ={elem.img_src}/>