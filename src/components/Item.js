import React from 'react'
import {Col} from 'react-bootstrap';
import FavoriteButton from './FavoriteButton';

export default function Item({item}) {
    return (
    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
    <div className='item'>
        <div className='item__header'>
            <div className='item__title'>{item.strDrink}</div>
        </div>

        <a href='#/drink'>
            <div className="img-hover-zoom">
                <img src={item.strDrinkThumb} alt={item.strDrink} className='item__img' onClick={()=>localStorage.setItem('DRINK_ID',item.idDrink)}/>
            </div>
            </a>
        <FavoriteButton item={item}/>

    </div>
    </Col>
  )
}
