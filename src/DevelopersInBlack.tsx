import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Users, Heart, Zap, ChevronDown, Github, Globe, Cpu, Smartphone, Wifi, Brain, BookOpen, Coffee, Shield, Target, Layers, Terminal, Languages } from 'lucide-react';
import { AudioManager } from './utils/audioEffects';
import { useScrollAndMouse } from './hooks/useScrollAndMouse';
import { translations, type Language } from './data/translations';

interface ProjectField {
  title: string;
  description: string;
}

interface ValueItem {
  title: string;
  description: string;
  detail: string;
}

interface JoinSection {
  title: string;
  description: string;
  button: string;
}

interface Translations {
  nav: {
    home: string;
    projects: string;
    values: string;
    join: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    quote: string;
    exploreBtn: string;
    joinBtn: string;
  };
  stats: {
    opensource: string;
    cost: string;
    potential: string;
    commitment: string;
  };
  projects: {
    title: string;
    description: string;
    fields: {
      web: ProjectField;
      mobile: ProjectField;
      hardware: ProjectField;
      ai: ProjectField;
      education: ProjectField;
      tools: ProjectField;
    };
  };
  values: {
    title: string;
    description: string;
    passion: ValueItem;
    community: ValueItem;
    opensource: ValueItem;
    quote: string;
    author: string;
  };
  join: {
    title: string;
    description: string;
    developers: JoinSection;
    community: JoinSection;
    contact: string;
    disclaimer: string;
    tagline: string;
  };
  footer: {
    description: string;
    tagline: string;
  };
}

