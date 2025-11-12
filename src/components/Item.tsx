import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { Drink } from '../types';

interface ItemProps {
  item: Drink;
}

export default function Item({ item }: ItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('DRINK_ID', item.idDrink);
    navigate('/drink');
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      {/* Title */}
      <div className="p-4 bg-gradient-to-r from-blue-jeans to-metallic-seaweed">
        <h3 className="text-white font-bold text-lg text-center line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
          {item.strDrink}
        </h3>
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={handleClick}>
        <img
          src={item.strDrinkThumb}
          alt={item.strDrink}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View Details Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-onyx shadow-lg">
            View Recipe
          </div>
        </div>
      </div>

      {/* Favorite Button */}
      <FavoriteButton item={item} />
    </div>
  );
}
