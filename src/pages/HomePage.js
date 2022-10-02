import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import homeImage from '../resources/images/homedrinkimg.png'
import { Animated } from "react-animated-css";

export default function HomePage({resetSearch}){

//Home page

        return(
            <div id='home-page'>
            <Container>
                <div className='home-page__banner'>
                    <Row>
                        <Col lg={5}>
                        <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                            <div className="home-page__title capitalize">
                                <h1>When life gives you lemons...</h1>
                            </div>
                            <div className="home-page__title-lighter capitalize">
                                <h2>Make a Cocktail!</h2>
                            </div>
                            <a href='#/search'><button className='btn btn--primary btn--large' onClick={()=>resetSearch()}>Explore Drinks</button></a>
                        </Animated>
                        </Col>
                        <Col lg={7}>
                        <Animated animationIn="bounceInDown" isVisible={true} animationInDuration={1000} animationInDelay={200}>
                            <div className="home-page__img-holder">
                                <img src={homeImage}/>
                            </div>
                            
                        </Animated>
                        <p className="float-end text-muted">Developed by Max Shapovalov</p>
                        </Col>
                    </Row>       
                </div>
            </Container>
            </div>
            

    )
};