const DevelopersInBlack: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('vi');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Use custom hook for scroll and mouse tracking
  const { scrollY, mousePosition } = useScrollAndMouse();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Play startup sound on first load
    const playStartupSound = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const oscillator3 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        oscillator3.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Triple harmony for "set" sound
        oscillator1.frequency.setValueAtTime(220, audioContext.currentTime);
        oscillator2.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator3.frequency.setValueAtTime(880, audioContext.currentTime);
        
        oscillator1.type = 'sawtooth';
        oscillator2.type = 'sawtooth';
        oscillator3.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
        
        oscillator1.start(audioContext.currentTime);
        oscillator2.start(audioContext.currentTime);
        oscillator3.start(audioContext.currentTime);
        oscillator1.stop(audioContext.currentTime + 0.3);
        oscillator2.stop(audioContext.currentTime + 0.3);
        oscillator3.stop(audioContext.currentTime + 0.3);
      } catch (e) {
        // Silent fail if audio context fails
      }
    };
    
    // Electric glitch sound
    const playElectricGlitch = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filterNode = audioContext.createBiquadFilter();
        
        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(120, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1800, audioContext.currentTime + 0.15);
        
        filterNode.type = 'highpass';
        filterNode.frequency.setValueAtTime(100, audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
      } catch (e) {
        // Silent fail
      }
    };

    // Boom explosion sound
    const playBoomSound = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Oscillator chính tạo boom trầm
        const oscBoom = audioContext.createOscillator();
        const gainBoom = audioContext.createGain();
        oscBoom.connect(gainBoom);
        gainBoom.connect(audioContext.destination);

        oscBoom.type = 'sine';
        oscBoom.frequency.setValueAtTime(150, audioContext.currentTime); // Bắt đầu cao để mạnh
        oscBoom.frequency.exponentialRampToValueAtTime(30, audioContext.currentTime + 0.6); // Trầm dần

        gainBoom.gain.setValueAtTime(0.15, audioContext.currentTime); // cú đánh mạnh
        gainBoom.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.6);

        // Thêm tiếng crack/nổ nhanh để giật mình
        const oscCrack = audioContext.createOscillator();
        const gainCrack = audioContext.createGain();
        oscCrack.connect(gainCrack);
        gainCrack.connect(audioContext.destination);

        oscCrack.type = 'triangle';
        oscCrack.frequency.setValueAtTime(1200, audioContext.currentTime);
        oscCrack.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);

        gainCrack.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainCrack.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

        oscBoom.start(audioContext.currentTime);
        oscCrack.start(audioContext.currentTime);

        oscBoom.stop(audioContext.currentTime + 0.6);
        oscCrack.stop(audioContext.currentTime + 0.1);
      } catch (e) {
        // Silent fail if audio context fails
      }
    };


    // Check if user has interacted (for audio autoplay policy)
    let hasUserInteracted = false;
    const enableAudio = () => {
      hasUserInteracted = true;
      (window as any).hasUserInteracted = true; // Global flag for clock
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('keydown', enableAudio);
    };
    
    document.addEventListener('click', enableAudio);
    document.addEventListener('keydown', enableAudio);

    // Random ambient sounds with different probabilities
    const playRandomAmbientSound = () => {
      const randomDelay = Math.random() * 165000 + 15000; // 15s - 3 minutes
      setTimeout(() => {
        // Only play if user has interacted
        if (!hasUserInteracted) {
          playRandomAmbientSound();
          return;
        }
        
        // Weighted random choice (boom is rarer)
        const randomChoice = Math.random();
        if (randomChoice > 0.90) {
          playBoomSound(); // "boom" explosion - 10% chance
        } else if (randomChoice > 0.45) {
          playStartupSound(); // "set" sound - 45% chance  
        } else {
          playElectricGlitch(); // "keiefu xè xè" sound - 45% chance
        }
        playRandomAmbientSound(); // Schedule next random sound
      }, randomDelay);
    };
    
    // Start the random ambient sounds
    playRandomAmbientSound();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Clock update effect with digital "tít" sound
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Create subtle "tít" sound every second (only after user interaction)
      try {
        if (typeof window !== 'undefined' && (window as any).hasUserInteracted) {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(1400, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.04);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.04);
        }
      } catch (e) {
        // Silent fail if audio context fails
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Translation content
  const translations: Record<Language, Translations> = {
    vi: {
      nav: {
        home: "Trang chủ",
        projects: "Dự án", 
        values: "Giá trị",
        join: "Tham gia"
      },
      hero: {
        title: "DEVELOPERS IN BLACK",
        subtitle: "Tổ chức mã nguồn mở của những kỹ sư đam mê",
        description: "\"Dù không biết tên loài hoa nhưng người ta vẫn biết loài hoa đó đẹp đến nhường nào.\"",
        quote: "Code with purpose, build with passion",
        exploreBtn: "Khám phá dự án",
        joinBtn: "Tham gia cộng đồng"
      },
      stats: {
        opensource: "Mã nguồn mở",
        cost: "Chi phí sử dụng", 
        potential: "Khả năng phát triển",
        commitment: "Cam kết cộng đồng"
      },
      projects: {
        title: "Các lĩnh vực phát triển",
        description: "Từ web, mobile đến hardware, IoT và AI - chúng tôi làm mọi thứ với tình yêu và chia sẻ miễn phí cho cộng đồng",
        fields: {
          web: {
            title: "Web Development",
            description: "Xây dựng các ứng dụng web mã nguồn mở phục vụ cộng đồng"
          },
          mobile: {
            title: "Mobile Apps", 
            description: "Phát triển ứng dụng di động miễn phí cho mọi người"
          },
          hardware: {
            title: "Hardware & IoT",
            description: "Thiết kế phần cứng và IoT để tự động hóa cuộc sống"
          },
          ai: {
            title: "AI & Machine Learning",
            description: "Nghiên cứu và chia sẻ các giải pháp AI cho tất cả"
          },
          education: {
            title: "Education & Training",
            description: "Chia sẻ kiến thức và đào tạo miễn phí cho cộng đồng"
          },
          tools: {
            title: "Open Source Tools",
            description: "Tạo ra các công cụ mã nguồn mở hữu ích"
          }
        }
      },
      values: {
        title: "Triết lý của chúng tôi",
        description: "Không vì danh tiếng, không vì lợi nhuận - chỉ vì niềm đam mê và mong muốn làm cho thế giới tốt đẹp hơn",
        passion: {
          title: "Vì tình yêu công nghệ",
          description: "Chúng tôi làm vì đam mê, không vì danh tiếng hay lợi nhuận",
          detail: "Passion drives innovation"
        },
        community: {
          title: "Phát triển cộng đồng", 
          description: "Mục tiêu duy nhất là làm cho thế giới trở nên tốt đẹp hơn",
          detail: "Community over profit"
        },
        opensource: {
          title: "Mã nguồn mở",
          description: "Tất cả đều được chia sẻ miễn phí cho mọi người", 
          detail: "Knowledge should be free"
        },
        quote: "Chúng tôi tin rằng công nghệ nên phục vụ nhân loại, không phải ngược lại. Mỗi dòng code chúng tôi viết đều hướng tới một tương lai tốt đẹp hơn cho tất cả mọi người.",
        author: "Developers in Black Community"
      },
      join: {
        title: "Tham gia cùng chúng tôi",
        description: "Bạn cũng có cùng chí hướng? Hãy cùng chúng tôi xây dựng một thế giới tốt đẹp hơn thông qua công nghệ",
        developers: {
          title: "Developers",
          description: "Có kỹ năng lập trình và muốn đóng góp cho các dự án mã nguồn mở? Hãy tham gia GitHub của chúng tôi.",
          button: "Xem GitHub Organization"
        },
        community: {
          title: "Community", 
          description: "Không biết lập trình nhưng muốn học hỏi và đóng góp ý tưởng? Cộng đồng luôn chào đón bạn.",
          button: "Tham gia Discord"
        },
        contact: "",
        disclaimer: "* Chúng tôi không thu phí, không bán khóa học, không quảng cáo. Chỉ chia sẻ kiến thức và passion với công nghệ.",
        tagline: "Built by the community, for the community"
      },
      footer: {
        description: "Một tổ chức mã nguồn mở được vận hành bởi tình yêu với công nghệ và mong muốn tạo ra một thế giới tốt đẹp hơn.",
        tagline: "Made with ❤️ by the community, for the community. All projects are 100% open source and free forever."
      }
    },
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
        values: "Values", 
        join: "Join"
      },
      hero: {
        title: "DEVELOPERS IN BLACK",
        subtitle: "Open source organization of passionate engineers",
        description: "\"Even without knowing the name of a flower, people still know how beautiful it is.\"",
        quote: "Code with purpose, build with passion",
        exploreBtn: "Explore Projects",
        joinBtn: "Join Community"
      },
      stats: {
        opensource: "Open Source",
        cost: "Cost to Use",
        potential: "Development Potential", 
        commitment: "Community Commitment"
      },
      projects: {
        title: "Development Fields",
        description: "From web, mobile to hardware, IoT and AI - we do everything with love and share freely with the community",
        fields: {
          web: {
            title: "Web Development",
            description: "Building open source web applications serving the community"
          },
          mobile: {
            title: "Mobile Apps",
            description: "Developing free mobile applications for everyone"
          },
          hardware: {
            title: "Hardware & IoT", 
            description: "Designing hardware and IoT to automate life"
          },
          ai: {
            title: "AI & Machine Learning",
            description: "Researching and sharing AI solutions for all"
          },
          education: {
            title: "Education & Training",
            description: "Sharing knowledge and free training for the community"
          },
          tools: {
            title: "Open Source Tools",
            description: "Creating useful open source tools"
          }
        }
      },
      values: {
        title: "Our Philosophy",
        description: "Not for fame, not for profit - only for passion and desire to make the world better",
        passion: {
          title: "For love of technology",
          description: "We work out of passion, not for fame or profit",
          detail: "Passion drives innovation"
        },
        community: {
          title: "Community development",
          description: "Our only goal is to make the world a better place",
          detail: "Community over profit"
        },
        opensource: {
          title: "Open Source",
          description: "Everything is shared freely for everyone",
          detail: "Knowledge should be free"
        },
        quote: "We believe technology should serve humanity, not the other way around. Every line of code we write aims for a better future for everyone.",
        author: "Developers in Black Community"
      },
      join: {
        title: "Join Us",
        description: "Do you share the same vision? Let's build a better world together through technology",
        developers: {
          title: "Developers",
          description: "Have programming skills and want to contribute to open source projects? Join our GitHub.",
          button: "View GitHub Organization"
        },
        community: {
          title: "Community",
          description: "Don't know programming but want to learn and contribute ideas? The community always welcomes you.",
          button: "Join Discord"
        },
        contact: "",
        disclaimer: "* We don't charge fees, don't sell courses, don't advertise. Just sharing knowledge and passion for technology.",
        tagline: "Built by the community, for the community"
      },
      footer: {
        description: "An open source organization driven by love for technology and the desire to create a better world.",
        tagline: "Made with ❤️ by the community, for the community. All projects are 100% open source and free forever."
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t.projects.fields.web.title,
      description: t.projects.fields.web.description,
      tech: ["React", "Node.js", "Next.js"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t.projects.fields.mobile.title,
      description: t.projects.fields.mobile.description,
      tech: ["React Native", "Flutter", "Swift"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t.projects.fields.hardware.title,
      description: t.projects.fields.hardware.description,
      tech: ["Arduino", "Raspberry Pi", "ESP32"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t.projects.fields.ai.title,
      description: t.projects.fields.ai.description,
      tech: ["TensorFlow", "PyTorch", "OpenAI"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t.projects.fields.education.title,
      description: t.projects.fields.education.description,
      tech: ["Courses", "Workshops", "Mentoring"]
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: t.projects.fields.tools.title,
      description: t.projects.fields.tools.description,
      tech: ["CLI Tools", "Libraries", "Frameworks"]
    }
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-400" />,
      title: t.values.passion.title,
      description: t.values.passion.description,
      detail: t.values.passion.detail
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: t.values.community.title,
      description: t.values.community.description,
      detail: t.values.community.detail
    },
    {
      icon: <Code className="w-12 h-12 text-green-400" />,
      title: t.values.opensource.title,
      description: t.values.opensource.description,
      detail: t.values.opensource.detail
    }
  ];

  const stats = [
    { number: "100%", label: t.stats.opensource, icon: <Shield className="w-6 h-6" /> },
    { number: language === 'vi' ? "0₫" : "$0", label: t.stats.cost, icon: <Heart className="w-6 h-6" /> },
    { number: "∞", label: t.stats.potential, icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: t.stats.commitment, icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Digital Clock */}
      <div className="fixed bottom-4 left-4 z-[9999] bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg px-3 py-2 font-mono text-green-400 text-sm md:text-base shadow-lg shadow-green-400/20">
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
      <div className="fixed inset-0 opacity-3 pointer-events-none z-0">
        <div className="matrix-rain">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="matrix-column absolute text-green-400/20 font-mono text-xs leading-none will-change-transform"
              style={{
                left: `${(i * 12.5)}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: '15s'
              }}
            >
              {[...Array(8)].map((_, j) => (
                <div key={j} className="opacity-30">
                  {j % 2 === 0 ? '0' : '1'}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      
      {/* Floating Code Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(30)].map((_, i) => {
          const codeSnippets = [
            'const dev = "gentleman"',
            'console.log("DIB");',
            '// TODO: Rule the world',
            'function hack() { return true; }',
            'class Elite extends Developer',
            'import { mystery } from "black"',
            'npm install --save luxury',
            'git commit -m "elegant"',
            'export default Excellence',
            'await Promise.resolve(success)',
            'const tech = { stack: "premium" }',
            'sudo make me coffee',
            'if (passion) return true',
            'let mystery = "unveiled"',
            'var gentlemen = new Elite()',
            'for (let i of developers)',
            'while (coding) dream();',
            'try { changeWorld() }',
            '=> elegance.defined',
            'const BLACK = 0x000000',
            '{ luxury: "code" }',
            'return masterpiece;',
            'async function create()',
            'throw new Excellence()',
            'switch (mode) case "luxury"',
            'typeof genius === "string"',
            'delete ordinary.code',
            'new Promise(resolve)',
            'Math.random() < passion',
            '// EOF: Excellence'
          ];
          
          return (
            <div
              key={i}
              className="absolute text-green-400/25 font-mono text-xs opacity-60 animate-pulse will-change-opacity"
              style={{
                left: `${(i * 3.33) % 90 + 5}%`,
                top: `${(i * 2.5) % 80 + 10}%`,
                transform: `rotate(${(i * 2) % 20 - 10}deg)`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            >
              {codeSnippets[i]}
            </div>
          );
        })}
      </div>
      
      {/* Hacker grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px),
            linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'pulse 4s infinite'
        }} />
      </div>


      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-gray-950/98 backdrop-blur-xl border-b border-green-400/20 shadow-2xl shadow-green-400/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full shadow-2xl border-2 border-green-400/60 bg-gradient-to-br from-white/10 to-gray-400/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Developers in Black Logo" 
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="absolute -inset-2 border border-green-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}} />
                <div className="absolute -inset-4 border border-green-400/20 rounded-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wider bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">{t.hero.title}</h1>
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-gradient-to-r from-green-600 to-green-400 px-3 py-1 rounded-full shadow-lg shadow-green-400/20">OPEN SOURCE</span>
                  <span className="text-xs text-amber-400/80 font-light">EST. 2025</span>
                  <div className="w-1 h-1 bg-amber-400/60 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-lg">
                <span className="relative">
                  {t.nav.home}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              <a href="#projects" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-lg">
                <span className="relative">
                  {t.nav.projects}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              <a href="#values" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-lg">
                <span className="relative">
                  {t.nav.values}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              <a href="#join" className="mystery-hover hover:text-green-400 transition-all duration-300 relative group font-light tracking-wide text-lg">
                <span className="relative">
                  {t.nav.join}
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 group-hover:w-full transition-all duration-500 shadow-sm shadow-green-400/50" />
              </a>
              
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                className="mystery-hover flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300 border border-green-400/20 hover:border-green-400/50 shadow-lg shadow-green-400/5 backdrop-blur-md"
                title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
              >
                <Languages className="w-4 h-4 text-green-400/70" />
                <span className="text-sm font-light text-green-400/90 tracking-wider">{language === 'vi' ? 'EN' : 'VI'}</span>
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-800/50 rounded transition-colors">{t.nav.home}</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-800/50 rounded transition-colors">{t.nav.projects}</a>
              <a href="#values" className="block px-3 py-2 hover:bg-gray-800/50 rounded transition-colors">{t.nav.values}</a>
              <a href="#join" className="block px-3 py-2 hover:bg-gray-800/50 rounded transition-colors">{t.nav.join}</a>
              
              {/* Mobile Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                className="flex items-center space-x-2 px-3 py-2 rounded bg-gray-800/50 hover:bg-gray-700/50 transition-colors w-full"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm">{language === 'vi' ? 'English' : 'Tiếng Việt'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <div className="relative inline-flex items-center justify-center w-56 h-56 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/15 via-white/8 to-green-600/15 rounded-full animate-pulse" />
              <div className="relative w-44 h-44 rounded-full shadow-2xl border-4 border-green-400/60 bg-gradient-to-br from-white/10 to-gray-400/10 backdrop-blur-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Developers in Black Logo" 
                  className="w-40 h-40 object-contain"
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
              <h2 className="text-6xl md:text-8xl font-archivo-black mb-4 text-white tracking-wider">
                DEVELOPERS
              </h2>
              <div className="absolute -top-6 -left-6 text-green-400/30 text-sm font-mono animate-pulse flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
                <span>// class: Gentleman</span>
              </div>
            </div>
            <div className="relative">
              <h3 className="text-6xl md:text-8xl font-archivo-black mb-8 text-white tracking-wider">
                IN BLACK
              </h3>
              <div className="absolute -bottom-6 -right-6 text-green-400/30 text-sm font-mono animate-pulse flex items-center space-x-2">
                <span>// luxury_tech.init()</span>
                <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed mb-2">
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
                <p className="text-gray-100 leading-relaxed text-2xl md:text-3xl mb-8 font-light tracking-wide">
                  {t.hero.description}
                </p>
                <blockquote className="border-l-3 border-gradient-to-b from-green-400/60 via-amber-400/40 to-green-400/60 pl-6 text-green-400/95 italic font-light text-xl md:text-2xl relative">
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
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-gray-800/50">
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
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-green-300 transition-all duration-500">
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
      <section id="projects" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              {t.projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-white mb-6 group-hover:text-green-400 transition-colors duration-300 transform group-hover:scale-110">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600/50 group-hover:border-green-400/50 group-hover:text-green-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm border border-green-400/30">
                      Open Source
                    </span>
                    <Layers className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              {t.values.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              {t.values.description}
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
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-12 max-w-5xl mx-auto border border-gray-700/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5" />
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl italic text-gray-300 mb-6 leading-relaxed">
                  "{t.values.quote}"
                </blockquote>
                <div className="text-green-400 font-semibold text-lg">
                  — {t.values.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              {t.join.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              {t.join.description}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="group bg-gray-800/30 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 group-hover:text-green-400 transition-colors">
                    <Github className="w-8 h-8" />
                    <span>{t.join.developers.title}</span>
                  </h3>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                    {t.join.developers.description}
                  </p>
                  <a href="https://github.com/DEVELOPERS-IN-BLACK" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-4 bg-gray-700/70 hover:bg-green-400 text-white hover:text-black rounded-xl transition-all duration-500 font-semibold border border-gray-600/50 hover:border-green-400 transform hover:scale-105 text-center">
                    {t.join.developers.button}
                  </a>
                </div>
              </div>

              <div className="group bg-gray-800/30 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 group-hover:text-blue-400 transition-colors">
                    <Users className="w-8 h-8" />
                    <span>{t.join.community.title}</span>
                  </h3>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                    {t.join.community.description}
                  </p>
                  <a href="https://discord.gg/Upnc6w6p" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-4 bg-gray-700/70 hover:bg-blue-400 text-white hover:text-black rounded-xl transition-all duration-500 font-semibold border border-gray-600/50 hover:border-blue-400 transform hover:scale-105 text-center">
                    {t.join.community.button}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <p className="text-gray-400 text-lg mb-4">
                <span className="text-green-400">{t.join.contact}</span>
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mx-auto">
                {t.join.disclaimer}
                <span className="block mt-2 text-green-400 font-medium">
                  "{t.join.tagline}"
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-full shadow-2xl border-2 border-green-400/60 bg-gradient-to-br from-white/10 to-gray-400/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Developers in Black Logo" 
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="absolute -inset-2 border border-green-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold tracking-wider">{t.hero.title}</span>
                <div className="text-sm text-gray-400">Open Source Community</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              {t.footer.description}
            </p>
            
            <div className="flex justify-center space-x-12 mb-8">
              <a href="https://github.com/DEVELOPERS-IN-BLACK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center space-x-3 group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">GitHub</span>
              </a>
              <a href="https://discord.gg/Upnc6w6p" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-3 group">
                <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Discord</span>
              </a>
            </div>
            
            <div className="border-t border-gray-800/50 pt-8">
              <p className="text-gray-500 text-sm">
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