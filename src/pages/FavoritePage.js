import React from 'react'
import FavoriteItem from '../components/FavoriteItem'
import {Container, Row} from 'react-bootstrap'


export default function Favorites({favoriteItemIds}) {
  return (
    <Container>
        <Row>
          <h2>My Favorites</h2>
        {
            favoriteItemIds.map((id)=>{
            return(<FavoriteItem key={id} id={id}/>)
            })
        }
        </Row>
    </Container>
  )
}
