import React from "react"
import * as BooksAPI from '../BooksAPI'
import { useState } from 'react'
import Book from "./Book"

export default function SearchPage(props) {

    const [state, setState] = useState({
      query: "",
      result: []
    })

    function startSearch(event) {
      const userInput = event.target.value
      setState(prevState => {
        return {
          ...prevState,
          query: userInput
        }
      })
      BooksAPI.search(state.query)
        .then((result) => {
          setState(prevState => {
            return {
              ...prevState,
              result
            }
          })
          console.log(result) //first character is undefined here, why ?? (next characters are fine instead)
        })
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={props.onClick}>Close</button>
              <div className="search-books-input-wrapper">

                {/* input field where user will type the book search, adding "value" 
                to make it a controlled component */}
                <input 
                    type="text" 
                    placeholder="Search by title or author" 
                    onChange={startSearch}
                    value={state.query}
                />

              </div>
            </div>
            <div className="search-books-results">

              {/* creating dinamically the list of books based on user input search */}
              <ol className="books-grid">
                  <li>
                    {state.result.map(book =>
                        <Book 
                          key={book.id}
                          book={book}
                          bookTitle={book.title} 
                          bookAuthors={book.authors} 
                          bookImage={book.imageLinks.thumbnail}
                        />
                    )}
                  </li>
              </ol>

            </div>
            <div className="search-terms">
              <h4>You can search by typing the any of the following words:</h4>
              'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 
              'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 
              'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 
              'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 
              'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 
              'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 
              'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 
              'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 
              'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 
              'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 
              'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
            </div>
        </div>
    )
    
}