import React from "react"
import Shelf from "./Shelf"

export default function Main(props) {

    const currentlyReading = props.books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = props.books.filter(book => book.shelf === "wantToRead")
    const read = props.books.filter(book => book.shelf === "read")

    console.log(currentlyReading)

    return(
        <div className="list-books-content">
              <div>
                <Shelf bookStatus={currentlyReading} handleChange={props.handleChange} />
                <Shelf bookStatus={wantToRead} handleChange={props.handleChange} />
                <Shelf bookStatus={read} handleChange={props.handleChange} />
              </div>
        </div>
    )
}