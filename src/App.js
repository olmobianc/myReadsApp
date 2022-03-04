import React, { useState } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import SearchButton from "./components/SearchButton.js"

export default function App() {
  const [state, setState] = useState({
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     showSearchPage: false
  })

  function handleSearchButtonClick() {
    console.log("Hello")
    setState({ 
      showSearchPage: true 
    })
  }

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <Header />
            <Main />
            <SearchButton onClick={handleSearchButtonClick} />
          </div>
        )}
      </div>
    )
}
