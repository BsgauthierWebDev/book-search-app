import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import BookSearchBar from './BookSearchBar/BookSearchBar';
import BookSearchList from './BookSearchList/BookSearchList';
import BookSearchFilter from './BookSearchFilter/BookSearchFilter';

class App extends Component {

  state = {
    bookResults: this.props.starterBookResults,
    searchQuery: "lord+or+the+rings",
    bookFilter: "",
    printFilter: ""
  }

  handleSearchSubmit = (searchSubmitEvent, searchInput) => {
    searchSubmitEvent.preventDefault();
    this.setState({
      searchQuery: searchInput
    });
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    const key = 'AIzaSyB19rigTO6XRAxzHMOQpcqEl2_HVeS94kU'
    const formattedSearchUrl = this.formatQuery(baseUrl, searchInput, key);
    fetch(formattedSearchUrl)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(bookResultsObj => {
        console.log('Received a good response: ', bookResultsObj)
      this.setState({
        bookResults: bookResultsObj,
        error: null
      });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  formatQuery = (baseUrl, searchInput, key) => {
    const {bookFilter, printFilter} = this.state;
    let formattedQuery;
    if (searchInput !== "") {
      formattedQuery = '?q=' + searchInput;
    }
    if (bookFilter !== "") {
      formattedQuery = formattedQuery + '&filter=' + bookFilter;
    }
    if (printFilter !== "") {
      formattedQuery = formattedQuery + '&bookType=' + printFilter;
    }
    const formattedUrl = baseUrl + formattedQuery + '&key=' + key;
    console.log('formatted URL:', formattedUrl);
    return formattedUrl;
  }

  handlePrintType = (printTypeFormEvent) => {
    if (printTypeFormEvent) {
      this.setState({
        printFilter: printTypeFormEvent
      });
    }
  }

  handleBookType = (bookTypeFormEvent) => {
    if (bookTypeFormEvent) {
      this.setState({
        bookFilter: bookTypeFormEvent
      });
    }
  }

  render() {
    const {bookResults} = this.state;

    return (
      <div>
        <Header />
        <BookSearchBar
          handleSearchSubmit = {this.handleSearchSubmit}/>
        <BookSearchFilter
          handlePrintType = {this.handlePrintType}
          handleBookType = {this.handleBookType}/>
          <BookSearchList
            bookResults = {bookResults}/>
      </div>
    );
  }
}

export default App;