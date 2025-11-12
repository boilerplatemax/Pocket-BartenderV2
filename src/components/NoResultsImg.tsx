import React from 'react';
import lost from '../resources/images/lost.png';

export default function NoResultsImg() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-opera-mauve to-blue-jeans rounded-full opacity-20 blur-3xl" />
          <img
            src={lost}
            alt="No results found"
            className="relative w-64 h-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-onyx">Nothing here...</h1>
          <h2 className="text-2xl text-gray-500">No results found</h2>
          <p className="text-gray-600 mt-4">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      </div>
    </div>
  );
}
