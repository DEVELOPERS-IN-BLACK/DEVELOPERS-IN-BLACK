import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, Zap, Github, Shield, Target, Languages } from 'lucide-react';
import { AudioManager } from './utils/audioEffects';
import { useScrollAndMouse } from './hooks/useScrollAndMouse';
import { translations, type Language } from './data/translations';
import { getProjectsData } from './data/projectsData';
import { getValuesData } from './data/valuesData';
import FloatingCodeAnimation from './components/FloatingCodeAnimation';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ValuesSection from './components/ValuesSection';
import JoinSection from './components/JoinSection';
import LicenseSection from './components/LicenseSection';


const DevelopersInBlack: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('en');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showHeaderLogo, setShowHeaderLogo] = useState<boolean>(false);
  const heroLogoRef = React.useRef<HTMLDivElement>(null);
  
  // Use custom hook for scroll and mouse tracking
  const { scrollY } = useScrollAndMouse();

  useEffect(() => {
    // Enable audio on user interaction and start ambient sounds
    AudioManager.enableAudio();
    AudioManager.startAmbientSounds();
    
    return () => {
      // No cleanup needed for AudioManager as it handles its own state
    };
  }, []);

  // Clock update effect with digital "tít" sound
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      AudioManager.playTickSound();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Track hero logo visibility using Intersection Observer
  useEffect(() => {
    if (!heroLogoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Show header logo when hero logo is NOT intersecting (out of view)
        setShowHeaderLogo(!entry.isIntersecting);
      },
      {
        // Trigger when only 10% of the hero logo is visible
        threshold: 0.1,
        // Add some margin to trigger slightly before completely out of view
        rootMargin: '0px 0px -20px 0px'
      }
    );

    observer.observe(heroLogoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);


  const t = translations[language];

  const projects = getProjectsData(t);
  const values = getValuesData(t);

  const stats = [
    { number: "100%", label: t.stats.opensource, icon: <Shield className="w-6 h-6" /> },
    { number: language === 'vi' ? "0₫" : "$0", label: t.stats.cost, icon: <Heart className="w-6 h-6" /> },
    { number: "∞", label: t.stats.potential, icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: t.stats.commitment, icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Digital Clock */}
      <div className="fixed bottom-2 left-2 sm:bottom-4 sm:left-4 z-[9999] bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg px-2 sm:px-3 py-1 sm:py-2 font-mono text-green-400 text-xs sm:text-sm md:text-base shadow-lg shadow-green-400/20">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="tracking-wider">
            {currentTime.toLocaleTimeString('vi-VN', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </span>
        </div>
      </div>
      {/* Simplified Matrix Effect */}
      <div className="fixed inset-0 opacity-2 sm:opacity-3 pointer-events-none z-0">
        <div className="matrix-rain">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="matrix-column absolute text-green-400/15 sm:text-green-400/20 font-mono text-xs leading-none will-change-transform"
              style={{
                left: `${(i * 16.67)}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: '15s'
              }}
            >
              {[...Array(6)].map((_, j) => (
                <div key={j} className="opacity-20 sm:opacity-30">
                  {j % 2 === 0 ? '0' : '1'}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      
      {/* Floating Random Code Elements */}
      <FloatingCodeAnimation />
      
      {/* Hacker grid overlay */}
      <div className="fixed inset-0 opacity-3 sm:opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,0,0.05) 1px, transparent 1px),
            linear-gradient(rgba(0,255,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'pulse 4s infinite'
        }} />
      </div>


      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-gray-950/98 backdrop-blur-xl border-b border-green-400/20 shadow-2xl shadow-green-400/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className={`relative transition-all duration-700 ease-in-out ${
                showHeaderLogo 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-75 -translate-y-4'
              }`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-2xl border-2 border-green-400/60 bg-gradient-to-br from-white/10 to-gray-400/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Developers in Black Logo" 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div className="absolute -inset-2 border border-green-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}} />
                <div className="absolute -inset-4 border border-green-400/20 rounded-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
              </div>
              <div className={`hidden sm:block transition-all duration-700 ease-in-out ${
                showHeaderLogo 
                  ? 'translate-x-0' 
                  : '-translate-x-16'
              }`}>
                <h1 className="text-lg sm:text-xl font-bold tracking-wider bg-gradient-to-r text-white bg-clip-text text-transparent">{t.hero.title}</h1>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xs bg-gradient-to-r from-green-600 to-green-400 px-2 sm:px-3 py-1 rounded-full shadow-lg shadow-green-400/20">OPEN SOURCE</span>
                  <span className="text-xs text-amber-400/80 font-light">EST. 2025</span>
                  <div className="w-1 h-1 bg-amber-400/60 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              <a href="#home" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-base lg:text-lg">
                <span className="relative">
                  {t.nav.home}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              <a href="#projects" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-base lg:text-lg">
                <span className="relative">
                  {t.nav.projects}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              <a href="#values" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-base lg:text-lg">
                <span className="relative">
                  {t.nav.values}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              <a href="#join" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-base lg:text-lg">
                <span className="relative">
                  {t.nav.join}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              <a href="#license" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-base lg:text-lg">
                <span className="relative">
                  {t.nav.license}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                className="mystery-hover flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300 border border-green-400/20 hover:border-green-400/50 shadow-lg shadow-green-400/5 backdrop-blur-md"
                title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
              >
                <Languages className="w-4 h-4 text-green-400/70" />
                <span className="text-xs sm:text-sm font-light text-green-400/90 tracking-wider">{language === 'vi' ? 'EN' : 'VI'}</span>
              </button>
            </div>

            <button 
              className="md:hidden relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a href="#home" className="block px-4 py-3 hover:bg-gray-800/50 rounded-lg transition-colors text-base font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
              <a href="#projects" className="block px-4 py-3 hover:bg-gray-800/50 rounded-lg transition-colors text-base font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
              <a href="#values" className="block px-4 py-3 hover:bg-gray-800/50 rounded-lg transition-colors text-base font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.values}</a>
              <a href="#join" className="block px-4 py-3 hover:bg-gray-800/50 rounded-lg transition-colors text-base font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.join}</a>
              <a href="#license" className="block px-4 py-3 hover:bg-gray-800/50 rounded-lg transition-colors text-base font-light" onClick={() => setIsMenuOpen(false)}>{t.nav.license}</a>
              
              {/* Mobile Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors w-full text-base font-light"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm">{language === 'vi' ? 'English' : 'Tiếng Việt'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection t={t} logoRef={heroLogoRef} />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group transform hover:scale-110 transition-all duration-500"
              >
                <div className="mb-4 flex justify-center text-green-400 group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-green-300 transition-all duration-500">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection t={t} projects={projects} />

      {/* Values Section */}
      <ValuesSection t={t} values={values} />

      {/* Join Section */}
      <JoinSection t={t} />

      {/* License Section */}
      <LicenseSection />

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-full shadow-2xl border-2 border-green-400/60 bg-gradient-to-br from-white/10 to-gray-400/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Developers in Black Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute -inset-2 border border-green-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">{t.hero.title}</span>
                <div className="text-sm text-gray-400">Open Source Community</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
              {t.footer.description}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 mb-8">
              <a href="https://github.com/DEVELOPERS-IN-BLACK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-base sm:text-lg">GitHub</span>
              </a>
              <a href="https://discord.gg/Upnc6w6p" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 group">
                <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-base sm:text-lg">Discord</span>
              </a>
            </div>
            
            <div className="border-t border-gray-800/50 pt-6 sm:pt-8 px-4">
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                {t.footer.tagline.split('❤️')[0]}<Heart className="w-4 h-4 text-red-400 inline mx-1" />{t.footer.tagline.split('❤️')[1]}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevelopersInBlack;