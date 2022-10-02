import React,{useContext} from 'react'
import { AppContext } from '../App'
import { MdFavoriteBorder as HeartBorder, MdFavorite as Heart} from "react-icons/md";
export default function FavoriteButton({item}) {
    const {favoriteHandler, favoriteItemIds} = useContext(AppContext)

    const isFav = favoriteItemIds.includes(item.idDrink)

  return (
    <button onClick={()=>favoriteHandler(item.idDrink)} className='custom-btn custom-btn--icon custom-btn-corner'>
    {
        isFav?
        <Heart className='custom-btn--fav custom-btn--fav-filled'/>:
        <HeartBorder className='custom-btn--fav'/>
    }
    </button>
  )
}
