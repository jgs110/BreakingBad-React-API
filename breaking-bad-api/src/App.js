import React, { useState, useEffect } from 'react'; // Bringing in hooks
import axios from 'axios';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([]) //Takes items from API using useState hook....(state, setState)
  const [isLoading, setIsLoading] = useState(true) // if true show loading GIF
  const [query, setQuery] = useState('')


  useEffect(() => { // useEffect hook to fetch API with Axios HTTP Request
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      //  console.log(result.data)

      setItems(result.data)
      setIsLoading(false) // Stops loading Gif after items are fetched
    }

    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
