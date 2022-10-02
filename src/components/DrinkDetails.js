import React from 'react'
import {Container, Row, Col, Card, CloseButton} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function DrinkDetails({item}) {
const navigate = useNavigate();
  return (
    <Card style={{border:'none'}}>
                            <Row>
                            <CloseButton style={{position: 'absolute', right: '0', padding:'10px', backgroundColor:'white'}} onClick={()=>navigate(-1)}/>         
                                <Col md='6'>
                                {/* <Card.Title style={{padding:'30px'}}></Card.Title> */}
                                <Card.Img src={item.strDrinkThumb} style={{height:'100%',objectFit:'cover'}}></Card.Img>
                                </Col>
                                <Col md='6'>
                                    <Card.Body>
                                    <h1 className='text-muted'>{item.strDrink}</h1>
                                    <h2>Ingredients</h2>
                                        <ul>
                                        <li>{item.strIngredient1}</li>
                                        <li>{item.strIngredient2}</li>
                                        {item.strIngredient3===null?null:<li>{item.strIngredient3}</li>}
                                        {item.strIngredient4===null?null:<li>{item.strIngredient4}</li>}
                                        {item.strIngredient5===null?null:<li>{item.strIngredient5}</li>}
                                        {item.strIngredient6===null?null:<li>{item.strIngredient6}</li>}
                                        {item.strIngredient7===null?null:<li>{item.strIngredient7}</li>}
                                        {item.strIngredient8===null?null:<li>{item.strIngredient8}</li>}   
                                        </ul>
                                    <h2>Category</h2>
                                    <p>{item.strCategory}</p>

                                    <h2>Instructions</h2>
                                    <p>{item.strInstructions}</p>
                                    </Card.Body>
                                </Col>
                            </Row>   
                        </Card>
  )
}
