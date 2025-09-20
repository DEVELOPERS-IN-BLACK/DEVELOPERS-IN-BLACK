import React from 'react';
import { Translations } from '../data/translations';
import { ValueItem } from '../data/valuesData';

interface ValuesSectionProps {
  t: Translations;
  values: ValueItem[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ t, values }) => {
  return (
    <section id="values" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            {t.values.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            {t.values.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group relative"
            >
              <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="relative">
                  {value.icon}
                  <div className="absolute -inset-4 border-2 border-transparent group-hover:border-gray-700/50 rounded-full transition-all duration-500" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>
              <p className="text-sm text-green-400 font-medium italic">
                "{value.detail}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5" />
            <div className="relative z-10">
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-gray-300 mb-6 leading-relaxed">
                "{t.values.quote}"
              </blockquote>
              <div className="text-green-400 font-semibold text-base sm:text-lg">
                — Developers in Black Community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;