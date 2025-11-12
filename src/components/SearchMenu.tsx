import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { MdSearch as Search, MdClose, MdShuffle, MdFilterList, MdClear } from 'react-icons/md';
import { Animated } from 'react-animated-css';
import { Drink } from '../types';

interface SearchMenuProps {
  items: Drink[] | null;
}

export default function SearchMenu({ items }: SearchMenuProps) {
  const context = useContext(AppContext);
  const [displaySearchMenu, setDisplaySearchMenu] = useState(false);

  // State for pending filter selections
  const [pendingSearch, setPendingSearch] = useState('');
  const [pendingAlcohol, setPendingAlcohol] = useState('');
  const [pendingJuice, setPendingJuice] = useState('');
  const [pendingCategory, setPendingCategory] = useState('');

  if (!context) {
    return null;
  }

  const { searchHandler, filterHandler, listHandler, randomSearchHandler } = context;

  function displaySearchMenuHandler() {
    setDisplaySearchMenu((prev) => !prev);
  }

  // Apply all selected filters
  function applyFilters() {
    // Apply in priority order: search > category > filters
    if (pendingSearch.trim()) {
      searchHandler(pendingSearch);
    } else if (pendingCategory) {
      listHandler(pendingCategory);
    } else if (pendingAlcohol) {
      filterHandler(pendingAlcohol);
    } else if (pendingJuice) {
      filterHandler(pendingJuice);
    }
  }

  // Clear all filters
  function clearFilters() {
    setPendingSearch('');
    setPendingAlcohol('');
    setPendingJuice('');
    setPendingCategory('');
    searchHandler(''); // Reset to default
  }

  const resultsCount = items?.length || 0;
  const hasFilters = pendingSearch || pendingAlcohol || pendingJuice || pendingCategory;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6 sticky top-24">
          <div>
            <h4 className="text-2xl font-bold text-onyx mb-2 flex items-center gap-2">
              <Search className="text-blue-jeans" />
              Search & Filters
            </h4>
            <p className="text-sm text-gray-600">
              {resultsCount} {resultsCount === 1 ? 'Result' : 'Results'}
            </p>
          </div>

          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search drinks..."
                value={pendingSearch}
                onChange={(e) => setPendingSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && applyFilters()}
                className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Alcohol Filter */}
            <select
              value={pendingAlcohol}
              onChange={(e) => setPendingAlcohol(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all bg-white cursor-pointer"
            >
              <option value="">Sort by Alcohol Content</option>
              <option value="vodka">Vodka</option>
              <option value="gin">Gin</option>
              <option value="rum">Rum</option>
            </select>

            {/* Juice Filter */}
            <select
              value={pendingJuice}
              onChange={(e) => setPendingJuice(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all bg-white cursor-pointer"
            >
              <option value="">Filter by Juice</option>
              <option value="pineapple_juice">Pineapple Juice</option>
              <option value="orange_juice">Orange Juice</option>
              <option value="lemon_juice">Lemon Juice</option>
              <option value="lime_juice">Lime Juice</option>
            </select>

            {/* Category Filter */}
            <select
              value={pendingCategory}
              onChange={(e) => setPendingCategory(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all bg-white cursor-pointer"
            >
              <option value="">Filter by Category</option>
              <option value="Cocktail">Cocktails</option>
              <option value="Shake">Shake</option>
              <option value="Ordinary_drink">Classics</option>
              <option value="Coffee_/_tea">Brews</option>
              <option value="Homemade_Liqueur">Homemade Liqueur</option>
              <option value="Shot">Shot</option>
            </select>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={applyFilters}
                disabled={!hasFilters}
                className="w-full bg-gradient-to-r from-blue-jeans to-metallic-seaweed text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <MdFilterList className="text-xl" />
                Apply Filters
              </button>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MdClear className="text-xl" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4" />

            {/* Random Button */}
            <button
              data-random-btn
              onClick={randomSearchHandler}
              className="w-full bg-gradient-to-r from-opera-mauve to-blue-jeans text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MdShuffle className="text-xl" />
              Surprise Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        {displaySearchMenu ? (
          <div className="fixed inset-0 z-50 lg:relative">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={displaySearchMenuHandler}
            />
            <Animated animationIn="slideInLeft" isVisible={true} animationInDuration={600}>
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl p-6 space-y-6 overflow-y-auto">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold text-onyx flex items-center gap-2">
                    <Search className="text-blue-jeans" />
                    Filters
                  </h4>
                  <button
                    onClick={displaySearchMenuHandler}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <MdClose className="text-2xl text-gray-600" />
                  </button>
                </div>

                <p className="text-sm text-gray-600">
                  {resultsCount} {resultsCount === 1 ? 'Result' : 'Results'}
                </p>

                <div className="space-y-4">
                  {/* Search Input */}
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search drinks..."
                      value={pendingSearch}
                      onChange={(e) => setPendingSearch(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && applyFilters()}
                      className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Alcohol Filter */}
                  <select
                    value={pendingAlcohol}
                    onChange={(e) => setPendingAlcohol(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all bg-white cursor-pointer"
                  >
                    <option value="">Sort by Alcohol Content</option>
                    <option value="vodka">Vodka</option>
                    <option value="gin">Gin</option>
                    <option value="rum">Rum</option>
                  </select>

                  {/* Juice Filter */}
                  <select
                    value={pendingJuice}
                    onChange={(e) => setPendingJuice(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all bg-white cursor-pointer"
                  >
                    <option value="">Filter by Juice</option>
                    <option value="pineapple_juice">Pineapple Juice</option>
                    <option value="orange_juice">Orange Juice</option>
                    <option value="lemon_juice">Lemon Juice</option>
                    <option value="lime_juice">Lime Juice</option>
                  </select>

                  {/* Category Filter */}
                  <select
                    value={pendingCategory}
                    onChange={(e) => setPendingCategory(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-jeans focus:outline-none focus:ring-2 focus:ring-blue-jeans/20 transition-all bg-white cursor-pointer"
                  >
                    <option value="">Filter by Category</option>
                    <option value="Cocktail">Cocktails</option>
                    <option value="Shake">Shake</option>
                    <option value="Ordinary_drink">Classics</option>
                    <option value="Coffee_/_tea">Brews</option>
                    <option value="Homemade_Liqueur">Homemade Liqueur</option>
                    <option value="Shot">Shot</option>
                  </select>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => {
                        applyFilters();
                        displaySearchMenuHandler();
                      }}
                      disabled={!hasFilters}
                      className="w-full bg-gradient-to-r from-blue-jeans to-metallic-seaweed text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MdFilterList className="text-xl" />
                      Apply Filters
                    </button>

                    {hasFilters && (
                      <button
                        onClick={clearFilters}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <MdClear className="text-xl" />
                        Clear Filters
                      </button>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-4" />

                  {/* Random Button */}
                  <button
                    data-random-btn
                    onClick={() => {
                      randomSearchHandler();
                      displaySearchMenuHandler();
                    }}
                    className="w-full bg-gradient-to-r from-opera-mauve to-blue-jeans text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <MdShuffle className="text-xl" />
                    Surprise Me
                  </button>
                </div>
              </div>
            </Animated>
          </div>
        ) : (
          <div className="mb-6">
            <button
              className="w-full bg-gradient-to-r from-blue-jeans to-metallic-seaweed text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2"
              onClick={displaySearchMenuHandler}
            >
              Search & Filters
              <Search className="text-xl" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
