import React from "react"

export default function SearchButton(props) {
    return(
        <div className="open-search">
            <button onClick={props.onClick}>Add a book</button>
        </div>
    )
    
}