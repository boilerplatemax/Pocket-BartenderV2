import React, { useContext } from 'react';
import { AppContext } from '../App';
import { MdFavoriteBorder as HeartBorder, MdFavorite as Heart } from 'react-icons/md';
import { Drink } from '../types';

interface FavoriteButtonProps {
  item: Drink;
}

export default function FavoriteButton({ item }: FavoriteButtonProps) {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { favoriteHandler, favoriteItemIds } = context;
  const isFav = favoriteItemIds.includes(item.idDrink);

  return (
    <button
      onClick={() => favoriteHandler(item.idDrink)}
      className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-200 group z-10"
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFav ? (
        <Heart className="text-2xl text-red-500 animate-pulse" />
      ) : (
        <HeartBorder className="text-2xl text-gray-600 group-hover:text-red-500 transition-colors" />
      )}
    </button>
  );
}
