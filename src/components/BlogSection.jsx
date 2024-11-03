import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad, Code, Trophy, Rocket, 
  Star, Brain, Target, Heart,
  Sparkles, ArrowRight, ChevronDown, 
  MessageCircle 
} from 'lucide-react';
import cyberRunImage from './img/CyberRun.png';
import nftImage from './img/NFTPic.jpeg';
import brickBreakerImage from './img/BrickBreakerIMG.webp';

import blogImage from './img/BlogImage.jpeg';

const BlogSection = () => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      subtitle: "From Player to Creator",
      icon: <Gamepad size={24} />,
      color: "from-violet-500 to-purple-500",
      content: `After 10th grade, my perspective on gaming transformed completely. 
      What started as pure entertainment became a gateway to creation. 
      I realized that every game I played was someone's creative vision brought to life through code.`,
      achievements: [
        "Started learning Python",
        "Created first Snake Game",
        "Discovered passion for game development"
      ],
      image: blogImage
    },
    {
      year: "2020",
      title: "Building Foundations",
      subtitle: "Learning the Fundamentals",
      icon: <Code size={24} />,
      color: "from-purple-500 to-pink-500",
      content: `Diving deep into programming fundamentals, I began with Java and Python. 
      Every small success fueled my motivation. Creating simple games helped me understand 
      core programming concepts in a practical, engaging way.`,
      achievements: [
        "Mastered Java basics",
        "Developed Brick Breaker game",
        "Learned about game physics"
      ],
      image: brickBreakerImage
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      subtitle: "Exploring 3D Development",
      icon: <Rocket size={24} />,
      color: "from-pink-500 to-rose-500",
      content: `The discovery of Blender and Unreal Engine opened up a whole new dimension. 
      3D modeling and game development became my new frontier. The learning curve was steep, 
      but the possibilities were endless.`,
      achievements: [
        "Learned Blender basics",
        "Started Unreal Engine journey",
        "Created first 3D assets"
      ],
      image: cyberRunImage
    },
    {
      year: "2022",
      title: "First Major Project",
      subtitle: "Cyber Run Development",
      icon: <Trophy size={24} />,
      color: "from-rose-500 to-orange-500",
      content: `Cyber Run became my most ambitious project yet. This 3D adventure platformer 
      combined everything I'd learned about game development, design, and user experience. 
      Publishing it on itch.io was a major milestone in my journey.`,
      achievements: [
        "Completed Cyber Run development",
        "Published on itch.io",
        "Received player feedback"
      ],
      image: cyberRunImage
    },
    {
      year: "2023",
      title: "New Frontiers",
      subtitle: "Blockchain & NFTs",
      icon: <Star size={24} />,
      color: "from-orange-500 to-amber-500",
      content: `Venturing into the world of NFTs marked a new chapter in my journey. 
      Creating and publishing a collection on OpenSea showed me how game development skills 
      could translate into other exciting technologies.`,
      achievements: [
        "Created NFT collection",
        "Published on OpenSea",
        "Explored blockchain technology"
      ],
      image: nftImage
    }
  ];

  return (
    <motion.section
      id="blog"
      className="py-20 bg-white"
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
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl pb-8 font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            My Game Dev Journey
          </h2>
          <p className="text-gray-600">
            Follow my transformation from an enthusiastic gamer to a passionate game developer. 
            Each milestone represents a step forward in my creative journey.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 to-purple-500" />

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Year Bubble */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-purple-500 z-10">
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-purple-600">
                  {milestone.year}
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                className={`relative md:w-[calc(100%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
                     onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${milestone.color} text-white`}>
                      {milestone.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      <p className="text-purple-600">{milestone.subtitle}</p>
                    </div>
                    <motion.div
                      className="ml-auto"
                      animate={{ rotate: expandedMilestone === index ? 180 : 0 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedMilestone === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        

                        {/* Content */}
                        <p className="text-gray-600 mb-4">
                          {milestone.content}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-purple-600 mb-2">Key Achievements:</h4>
                          {milestone.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <Sparkles size={16} className="text-purple-500" />
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            This journey continues as I explore new technologies and create more immersive experiences.
          </p>
          <motion.a
            href="https://wa.me/919405545631"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            Let's Connect and Create Together
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogSection;