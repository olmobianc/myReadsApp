import React from "react"
import Shelf from "./Shelf"
import { useState } from "react"

export default function Main(props) {

    const [state, setState] = useState({
        shelf: ""
    })

    const currentlyReading = props.books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = props.books.filter(book => book.shelf === "wantToRead")
    const read = props.books.filter(book => book.shelf === "read")
    //console.log(currentlyReading)
    //console.log(wantToRead)
    //console.log(read)

    function handleChange(event) {
        setState({
            shelf: event.target.value
        })
    }


    console.log(state.shelf)

    return(
        <div className="list-books-content">
              <div>
                <Shelf bookStatus={currentlyReading} handleChange={handleChange} shelfChanged={state.shelf} />
                <Shelf bookStatus={wantToRead} handleChange={handleChange} shelfChanged={state.shelf} />
                <Shelf bookStatus={read} handleChange={handleChange} shelfChanged={state.shelf} />
              </div>
        </div>
    )
}