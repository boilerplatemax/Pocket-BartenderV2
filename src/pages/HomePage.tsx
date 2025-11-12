import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../resources/images/homedrinkimg.png';
import { Animated } from 'react-animated-css';

interface HomePageProps {
  resetSearch: () => void;
}

export default function HomePage({ resetSearch }: HomePageProps) {
  const navigate = useNavigate();

  const handleExplore = () => {
    resetSearch();
    navigate('/search');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultured via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-onyx leading-tight">
                  When life gives you{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-goldenrod to-orange-red">
                    lemons
                  </span>
                  ...
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-jeans to-metallic-seaweed">
                  Make a Cocktail!
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover hundreds of delicious cocktail recipes. Mix, shake, and create your perfect drink.
              </p>

              <button
                onClick={handleExplore}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-jeans to-metallic-seaweed text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-out overflow-hidden"
              >
                <span className="relative z-10">Explore Drinks</span>
                <svg
                  className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-metallic-seaweed to-blue-jeans opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Animated>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 space-y-4">
            <Animated
              animationIn="bounceInDown"
              isVisible={true}
              animationInDuration={1000}
              animationInDelay={200}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-opera-mauve to-blue-jeans rounded-3xl opacity-20 blur-2xl" />
                <img
                  src={homeImage}
                  alt="Cocktail illustration"
                  className="relative w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Animated>

            <p className="text-right text-sm text-gray-500 italic">
              Developed by Max Shapovalov
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
