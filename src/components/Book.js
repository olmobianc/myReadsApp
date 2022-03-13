import React from "react"

export default function Book(props) {

    return(
        <div>
            <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.bookImage})` }}></div>
                    <div className="book-shelf-changer">
                      <select 
                          value={props.shelf} 
                          onChange={(event) => props.handleChange(props.book, event.target.value)}> {/*why i get "props.handleChange is not a function?"*/}
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{props.bookTitle}</div>
                  <div className="book-authors">{props.bookAuthors}</div>
                </div>
              </li>
        </div>
    )
}