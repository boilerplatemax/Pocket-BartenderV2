import React, { useState, useEffect } from 'react';
import DrinksPage from './pages/DrinksPage';
import DrinkPage from './pages/DrinkPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FavoritePage from './pages/FavoritePage';
import Navigation from './components/Navigation';
import axios from 'axios';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Drink, AppContextType } from './types';

export const AppContext = React.createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'reactApp.favorites';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/';
const defaultQuery = 'filter.php?a=non_alcoholic';

function App() {
  const [urlQuery, setUrlQuery] = useState<string>(defaultQuery);
  const [eventToggler, setEventToggler] = useState<boolean>(false);
  const [items, setItems] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [favoriteItemIds, setFavoriteItemIds] = useState<string[]>(() => {
    const storedFavs = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteItemIds));
  }, [favoriteItemIds]);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url + urlQuery);
        setItems(response.data.drinks || []);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };
    getDrinks();
  }, [urlQuery, eventToggler]);

  function favoriteHandler(id: string) {
    if (favoriteItemIds.includes(id)) {
      setFavoriteItemIds(favoriteItemIds.filter(i => i !== id));
    } else {
      setFavoriteItemIds([...favoriteItemIds, id]);
    }
  }

  function randomSearchHandler() {
    setUrlQuery('random.php');
    setEventToggler(prev => !prev);
  }

  function scrollToTopHandler() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function searchHandler(query: string) {
    query !== '' ? setUrlQuery('search.php?s=' + query) : setUrlQuery(defaultQuery);
  }

  function listHandler(query: string) {
    setUrlQuery('filter.php?c=' + query);
  }

  function filterHandler(query: string) {
    setUrlQuery('filter.php?i=' + query);
  }

  function resetSearch() {
    setUrlQuery('filter.php?a=alcoholic');
  }

  const AppContextValue: AppContextType = {
    favoriteHandler,
    favoriteItemIds,
    searchHandler,
    filterHandler,
    loading,
    randomSearchHandler,
    listHandler,
  };

  return (
    <HashRouter>
      <Navigation resetSearch={resetSearch} scrollToTopHandler={scrollToTopHandler} />
      <AppContext.Provider value={AppContextValue}>
        <Routes>
          <Route path='/' element={<HomePage resetSearch={resetSearch} />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/search' element={<DrinksPage items={items} />} />
          <Route path='/favs' element={<FavoritePage favoriteItemIds={favoriteItemIds} />} />
          <Route path='/drink' element={<DrinkPage url={url} />} />
        </Routes>
      </AppContext.Provider>
    </HashRouter>
  );
}

export default App;
