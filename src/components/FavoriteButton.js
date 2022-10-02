import React,{useContext} from 'react'
import { AppContext } from '../App'
import { MdFavoriteBorder as HeartBorder, MdFavorite as Heart} from "react-icons/md";
import {Animated} from "react-animated-css";
export default function FavoriteButton({item}) {
    const {favoriteHandler, favoriteItemIds} = useContext(AppContext)

    const isFav = favoriteItemIds.includes(item.idDrink)

  return (
    <button onClick={()=>favoriteHandler(item.idDrink)} className='btn btn--icon item__fav-btn'>
    {
        isFav?
        <Heart className='btn--fav btn--fav-filled'/>:
        <HeartBorder className='btn--fav'/>
    }
    </button>
  )
}
