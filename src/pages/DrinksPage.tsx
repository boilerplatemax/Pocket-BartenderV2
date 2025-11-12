import React, { useContext } from 'react';
import ItemList from '../components/ItemList';
import SearchMenu from '../components/SearchMenu';
import { AppContext } from '../App';
import { Drink } from '../types';

interface DrinksPageProps {
  items: Drink[];
}

export default function DrinksPage({ items }: DrinksPageProps) {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { loading } = context;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultured via-white to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <SearchMenu items={items} />
          </div>

          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-blue-jeans border-t-transparent rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-opera-mauve border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
                  </div>
                </div>
              </div>
            ) : (
              <ItemList items={items} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
