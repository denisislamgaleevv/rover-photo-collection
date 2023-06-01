import React from "react";

export const Pagination = ({elementsPerPage, totalPages}) =>{
    const pageNumbers = []

    for (let i = 1; i<= Math.ceil(totalPages/elementsPerPage); i++ ){
        pageNumbers.push(i)
    }
    return(
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key = {number}> 
                        <a href = '#' className="page-link">{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}