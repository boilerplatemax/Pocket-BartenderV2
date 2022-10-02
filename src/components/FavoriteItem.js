import React,{useState, useEffect, useContext} from 'react'
import FavoriteButton from './FavoriteButton';
import axios, { Axios } from 'axios';
import {Col} from 'react-bootstrap';
import { AppContext } from '../App';
import { Animated } from 'react-animated-css';

export default function FavoriteItem({id}) {
  const [item, setItem]=useState([])
  useEffect(()=>{
    getDrinkById()
  },[])

  const getDrinkById= async()=>{
    try{
      const data= await axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
    .then((response)=>{
      setItem(response.data.drinks[0])      
    })
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <Col sm={6} md={3} lg={2}>
      <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
    <div className='item'>
      <div className='item__header'>
        <div className='item__title'>{item.strDrink}</div>
        </div>
      <a href='#/drink'>
        <div className="img-hover-zoom">
          <img src={item.strDrinkThumb} className='item__img' onClick={()=>localStorage.setItem('DRINK_ID',item.idDrink)}/>
        </div>
      </a>
      <FavoriteButton item={item}/>
    </div>
    </Animated>
    </Col>
  )
}
