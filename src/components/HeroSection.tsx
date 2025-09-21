import React from 'react';
import { Github, Coffee } from 'lucide-react';
import { Translations } from '../data/translations';

interface HeroSectionProps {
  t: Translations;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <div className="relative inline-flex items-center justify-center w-56 h-56 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/15 via-white/8 to-green-600/15 rounded-full animate-pulse" />
            <div className="relative w-44 h-44 rounded-full shadow-2xl border-4 border-green-400/60 bg-gradient-to-br from-white/10 to-gray-400/10 backdrop-blur-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Developers in Black Logo" 
                className="w-45 h-45 object-contain"
              />
            </div>
            {/* Radar sweep effect */}
            <div className="absolute -inset-8 border-2 border-green-400/40 rounded-full animate-spin" style={{animationDuration: '8s'}} />
            <div className="absolute -inset-4 border border-green-400/30 rounded-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}} />
            <div className="absolute -inset-12 border border-white/10 rounded-full animate-spin" style={{animationDuration: '16s'}} />
            
            {/* Radar sweep line */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div 
                className="absolute top-1/2 left-1/2 w-px h-1/2 bg-gradient-to-t from-green-400/80 to-transparent origin-bottom transform -translate-x-px animate-spin"
                style={{
                  animationDuration: '3s',
                  transformOrigin: 'bottom center'
                }}
              />
            </div>
            
            {/* Radar ping effect - synced with clock */}
            <div className="absolute inset-0 rounded-full">
              <div 
                className="absolute inset-0 rounded-full border-2 border-green-400/60 animate-ping" 
                style={{
                  animationDuration: '1s',
                  animationIterationCount: 'infinite'
                }} 
              />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
            
            {/* Floating code elements */}
            <div className="absolute -top-16 -left-16 text-green-400/20 text-xs font-mono animate-pulse">
              {'{ class: "Gentleman" }'}
            </div>
            <div className="absolute -bottom-16 -right-16 text-green-400/20 text-xs font-mono animate-pulse" style={{animationDelay: '0.5s'}}>
              {'console.log("DIB")'}
            </div>
            <div className="absolute -top-8 right-16 text-green-400/20 text-xs font-mono animate-pulse" style={{animationDelay: '1s'}}>
              {'=> true'}
            </div>
            <div className="absolute -bottom-8 left-16 text-green-400/20 text-xs font-mono animate-pulse" style={{animationDelay: '1.5s'}}>
              {'0x1337'}
            </div>
          </div>
        </div>
        
        <div className="space-y-8 mb-16">
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-archivo-black mb-4 text-white tracking-wider">
              DEVELOPERS
            </h2>
            <div className="absolute -top-6 -left-6 text-green-400/30 text-sm font-mono animate-pulse flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
              <span>// class: Gentleman</span>
            </div>
          </div>
          <div className="relative">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-archivo-black mb-8 text-white tracking-wider">
              IN BLACK
            </h3>
            <div className="absolute -bottom-6 -right-6 text-green-400/30 text-sm font-mono animate-pulse flex items-center space-x-2">
              <span>// luxury_tech.init()</span>
              <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 leading-relaxed mb-2">
                {t.hero.subtitle}
              </p>
              <div className="text-green-400/70 text-sm font-mono tracking-wider">
                // open_source_organization.init()
              </div>
            </div>
            
            <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent mx-auto" />
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-green-400/20 border-t-amber-400/30 rounded-2xl p-10 shadow-2xl shadow-green-400/10 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-amber-400/50 to-green-400/50"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400/70 rounded-full animate-pulse"></div>
                  <div className="text-green-400/80 text-sm font-mono tracking-wider">executive_brief.md</div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/70 shadow-sm shadow-red-400/30"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/70 shadow-sm shadow-amber-400/30"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/70 shadow-sm shadow-green-400/30"></div>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wide">
                {t.hero.description}
              </p>
              <blockquote className="border-l-2 sm:border-l-3 border-gradient-to-b from-green-400/60 via-amber-400/40 to-green-400/60 pl-4 sm:pl-6 text-green-400/95 italic font-light text-lg sm:text-xl md:text-2xl relative">
                <div className="absolute -left-0.5 top-0 w-1 h-full bg-gradient-to-b from-green-400/60 via-amber-400/40 to-green-400/60 rounded-full"></div>
                "{t.hero.quote}"
                <div className="text-amber-400/60 text-sm font-mono mt-2 not-italic">// core_philosophy.txt</div>
              </blockquote>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["Web", "Mobile", "Hardware", "AI", "Education", "IoT"].map((tech, index) => (
              <span 
                key={tech}
                className="mystery-hover bg-gray-900/30 backdrop-blur-md px-6 py-3 rounded-lg border border-green-400/20 text-sm font-light text-gray-200 hover:border-green-400/50 hover:bg-gray-800/40 hover:text-green-400/90 transition-all duration-500 shadow-lg shadow-green-400/5 tracking-wide"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16">
          <button className="mystery-hover group px-10 py-4 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-green-400/30 text-gray-100 font-light tracking-wide rounded-lg hover:bg-gray-800/70 hover:border-green-400/60 hover:text-green-400/90 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl shadow-green-400/10 backdrop-blur-lg">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>{t.hero.exploreBtn}</span>
            <div className="w-1 h-1 bg-green-400/50 rounded-full group-hover:bg-green-400 transition-colors duration-300"></div>
          </button>
          <button className="mystery-hover group px-10 py-4 bg-gradient-to-br from-green-400/5 to-green-600/5 border-2 border-green-400/50 text-green-400 font-light tracking-wide rounded-lg hover:bg-green-400/10 hover:border-green-400 hover:text-green-300 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 backdrop-blur-lg shadow-2xl shadow-green-400/20">
            <Coffee className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>{t.hero.joinBtn}</span>
            <div className="w-1 h-1 bg-green-400/50 rounded-full group-hover:bg-green-300 transition-colors duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;