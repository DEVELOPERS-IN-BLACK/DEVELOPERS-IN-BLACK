import React, { useState, useEffect } from 'react';
import { Shield, FileText, Users, Building, AlertTriangle, Copyright, ArrowLeft, Download, Copy } from 'lucide-react';
import { translations, type Language } from '../data/translations';
import FloatingCodeAnimation from '../components/FloatingCodeAnimation';

const LicensePage: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const licensePoints = [
    {
      icon: <Copyright className="w-8 h-8 text-green-400" />,
      title: "Attribution",
      description: "Any use must include clear attribution to Developers in Blacks (DIB)",
      details: "Original authorship and license text must be preserved in all distributions."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: "Modification", 
      description: "Modified versions (derivative works) are permitted",
      details: "Modifiers must clearly state that their work is based on the original Software by DIB."
    },
    {
      icon: <Building className="w-8 h-8 text-purple-400" />,
      title: "Commercial Use",
      description: "May be used within commercial products and services",
      details: "Direct commercial resale is prohibited, but integration into larger systems is permitted."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Third Parties",
      description: "Redistribution requires compliance with these conditions",
      details: "Violations require explicit written approval from Developers in Blacks."
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: "Author Information",
      description: "Must retain the name of Developers in Blacks (DIB)",
      details: "Original author attribution is required for any public or private use."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Disclaimer",
      description: "Software is provided 'as is' without warranty",
      details: "No liability for damages or issues arising from the use of the Software."
    }
  ];

  const licenseContent = `DIB License v1.0
Copyright (c) 2025 Developers in Blacks (DIB)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to use,
copy, modify, and distribute the Software, subject to the following conditions:

1. Attribution
   - Any use, modification, or distribution must include clear attribution to
     Developers in Blacks (DIB).
   - Original authorship and license text must be preserved.

2. Modification
   - Modified versions (derivative works) are permitted.
   - Modifiers must clearly state that their work is based on the original
     Software by DIB.

3. Commercial Use
   - The Software may be used within commercial products and services.
   - However, direct commercial resale of the Software itself, whether
     modified or unmodified, is strictly prohibited.
   - Integration of the Software into larger systems or products that are
     commercialized is permitted.

4. Third Parties
   - Redistribution or sublicensing of the Software that violates these
     conditions requires explicit written approval from Developers in Blacks.

5. Author Information
   - Any public or private use of this Software must retain the name of
     Developers in Blacks (DIB) as the original author.

6. Disclaimer
   - The Software is provided "as is", without warranty of any kind, express
     or implied, including but not limited to the warranties of merchantability,
     fitness for a particular purpose, and noninfringement.
   - In no event shall the authors or copyright holders be liable for any
     claim, damages, or other liability, whether in an action of contract, tort,
     or otherwise, arising from, out of, or in connection with the Software
     or the use or other dealings in the Software.`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadLicense = () => {
    const element = document.createElement('a');
    const file = new Blob([licenseContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'DIB_License_v1.0.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <FloatingCodeAnimation />
      
      {/* Grid overlay */}
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

      {/* Header Navigation */}
      <header className="relative z-50 bg-gray-950/98 backdrop-blur-xl border-b border-green-400/20 shadow-2xl shadow-green-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a 
                href="/" 
                className="mystery-hover flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-light">Back to Home</span>
              </a>
              <div className="h-6 w-px bg-gray-700"></div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="font-semibold text-xl">DIB License</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                className="mystery-hover flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300 border border-green-400/20 hover:border-green-400/50"
              >
                <span className="text-xs font-light text-green-400/90">{language === 'vi' ? 'EN' : 'VI'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full mb-8">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              DIB License v1.0
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              A community-focused open source license designed by developers, for developers
            </p>
          </div>

          {/* License Content Display */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400/70 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400/70 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400/70 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-green-400/80 text-sm font-mono">DIB_License_v1.0.txt</div>
                  <button
                    onClick={() => copyToClipboard(licenseContent)}
                    className="mystery-hover p-2 bg-gray-700/50 hover:bg-green-400/20 rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-green-400/50"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4 text-green-400" />
                  </button>
                  <button
                    onClick={downloadLicense}
                    className="mystery-hover p-2 bg-gray-700/50 hover:bg-blue-400/20 rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-blue-400/50"
                    title="Download license file"
                  >
                    <Download className="w-4 h-4 text-blue-400" />
                  </button>
                </div>
              </div>
              
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-gray-700/30">
                <pre className="font-mono text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                  {licenseContent}
                </pre>
              </div>
            </div>
          </div>

          {/* License Points Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Key Terms Explained
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {licensePoints.map((point, index) => (
                <div 
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-green-400 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 text-center mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {point.description}
                    </p>
                    <p className="text-sm text-green-400/80 text-center italic">
                      {point.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Summary */}
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/3 to-blue-400/3" />
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-green-400">
                Quick Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">✓</div>
                  <div className="text-gray-300 font-semibold mb-2">USE</div>
                  <div className="text-gray-400 text-sm">Free for personal & commercial projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">✓</div>
                  <div className="text-gray-300 font-semibold mb-2">MODIFY</div>
                  <div className="text-gray-400 text-sm">Create derivative works with attribution</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">✓</div>
                  <div className="text-gray-300 font-semibold mb-2">DISTRIBUTE</div>
                  <div className="text-gray-400 text-sm">Share with proper credit to DIB</div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-700/50">
                <p className="text-gray-400 italic mb-4">
                  "Built by the community, for the community. All projects are 100% open source and free forever."
                </p>
                <div className="text-green-400 font-semibold">
                  — Developers in Black Community
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LicensePage;