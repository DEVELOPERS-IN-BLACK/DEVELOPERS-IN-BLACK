import React, { useState } from 'react';
import { Shield, FileText, Copy, Download, Check, Maximize, Minimize } from 'lucide-react';

const LICENSE_TEXT = `DIB License v1.0
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
     or the use or other dealings in the Software.
`;

const LicenseSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(LICENSE_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset sau 2s
    } catch (err) {
      console.error("❌ Copy failed:", err);
    }
  };

  const downloadLicense = () => {
    const blob = new Blob([LICENSE_TEXT], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'DIB_License_v1.0.txt';
    link.click();
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full mb-6">
          <Shield className="w-12 h-12 text-green-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          DIB License v1.0
        </h2>
        <p className="text-gray-400 mb-10">A community-focused open source license</p>

        {/* Toggle Button (giữ style cũ neon) */}
        {/* License Box (style cũ neon) */}
        <div className="mt-8 bg-gray-800/30 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5" />
          <div className="relative z-10 text-left">
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="mystery-hover p-2 rounded-lg bg-gray-900/40 hover:bg-green-400/20 border border-gray-700/40 hover:border-green-400/50 transition-all duration-300"
                title="Maximize/Minimize"
              >
                {expanded ? <Minimize size={18} className="text-red-400" /> : <Maximize size={18} className="text-red-400" />}
              </button>
              <button
                onClick={copyToClipboard}
                className="mystery-hover p-2 rounded-lg bg-gray-900/40 hover:bg-green-400/20 border border-gray-700/40 hover:border-green-400/50 transition-all duration-300"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check size={18} className="text-yellow-400" />
                ) : (
                  <Copy size={18} className="text-yellow-400" />
                )}
              </button>
              <button
                onClick={downloadLicense}
                className="mystery-hover p-2 rounded-lg bg-gray-900/40 hover:bg-blue-400/20 border border-gray-700/40 hover:border-blue-400/50 transition-all duration-300"
                title="Download license file"
              >
                <Download size={18} className="text-green-400" />
              </button>
            </div>
            <pre className="mt-4 whitespace-pre-wrap text-sm md:text-base font-mono text-gray-300 leading-relaxed max-h-98 overflow-y-auto">
              {expanded ? LICENSE_TEXT : LICENSE_TEXT.slice(0, 220) + '...'}
            </pre>
          </div>
        </div>

        {/* Link đến LICENSE file */}
        <div className="mt-8">
          <a
            href="/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="mystery-hover px-6 py-3 rounded-xl border border-green-400/30 hover:border-green-400/60 bg-gray-900/40 hover:bg-gray-800/60 inline-flex items-center space-x-2 transition-all duration-300"
          >
            <FileText size={18} className="text-green-400" />
            <span className="text-gray-200">View LICENSE file</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
