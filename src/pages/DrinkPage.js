import React,{useState, useEffect} from 'react'
import {Container, Row, Col, Card,CloseButton} from 'react-bootstrap'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import { Animated } from 'react-animated-css';

export default function DrinkPage({url}) {
  const [item, setItem]=useState([])
  const navigate = useNavigate();
  const id= localStorage.getItem('DRINK_ID')!=null?localStorage.getItem('DRINK_ID'):11007
  useEffect(()=>{
    getDrinks()
  },[])
  
  const getDrinks= async()=>{
    try{
      const data= await axios
      .get(url+`lookup.php?i=${id}`)
      .then((response)=>{
        setItem(response.data.drinks[0])
      })

    }
    catch(e){
      console.log(e)
    }
  }

  const ingredientArray=Object.values(item).splice(17,31)
  const ingredientAmountArray=Object.values(item).splice(32,46)

  return (
    <div className='drinkPage'>
    <Container>
    
      <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
      
        <Card style={{border:'none'}}>
        <Card.Title><CloseButton className='float-end m-1' onClick={()=>navigate(-1)}/></Card.Title>
          <Row>
          <Col md='5'>
          <div className='img-holder__drink-page'>
            <Card.Img src={item.strDrinkThumb} style={{height:'100%',objectFit:'cover'}}></Card.Img>
            <FavoriteButton item={item}/>
          </div>                 
        </Col>
        <Col md='7'>
          <Card.Body>
          <Animated animationIn="bounceInRight" isVisible={true} animationInDuration={1000}>
          <h1 className='text-muted'>{item.strDrink}</h1>
          </Animated>
          <Animated animationIn="bounceInRight" isVisible={true} animationInDuration={1000} animationInDelay={100}>
            <h2>Ingredients</h2>
            <ul>
              {ingredientArray[0]&&<li>{ingredientArray[0]} {ingredientAmountArray[0]}</li>}
              {ingredientArray[1]&&<li>{ingredientArray[1]} {ingredientAmountArray[1]}</li>}
              {ingredientArray[2]&&<li>{ingredientArray[2]} {ingredientAmountArray[2]}</li>}
              {ingredientArray[3]&&<li>{ingredientArray[3]} {ingredientAmountArray[3]}</li>}
              {ingredientArray[4]&&<li>{ingredientArray[4]} {ingredientAmountArray[4]}</li>}
              {ingredientArray[5]&&<li>{ingredientArray[5]} {ingredientAmountArray[5]}</li>}
              {ingredientArray[6]&&<li>{ingredientArray[6]} {ingredientAmountArray[6]}</li>}
              {ingredientArray[7]&&<li>{ingredientArray[7]} {ingredientAmountArray[7]}</li>}
            </ul>
            </Animated>
            <Animated animationIn="bounceInRight" isVisible={true} animationInDuration={1000} animationInDelay={200}>
            <h2>Category</h2>
            <p>{item.strCategory}</p>
            </Animated>
            <Animated animationIn="bounceInRight" isVisible={true} animationInDuration={1000} animationInDelay={300}>
            <h2>Instructions</h2>
            <p>{item.strInstructions}</p>
            </Animated>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </Animated>
  </Container>
  </div>
  )
}
