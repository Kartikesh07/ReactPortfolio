import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import pic from './img/Portarait_Photo.jpg'
import cyberRunImage from './img/CyberRun.png';
import nftImage from './img/NFTPic.jpeg';
import brickBreakerImage from './img/BrickBreakerIMG.webp';
import snakeGameImage from './img/SnakeGameIMG.webp';
import pomodoroImage from './img/PomodoroTracker.webp';
import quizImage from './img/QuizIMG.webp';
import blackjackImage from './img/BlackJackIMG.webp';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import BlogSection from './BlogSection';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const navAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const logoAnimation = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };
  
  const linkAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + (index * 0.1),
        duration: 0.5
      }
    })
  };
  
  const socialAnimation = {
    hidden: { x: 20, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6 + (index * 0.1),
        duration: 0.5
      }
    })
  };
  
  
  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isLoaded, setIsLoaded] = useState(false);
  
  const navItems = [
    { display: 'Skills', id: 'skills' },
    { display: 'Projects', id: 'projects' },
    { display: 'My Journey', id: 'blog' }
  ];
  
  useEffect(() => {
    setIsLoaded(true);


    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'blog'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate header height - adjust this value based on your header height
      const headerHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-emerald-50">
      {/* Navigation - Updated with correct links */}
      <AnimatePresence>
        {isLoaded && (
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={navAnimation}
            className="fixed w-full bg-white/90 backdrop-blur-md shadow-lg z-50"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <motion.a 
                  variants={logoAnimation}
                  href="#"
                  className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-emerald-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
                  }}
                >
                  Kartikesh
                </motion.a>
                
                <div className="hidden md:flex space-x-8">
                  {navItems.map(({ display, id }, index) => (
                    <motion.a
                      key={id}
                      custom={index}
                      variants={linkAnimation}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                      }}
                      className={`text-gray-700 hover:text-emerald-500 transition-colors cursor-pointer ${
                        activeSection === id ? 'text-emerald-500' : ''
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {display}
                    </motion.a>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/kartikesh-belamkar" },
                    { icon: <Instagram size={20} />, url: "https://www.instagram.com/kartikesh04" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.url}
                      custom={index}
                      variants={socialAnimation}
                      href={social.url}
                      target="_blank"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-gray-700 hover:text-violet-600"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Redesigned Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12">
            {/* Left Content */}
            <motion.div 
              className="md:w-1/2 text-left"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-2xl font-semibold text-violet-600 mb-4"
                variants={fadeIn}
              >
                Hello, I'm
              </motion.h2>
              <motion.h1 
                className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent"
                variants={fadeIn}
              >
                Kartikesh Belamkar
              </motion.h1>
              <motion.div 
                className="text-xl text-gray-600 mb-8 space-y-4"
                variants={fadeIn}
              >
                <p className="leading-relaxed">
                  Passionate Game Developer crafting immersive digital experiences
                </p>
                <p className="leading-relaxed">
                  AI & Data Science Student exploring the future of technology
                </p>
              </motion.div>
              <motion.div 
                className="flex gap-4"
                variants={fadeIn}
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="https://wa.me/919405545631"
                  className="px-8 py-3 border-2 border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="relative">
                {/* Rotating border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-emerald-500 rounded-full animate-spin-slow"></div>
                <img 
                  src={pic} 
                  alt="Kartikesh Belamkar"
                  className="w-64 h-64 rounded-full relative z-10 p-1 bg-white object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SkillsSection/>
      <ProjectsSection/>
      
      <BlogSection/>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>Made with ❤️ by Kartikesh</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;