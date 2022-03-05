import React from "react"
import Shelf from "./Shelf"
import { useState, useEffect } from "react"

export default function Main(props) {

    const [state, setState] = useState({
        shelf: "",
        currentlyReading: [],
        wantToRead: [],
        read: []
    })

    const currentlyReading = props.books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = props.books.filter(book => book.shelf === "wantToRead")
    const read = props.books.filter(book => book.shelf === "read")

    useEffect(() => {
        setState({
            ...state,
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read
        })
    }, [state, currentlyReading, wantToRead, read])

    function handleChange(event) {
        setState({
            shelf: event.target.value
        })
    }

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