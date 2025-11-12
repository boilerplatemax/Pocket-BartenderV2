import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import axios from 'axios';
import { Animated } from 'react-animated-css';
import { Drink } from '../types';

interface FavoriteItemProps {
  id: string;
}

export default function FavoriteItem({ id }: FavoriteItemProps) {
  const [item, setItem] = useState<Drink | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDrinkById = async () => {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
        );
        setItem(response.data.drinks[0]);
      } catch (e) {
        console.error(e);
      }
    };
    getDrinkById();
  }, [id]);

  if (!item) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-jeans border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleClick = () => {
    localStorage.setItem('DRINK_ID', item.idDrink);
    navigate('/drink');
  };

  return (
    <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
      <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
        {/* Title */}
        <div className="p-4 bg-gradient-to-r from-opera-mauve to-blue-jeans">
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
    </Animated>
  );
}
