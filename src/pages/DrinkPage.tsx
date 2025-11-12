import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import { Animated } from 'react-animated-css';
import { Drink } from '../types';
import { MdClose } from 'react-icons/md';

interface DrinkPageProps {
  url: string;
}

export default function DrinkPage({ url }: DrinkPageProps) {
  const [item, setItem] = useState<Drink | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('DRINK_ID') || '11007';
    const getDrinks = async () => {
      try {
        const response = await axios.get(url + `lookup.php?i=${id}`);
        setItem(response.data.drinks[0]);
      } catch (e) {
        console.error(e);
      }
    };
    getDrinks();
  }, [url]);

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cultured via-white to-blue-50 flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-blue-jeans border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const ingredients = [
    { name: item.strIngredient1, measure: item.strMeasure1 },
    { name: item.strIngredient2, measure: item.strMeasure2 },
    { name: item.strIngredient3, measure: item.strMeasure3 },
    { name: item.strIngredient4, measure: item.strMeasure4 },
    { name: item.strIngredient5, measure: item.strMeasure5 },
    { name: item.strIngredient6, measure: item.strMeasure6 },
    { name: item.strIngredient7, measure: item.strMeasure7 },
    { name: item.strIngredient8, measure: item.strMeasure8 },
  ].filter(ing => ing.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultured via-white to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
              >
                <MdClose className="text-2xl text-gray-600 group-hover:text-onyx transition-colors" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
              {/* Image Column */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={item.strDrinkThumb}
                    alt={item.strDrink}
                    className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <FavoriteButton item={item} />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-6">
                <Animated animationIn="bounceInRight" isVisible={true} animationInDuration={1000}>
                  <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-jeans to-metallic-seaweed">
                    {item.strDrink}
                  </h1>
                </Animated>

                <Animated
                  animationIn="bounceInRight"
                  isVisible={true}
                  animationInDuration={1000}
                  animationInDelay={100}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-onyx mb-4 flex items-center gap-2">
                      <span className="text-opera-mauve">🍹</span> Ingredients
                    </h2>
                    <ul className="space-y-2">
                      {ingredients.map((ing, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-jeans mt-1">•</span>
                          <span className="font-medium">{ing.name}</span>
                          {ing.measure && <span className="text-gray-500">- {ing.measure}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Animated>

                <Animated
                  animationIn="bounceInRight"
                  isVisible={true}
                  animationInDuration={1000}
                  animationInDelay={200}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-onyx mb-2">Category</h2>
                    <span className="inline-block bg-gradient-to-r from-opera-mauve to-blue-jeans text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {item.strCategory}
                    </span>
                  </div>
                </Animated>

                <Animated
                  animationIn="bounceInRight"
                  isVisible={true}
                  animationInDuration={1000}
                  animationInDelay={300}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-onyx mb-3">Instructions</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">{item.strInstructions}</p>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
}
