import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage'
import Header from "./components/Header"
import Main from "./components/Main"
import SearchButton from "./components/SearchButton"

export default function App() {
  const [state, setState] = useState({
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     showSearchPage: false,
     books: []
  })

  function changeShelves(book, shelf) {
    BooksAPI.update(book, shelf)
        .then(() => {
          BooksAPI.getAll()
            .then(books => {
              setState({
                books
              })
            })
      })
  }

  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        setState({
          books
        })
      })
  }, [])

  function handleGoBack() {
    setState(prevState => {
      return {
        ...prevState,
        showSearchPage: false
      }
    })
  }

  function handleSearchButtonClick() {
    setState(prevState => {
      return {
        ...prevState,
        showSearchPage: true 
      } 
    })
  }

    return (
      <div className="app">
        {state.showSearchPage ? (
          <SearchPage onClick={handleGoBack} handleChange={changeShelves} />
        ) : (
          <div className="list-books">
            <Header />
            <Main books={state.books} handleChange={changeShelves} />
            <SearchButton onClick={handleSearchButtonClick} />
          </div>
        )}
      </div>
    )
}
