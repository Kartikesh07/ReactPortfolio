import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Layout, Box, Brain, Gamepad } from 'lucide-react';
import cyberRunImage from './img/CyberRun.png';
import nftImage from './img/NFTPic.jpeg';
import brickBreakerImage from './img/BrickBreakerIMG.webp';
import snakeGameImage from './img/SnakeGameIMG.webp';
import pomodoroImage from './img/PomodoroTracker.webp';
import quizImage from './img/QuizIMG.webp';
import blackjackImage from './img/BlackJackIMG.webp';


const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layout size={18} /> },
    { id: 'game', label: 'Game Dev', icon: <Gamepad size={18} /> },
    { id: 'web', label: '3D/NFT', icon: <Box size={18} /> },
    { id: 'python', label: 'Python Apps', icon: <Code size={18} /> }
  ];

  const projects = [
    {
      id: 1,
      title: "CYBER RUN",
      subtitle: "3D Adventure Platformer Game",
      description: "An immersive cyberpunk-themed platformer built with advanced game mechanics and stunning visuals.",
      tech: ["Unreal Engine", "Blender", "3D Modeling"],
      image: cyberRunImage,
      category: "game",
      link: "https://kartikesh007.itch.io/cyber-run",
      highlights: ["Published on itch.io", "Dynamic gameplay", "Custom 3D assets"]
    },
    {
      id: 2,
      title: "NFT Collection",
      subtitle: "Digital Art Collection",
      description: "A unique collection of digital artworks published as NFTs on the OpenSea marketplace.",
      tech: ["Digital Art", "Blockchain", "OpenSea"],
      image: nftImage,
      category: "web",
      link: "https://opensea.io/kartikesh007",
      highlights: ["5 unique pieces", "Successfully traded", "Blockchain integration"]
    },
    {
      id: 3,
      title: "Brick Breaker",
      subtitle: "Classic Arcade Game",
      description: "A modern take on the classic brick breaker game with enhanced graphics and gameplay mechanics.",
      tech: ["Java", "Game Physics", "UI Design"],
      image: brickBreakerImage,
      category: "game",
      highlights: ["Custom physics engine", "Progressive difficulty", "Score system"]
    },
    {
      id: 4,
      title: "Snake Game",
      subtitle: "Python Gaming Classic",
      description: "A reimagined version of the classic snake game with modern features and smooth controls.",
      tech: ["Python", "Turtle", "Game Design"],
      image: snakeGameImage,
      category: "python",
      highlights: ["Smooth controls", "Progressive difficulty", "High score tracking"]
    },
    {
      id: 5,
      title: "Pomodoro Timer",
      subtitle: "Productivity Tool",
      description: "A sleek productivity timer implementing the Pomodoro technique with task tracking.",
      tech: ["Python", "Tkinter", "Time Logic"],
      image: pomodoroImage,
      category: "python",
      highlights: ["Task management", "Statistics tracking", "Customizable intervals"]
    },
    {
      id: 6,
      title: "Quiz Application",
      subtitle: "Educational Tool",
      description: "An interactive quiz platform with dynamic question generation and score tracking.",
      tech: ["Python", "Database", "UI/UX"],
      image: quizImage,
      category: "python",
      highlights: ["Multiple categories", "Score analytics", "Progress tracking"]
    },
    {
      id: 7,
      title: "BlackJack Game",
      subtitle: "Card Game Simulation",
      description: "A detailed implementation of the classic BlackJack card game with realistic gameplay.",
      tech: ["Python", "OOP", "Game Logic"],
      image: blackjackImage,
      category: "python",
      highlights: ["Real card mechanics", "Betting system", "AI dealer logic"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl pb-8 font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning game development, web applications, and creative innovations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeFilter === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-purple-600 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"/>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Project Link */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;