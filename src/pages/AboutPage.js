import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import aboutImage from '../resources/images/aboutimg.png'
import { Animated } from "react-animated-css";

export default function AboutPage(){

//Home page

        return(
            <div id='about-page'>
                <Container>
                <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <Row>
                        <Col lg={6}>
                        
                            <img src={aboutImage} className='about__img'/>
                        </Col>
                        <Col>
                            <h2>About</h2>
                            <p>This React App uses the <a href='https://www.thecocktaildb.com/api.php' target="_blank">CocktailDB API</a> to display a wide variety of drinks as well as their drinks and recipes.</p>
                            <h2>Features</h2>
                            <ul>
                                <li>
                                    React-Bootstrap framework for front-end
                                </li>
                                <li>
                                    Use of React Hooks (UseState, UseEffect, useParams, useNavigate)
                                </li>
                                <li>
                                    API calls
                                </li>
                                <li>
                                    Responsive user Interface
                                </li>
                                </ul>
                                <h2>Developed By Max Shapovalov</h2>
                                <ul>
                                <li>
                                    <a href='https://www.linkedin.com/in/max-shapovalov-2a93191b8/?originalSubdomain=ca' target="_blank">Github</a>
                                </li>
                                <li>
                                    <a href='https://github.com/boilerplatemax' target="_blank">Linkedin</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    </Animated>       
                </Container>
            </div>
            

    )
};

