import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBUl2zQ6eXpXxpXLRm7uo1XcKHM5qROzJo';

YTSearch({key: API_KEY, term: 'surfboards'}, (data)=>{
  console.log(data)
})

const App = () => {
  return (
    <SearchBar />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
