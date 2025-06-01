import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  User, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Globe, 
  Palette, 
  Music, 
  Heart 
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'activities'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-800">
              [Your Name]
            </div>
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-emerald-800 hover:text-orange-600 transition-colors text-sm xl:text-base">About me</button>
              <button onClick={() => scrollToSection('experience')} className="text-emerald-800 hover:text-orange-600 transition-colors text-sm xl:text-base">Resume</button>
              <button onClick={() => scrollToSection('skills')} className="text-emerald-800 hover:text-orange-600 transition-colors text-sm xl:text-base">Work</button>
              <button className="bg-orange-600 text-white px-3 xl:px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm xl:text-base">Get in touch!</button>
            </div>
            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-emerald-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-400/10 rounded-full"></div>
          <div className="absolute bottom-20 right-4 sm:bottom-40 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-orange-500/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-stone-200/10 transform rotate-45"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold mb-6 sm:mb-8 relative leading-tight">
                PORTFOLIO
                <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2">
                  PORTFOLIO
                </div>
              </h1>
              
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 font-light italic border-l-4 border-yellow-400 pl-4 sm:pl-6">
                "I love design and anything related to art. I approach problems in a rational and pragmatic way and seek the simplest and most functional solutions possible."
              </blockquote>
            </div>
            
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-3 sm:inset-4 bg-stone-200 rounded-xl flex items-center justify-center">
                  <User size={80} className="text-emerald-800 sm:w-[120px] sm:h-[120px]" />
                </div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-stone-200 rounded-full flex items-center justify-center">
                  <Palette size={20} className="text-emerald-800 sm:w-8 sm:h-8" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <button onClick={() => scrollToSection('about')} className="animate-bounce">
              <ChevronDown size={24} className="text-yellow-400 sm:w-8 sm:h-8" />
            </button>
            <p className="mt-2 text-yellow-400 text-sm sm:text-base">Scroll down</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-6 sm:mb-8">
                Hello, I'm [Your Name]!
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-6 sm:mb-8">
                I am a self-taught Graphic Designer with extensive marketing and communication experience. 
                I am currently living in [Country] and pursuing a degree in [Your Degree Program].
              </p>
              <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base">
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                linkedin.com/in/your-username
              </button>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-800 mb-4 sm:mb-6">Personal Info</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base"><strong>Date of Birth:</strong> [DD Month YYYY]</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base"><strong>Nationality:</strong> [Your Nationality]</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-emerald-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base break-all">[City, Country]</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-emerald-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base break-all">your.email@example.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-emerald-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">[+XX XXX XXX XXXX]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 lg:py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-8 sm:mb-12 text-center">Education</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-8 border-emerald-600">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                <GraduationCap className="text-emerald-600" size={24} />
                <span className="text-orange-600 font-bold text-base sm:text-lg">[Year–Year]</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">[University Name]</h3>
              <p className="text-gray-600 italic text-sm sm:text-base">[Your Degree or Program Name]</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-8 border-yellow-400">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                <GraduationCap className="text-yellow-600" size={24} />
                <span className="text-orange-600 font-bold text-base sm:text-lg">[Year–Year]</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">[Institute Name]</h3>
              <p className="text-gray-600 italic text-sm sm:text-base">[Your Program Name]</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-8 border-orange-500">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                <GraduationCap className="text-orange-600" size={24} />
                <span className="text-orange-600 font-bold text-base sm:text-lg">[Year–Year]</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">[Previous University/School]</h3>
              <p className="text-gray-600 italic text-sm sm:text-base">[Degree or Field of Study]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-8 sm:mb-12 text-center">Experience</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8 sm:mb-12">
            <div className="space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <Briefcase className="text-emerald-600" size={20} />
                  <span className="text-orange-600 font-bold text-sm sm:text-base">[Year]</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">[Position Title]</h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">[Company Name]</p>
                <p className="text-gray-700 text-sm sm:text-base">Brief task description</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <Briefcase className="text-yellow-600" size={20} />
                  <span className="text-orange-600 font-bold text-sm sm:text-base">[Year]</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">[Position Title]</h3>
                <p className="text-gray-700 text-sm sm:text-base">Freelance or client work details</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <Briefcase className="text-orange-600" size={20} />
                  <span className="text-orange-600 font-bold text-sm sm:text-base">[Year]</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">[Position Title]</h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">[Company or Organization]</p>
                <p className="text-gray-700 text-sm sm:text-base">Role description</p>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-800 mb-4 sm:mb-6">Skill Tags</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['#Creativity', '#Communication', '#Detail-oriented', '#Adaptability'].map((skill, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-8 sm:mb-12 text-center">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <Palette className="text-yellow-400" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">Software Skills</h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-2">Adobe Photoshop (Ps), Illustrator (Ai), InDesign (Id)</p>
                  <p className="text-gray-300 text-sm sm:text-base">XD, Premiere Pro (Pr)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <Code className="text-orange-400" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">Coding Skills</h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-2">HTML, CSS, JavaScript</p>
                  <p className="text-gray-300 text-sm sm:text-base">PHP, SQL</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <Briefcase className="text-yellow-400" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">Other Skills</h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-2">Packaging</p>
                  <p className="text-gray-300 text-sm sm:text-base">Visual design</p>
                  <p className="text-gray-300 text-sm sm:text-base">UI/UX design</p>
                  <p className="text-gray-300 text-sm sm:text-base">User Research</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-400 text-emerald-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={24} />
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              <div className="space-y-1">
                <p>English – Fluent</p>
                <p>French – Intermediate</p>
                <p>[Native Language] – Native</p>
              </div>
            </div>
            
            <div className="bg-orange-400 text-emerald-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Palette size={24} />
                <h3 className="text-xl font-bold">Activities</h3>
              </div>
              <div className="space-y-1">
                <p><strong>[Year]:</strong> "[Exhibition Name]" – Artist</p>
                <p><strong>[Year]:</strong> [Contest/Event Name] – Designer</p>
              </div>
            </div>
            
            <div className="bg-stone-200 text-emerald-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Heart size={24} />
                <h3 className="text-xl font-bold">Hobbies & Interests</h3>
              </div>
              <div className="space-y-1 text-sm">
                <p>Classical / Funky / Jazz music</p>
                <p>Crochet and Knitting</p>
                <p>Digital art & Miniature craft</p>
                <p>Cats, pets, and animal care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Let's work together!</h2>
          <p className="text-stone-300 mb-8">Ready to bring your next project to life?</p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-emerald-800 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105">
            Get in touch!
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;