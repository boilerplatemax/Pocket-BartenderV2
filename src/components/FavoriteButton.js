import React,{useContext} from 'react'
import { AppContext } from '../App'
import { MdFavoriteBorder as HeartBorder, MdFavorite as Heart} from "react-icons/md";
export default function FavoriteButton({item}) {
    const {favoriteHandler, favoriteItemIds} = useContext(AppContext)

    const isFav = favoriteItemIds.includes(item.idDrink)

  return (
    <button onClick={()=>favoriteHandler(item.idDrink)} className='button button--icon item__fav-button'>
    {
        isFav?
        <Heart className='button--fav button--fav-filled'/>:
        <HeartBorder className='button--fav'/>
    }
    </button>
  )
}
