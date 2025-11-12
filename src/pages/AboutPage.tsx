import React from 'react';
import aboutImage from '../resources/images/aboutimg.png';
import { Animated } from 'react-animated-css';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

export default function AboutPage() {
  const features = [
    'Modern React with TypeScript',
    'Tailwind CSS for styling',
    'React Hooks (useState, useEffect, useContext, useNavigate)',
    'RESTful API integration with Axios',
    'Responsive mobile-first design',
    'Local storage for favorites persistence',
    'Smooth animations and transitions',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultured via-white to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-jeans to-metallic-seaweed rounded-3xl opacity-20 blur-2xl" />
                <img
                  src={aboutImage}
                  alt="Developer workspace"
                  className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* About Section */}
              <div>
                <h2 className="text-4xl font-bold text-onyx mb-4 flex items-center gap-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-jeans to-metallic-seaweed">
                    About
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This React app uses the{' '}
                  <a
                    href="https://www.thecocktaildb.com/api.php"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-jeans hover:text-metallic-seaweed font-semibold inline-flex items-center gap-1 transition-colors duration-200"
                  >
                    CocktailDB API
                    <FaExternalLinkAlt className="text-xs" />
                  </a>{' '}
                  to display a wide variety of drinks along with their ingredients and recipes. Explore
                  hundreds of cocktails and save your favorites!
                </p>
              </div>

              {/* Features Section */}
              <div>
                <h2 className="text-3xl font-bold text-onyx mb-4 flex items-center gap-2">
                  <span className="text-opera-mauve">✨</span> Features
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-jeans to-metallic-seaweed flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developer Section */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-onyx">Developed By Max Shapovalov</h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/boilerplatemax"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <FaGithub className="text-xl" />
                    <span className="font-semibold">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/max-shapovalov-2a93191b8/?originalSubdomain=ca"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <FaLinkedin className="text-xl" />
                    <span className="font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
}
