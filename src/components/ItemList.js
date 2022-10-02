import React, { useContext } from 'react'
import Item from '../components/Item'
import NoResultsImg from '../components/NoResultsImg'
import {v4 as uuidv4} from 'uuid';
import {Row, Col} from 'react-bootstrap'
import {Animated} from "react-animated-css";
import { AppContext } from '../App';

export default function ItemList({items}) {
  
    const {loading}=useContext(AppContext)

  return (
    
    <Col>
    
    <Animated animationIn="fadeIn" isVisible={!loading} animationInDuration={1000}>
    <div className='item-list'>
    <Row xs={12} md={6} lg={6} xl={3}>
    {
      items!=null?
      items.map((item)=>(
        <Item key={uuidv4()} item={item}/>
      )):<Col xs={12} sm={12} md={{span:8, offset:2}} lg={{span:10, offset:1}}  xl={{span:6, offset:3}} ><NoResultsImg/></Col>
      
    }
    </Row>
    </div>
    </Animated>
    </Col>
    
  )
}
