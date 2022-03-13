import React from "react"
import Shelf from "./Shelf"

export default function Main(props) {

    console.log(props)

    const currentlyReading = props.books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = props.books.filter(book => book.shelf === "wantToRead")
    const read = props.books.filter(book => book.shelf === "read")

    return(
        <div className="list-books-content">
              <div>
                <Shelf bookStatus={currentlyReading} handleChange={props.handleChange} /*shelfChanged={state.shelf}*/ />
                <Shelf bookStatus={wantToRead} handleChange={props.handleChang} /*shelfChanged={state.shelf}*/ />
                <Shelf bookStatus={read} handleChange={props.handleChange} /*shelfChanged={state.shelf}*/ />
              </div>
        </div>
    )
}