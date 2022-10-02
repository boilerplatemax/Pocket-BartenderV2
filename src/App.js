import React, {useState, useEffect} from 'react';
import './css/App.css';
import DrinksPage from './pages/DrinksPage'
import DrinkPage from './pages/DrinkPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FavoritePage from './pages/FavoritePage'
import Navigation from './components/Navigation'
import axios, { Axios } from 'axios';
import {HashRouter, Routes, Route} from 'react-router-dom'

export const AppContext = React.createContext()

const LOCAL_STORAGE_KEY= 'reactApp.favorites'

const url='https://www.thecocktaildb.com/api/json/v1/1/'

const defaultQuery='filter.php?a=non_alcoholic'

function App() {

  const [urlQuery, setUrlQuery]=useState(defaultQuery)
  
  const [items, setItems] = useState([{}])

  const [loading, setLoading] = useState(false)

  const [favoriteItemIds, setFavoriteItemIds] = useState(()=>{

    const storedFavs = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(storedFavs===null){
      return []
    }
    else{
      return JSON.parse(storedFavs)
    }
  })

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteItemIds))
  },[favoriteItemIds])

  useEffect(()=>{
    getDrinks()
  },[urlQuery])
  
  const getDrinks= async()=>{
    try{
      setLoading(true)
      const data= await axios
      .get(url+urlQuery)
      .then((response)=>{
        setItems(response.data.drinks)
      })
      setLoading(false)
    }
    catch(e){
      console.log(e)
    }
  }

  const AppContextValue ={
    favoriteHandler,
    favoriteItemIds,
    searchHandler,
    filterHandler,
    loading,
    randomSearchHandler,
    listHandler
  }

  function favoriteHandler(id){
    if(favoriteItemIds.includes(id)){
      setFavoriteItemIds(favoriteItemIds.filter(i=>i!=id))
    }
    else{
      setFavoriteItemIds([...favoriteItemIds,id])
    }
  }
  function showFavoritesHandler(showFavs){
    if(showFavs){
      setItems(items.filter(item=>favoriteItemIds.includes(item.idDrink)))
    }
    else{
      setUrlQuery(defaultQuery)
      getDrinks()
    }
  }

  function randomSearchHandler(){
    setUrlQuery('random.php')
    getDrinks()
  }
  function scrollToTopHandler() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
  }
  function searchHandler(query){
    query!=''?setUrlQuery('search.php?s='+query):setUrlQuery(defaultQuery)
  }
  function listHandler(query){
    setUrlQuery('filter.php?c='+query)
  }

  function filterHandler(query){
    setUrlQuery('filter.php?i='+query)
  }
  function resetSearch(){
    setUrlQuery('filter.php?a=alcoholic')
  }

  
  return(
    <HashRouter>
      <Navigation resetSearch={resetSearch} scrollToTopHandler={scrollToTopHandler}/>
    <AppContext.Provider value={AppContextValue}>
    <Routes>
    <Route
      path='/'
      element={<HomePage resetSearch={resetSearch}/>}
      />
      <Route
      path='/about'
      element={<AboutPage/>}
      />
      <Route
      path='/search'
      element={<DrinksPage items={items} showFavoritesHandler={showFavoritesHandler}/>}
      />
      <Route
      path='/favs'
      element={<FavoritePage favoriteItemIds={favoriteItemIds}/>}
      />
      <Route
      path='/drink'
      element={<DrinkPage url={url} />}
      />
    </Routes>
    </AppContext.Provider>
    </HashRouter>
  )
}


export default App;
