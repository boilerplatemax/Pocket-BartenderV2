import React,{useState, useContext} from 'react'
import {Col, CloseButton, Form} from 'react-bootstrap'
import { AppContext } from '../App'
import { MdSearch as Search} from "react-icons/md";
import { Animated } from 'react-animated-css';

export default function SearchMenu({items}) {

    const {searchHandler, filterHandler, listHandler, randomSearchHandler} = useContext(AppContext)

    const [displaySearchMenu, setDisplaySearchMenu]=useState(false)
    function displaySearchMenuHandler(){
    setDisplaySearchMenu(prev => !prev)
    }
    function selectQueryHandler(query, func){
        if(func==='search'){searchHandler(query)}
        else if(func==='filter'){filterHandler(query)}
        else if(func==='list'){listHandler(query)}
        else{
            return
        }
        displaySearchMenuHandler()
    }
    const menu=
    <Animated animationIn="slideInLeft" isVisible={true} animationInDuration={600}  className='search-menu__menu'>
    <div>
      <div className='search-menu'>
      <CloseButton onClick={displaySearchMenuHandler} className="float-end"/>
      <div className='search-menu__title'><h4>Search Filters</h4></div>
      <h2>{items?items.length:0} {items&&items.length>1?'Results':'Result'}</h2>
        <div className='search-menu__body'>
        <Form className="d-flex  w-100" >
          <Form.Control
            type="search"
            placeholder="Search Drink..."
            aria-label="Search"
            onChange={e=>searchHandler(e.target.value)}
            />
        </Form>
        <Form.Select aria-label="Default select example"
        onChange={e=>selectQueryHandler(e.target.value, 'filter')}>
          <option>Sort by Alcohol Content</option>
          <option value="vodka">Vodka</option>
          <option value="gin">Gin</option>
          <option value="rum">Rum</option>
        </Form.Select>
        <Form.Select aria-label="Default select example"
        onChange={e=>selectQueryHandler(e.target.value, 'filter')}>
          <option>Filter by Juice</option>
          <option value="pineapple_juice">Pineapple Juice</option>
          <option value="orange_juice">Orange Juice</option>
          <option value="lemon_juice">Lemon Juice</option>
          <option value="lime_juice">Lime Juice</option>
        </Form.Select>
        <Form.Select aria-label="Default select example"
        onChange={e=>selectQueryHandler(e.target.value, 'list')}>
          <option>Filter by Category</option>
          <option value="Cocktail">Cocktails</option>
          <option value="Shake">Shake</option>
          <option value="Ordinary_drink">Classics</option>
          <option value="Coffee_/_tea">Brews</option>
          <option value="Homemade_Liqueur">Homemade Liqueur</option>
          <option value="Shot">Shot</option>
        </Form.Select>
        <button className='btn btn--primary' onClick={randomSearchHandler}>Surprise Me</button>
        </div>
      </div>
    </div>
    </Animated>
  return (
    <>
    
        {displaySearchMenu?<Col xs={7} s={6}md={5} lg={6} xl={3}>
          {menu}
        </Col>:
        <div className='search-menu__search-filters'>
        <button
          className='btn btn--primary btn--large'
          onClick={displaySearchMenuHandler}>
          Search Filters 
          <Search/>
        </button>
      </div>
        }
        
        </>
  )
}
