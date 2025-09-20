import React, { useState } from 'react';
import { Shield, FileText, Users, Building, AlertTriangle, Copyright, ChevronDown, ChevronUp, Copy, Download } from 'lucide-react';

const LicenseSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(licenseContent);
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

  return (
    <section id="license" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            DIB License v1.0
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A community-focused open source license designed by developers, for developers
          </p>
          
          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mystery-hover group mt-8 px-8 py-4 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-green-400/30 text-gray-100 font-light tracking-wide rounded-lg hover:bg-gray-800/70 hover:border-green-400/60 hover:text-green-400/90 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl shadow-green-400/10 backdrop-blur-lg mx-auto"
          >
            <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>{isExpanded ? 'View Summary' : 'View Full License'}</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* License Header Card */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400/70 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400/70 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400/70 rounded-full"></div>
              </div>
              <div className="text-green-400/80 text-sm font-mono">dib_license.txt</div>
            </div>
            
            <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-gray-700/30">
              <div className="font-mono text-green-400 mb-4 text-lg md:text-xl">
                DIB License v1.0
              </div>
              <div className="font-mono text-gray-300 text-base md:text-lg leading-relaxed">
                Copyright (c) 2025 <span className="text-green-400">Developers in Blacks (DIB)</span>
              </div>
              <div className="mt-6 text-gray-400 leading-relaxed">
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to use,
                copy, modify, and distribute the Software, subject to the following conditions:
              </div>
            </div>
          </div>
        </div>

        {/* Conditional Content - License Points or Full License */}
        {isExpanded ? (
          /* Full License Display */
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
                    onClick={copyToClipboard}
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
        ) : (
          /* License Points Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
        )}

        {/* Quick Summary */}
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/3 to-blue-400/3" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400">
              Quick Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
            
            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <p className="text-gray-400 italic">
                "Built by the community, for the community. All projects are 100% open source and free forever."
              </p>
              <div className="text-green-400 font-semibold mt-4">
                — Developers in Black Community
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mystery-hover group px-8 py-4 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-green-400/30 text-gray-100 font-light tracking-wide rounded-lg hover:bg-gray-800/70 hover:border-green-400/60 hover:text-green-400/90 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl shadow-green-400/10 backdrop-blur-lg"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>View Full License</span>
            </a>
            <button 
              onClick={() => navigator.clipboard.writeText('https://github.com/DEVELOPERS-IN-BLACK/LICENSE')}
              className="mystery-hover group px-8 py-4 bg-gradient-to-br from-green-400/5 to-green-600/5 border-2 border-green-400/50 text-green-400 font-light tracking-wide rounded-lg hover:bg-green-400/10 hover:border-green-400 hover:text-green-300 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 backdrop-blur-lg shadow-2xl shadow-green-400/20"
            >
              <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Copy License URL</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;