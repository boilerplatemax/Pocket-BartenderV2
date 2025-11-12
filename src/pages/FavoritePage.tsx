import React from 'react';
import FavoriteItem from '../components/FavoriteItem';
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';

interface FavoritePageProps {
  favoriteItemIds: string[];
}

export default function FavoritePage({ favoriteItemIds }: FavoritePageProps) {
  const navigate = useNavigate();

  if (favoriteItemIds.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cultured via-white to-blue-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
            {/* Heart Icon */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-opera-mauve to-blue-jeans p-6 rounded-full">
                <MdFavoriteBorder className="text-white text-6xl" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-onyx">
              No Favorites Yet
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Start exploring our cocktail collection and save your favorites by clicking the heart icon on any drink!
            </p>

            {/* CTA Button */}
            <button
              onClick={() => navigate('/search')}
              className="w-full bg-gradient-to-r from-blue-jeans to-metallic-seaweed text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-out"
            >
              Explore Drinks
            </button>

            {/* Or try random */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-3">or</p>
              <button
                onClick={() => {
                  navigate('/search');
                  // Trigger random search after navigation
                  setTimeout(() => {
                    const randomBtn = document.querySelector('[data-random-btn]') as HTMLButtonElement;
                    if (randomBtn) randomBtn.click();
                  }, 100);
                }}
                className="text-opera-mauve hover:text-blue-jeans font-semibold underline decoration-2 underline-offset-4 transition-colors duration-200"
              >
                Surprise me with a random drink
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultured via-white to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-onyx mb-3 flex items-center gap-3">
            <span className="text-opera-mauve">♥</span> My Favorites
          </h2>
          <p className="text-gray-600 text-lg">
            You have {favoriteItemIds.length} favorite {favoriteItemIds.length === 1 ? 'drink' : 'drinks'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteItemIds.map((id) => (
            <FavoriteItem key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
