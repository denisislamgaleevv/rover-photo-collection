import React from "react";
import './Page.css'


export const Page = ({data, isLoading}) =>{
    if (isLoading){
        return <h2>Загрузка...</h2>


    }
    return(
        <ul className="list-group mb2">
            
            {
                data.map((elem, index) => (
                    <li className="list-group-item">
                     {elem.earth_date}   
                     <img src = {elem.img_src} width = '300px'/>
                    </li>
                ))
            }
        </ul>
    )
}