import React from 'react';
import { Github, Users } from 'lucide-react';
import { Translations } from '../data/translations';

interface JoinSectionProps {
  t: Translations;
}

const JoinSection: React.FC<JoinSectionProps> = ({ t }) => {
  return (
    <section id="join" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            {t.join.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            {t.join.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-gray-800/30 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 flex items-center space-x-3 group-hover:text-green-400 transition-colors">
                  <Github className="w-8 h-8" />
                  <span>{t.join.developers.title}</span>
                </h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  {t.join.developers.description}
                </p>
                <a href="https://github.com/DEVELOPERS-IN-BLACK" target="_blank" rel="noopener noreferrer" className="block w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-700/70 hover:bg-green-400 text-white hover:text-black rounded-xl transition-all duration-500 font-semibold border border-gray-600/50 hover:border-green-400 transform hover:scale-105 text-center text-sm sm:text-base">
                  {t.join.developers.button}
                </a>
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 flex items-center space-x-3 group-hover:text-blue-400 transition-colors">
                  <Users className="w-8 h-8" />
                  <span>{t.join.community.title}</span>
                </h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  {t.join.community.description}
                </p>
                <a href="https://discord.gg/Upnc6w6p" target="_blank" rel="noopener noreferrer" className="block w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-700/70 hover:bg-blue-400 text-white hover:text-black rounded-xl transition-all duration-500 font-semibold border border-gray-600/50 hover:border-blue-400 transform hover:scale-105 text-center text-sm sm:text-base">
                  {t.join.community.button}
                </a>
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <p className="text-gray-400 text-base sm:text-lg mb-4">
              <span className="text-green-400">{t.join.contact}</span>
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
              {t.join.disclaimer}
              <span className="block mt-2 text-green-400 font-medium">
                "{t.join.tagline}"
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;