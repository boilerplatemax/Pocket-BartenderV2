import React,{useContext, useEffect} from 'react'
import ItemList from '../components/ItemList'
import SearchMenu from '../components/SearchMenu';
import {Container, Row, Col, Spinner} from 'react-bootstrap'
import { AppContext } from '../App';

export default function DrinksPage({items}) {
  
  const {loading} = useContext(AppContext)
  return (
    <Container>
    <Row>
      <SearchMenu items={items}/>
      {loading?
      <Col>
        <Spinner animation="border" variant="primary" />
      </Col>:
      <ItemList items={items}/>
      }
      
      </Row>
    </Container>
  )
}
