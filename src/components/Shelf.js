import React from "react"
import Book from "./Book"

export default function Shelf(props) {

    // console.log(props.bookStatus.shelf) why undefined ?
    const bookShelfTitle = (props.bookStatus.map(book => book.shelf))

    return(
        <div>

            <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookShelfTitle[0]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                      {props.bookStatus.map(book => 
                        <Book 
                            key={book.id} 
                            bookTitle={book.title} 
                            bookAuthors={book.authors} 
                            bookImage={book.imageLinks.thumbnail}
                            shelf={props.shelfChanged}
                            handleChange={props.handleChange}
                        />
                       )}  

                    </ol>
                  </div>
            </div>      
        </div>         
    )
}