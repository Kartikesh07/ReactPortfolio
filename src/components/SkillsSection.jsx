import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Gamepad, Users, Brain, Cpu, Globe, Box, Terminal, Workflow, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming",
      items: [
        { name: "Java", icon: <Terminal size={24} />, level: 90 },
        { name: "Python", icon: <Terminal size={24} />, level: 85 },
        { name: "C/C++", icon: <Code2 size={24} />, level: 80 }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "Game Development", icon: <Gamepad size={24} />, level: 95 },
        { name: "Web Development", icon: <Globe size={24} />, level: 85 },
        { name: "3D Modeling", icon: <Box size={24} />, level: 80 }
      ]
    },
    {
      category: "Technical",
      items: [
        { name: "DSA", icon: <GitBranch size={24} />, level: 85 },
        { name: "Database & SQL", icon: <Database size={24} />, level: 80 },
        { name: "System Architecture", icon: <Cpu size={24} />, level: 75 }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Collaboration", icon: <Users size={24} />, level: 95 },
        { name: "Problem Solving", icon: <Brain size={24} />, level: 90 },
        { name: "Adaptability", icon: <Workflow size={24} />, level: 90 }
      ]
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl pb-8 font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-600">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-purple-500">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      />
                    </div>
                    <span className="absolute right-0 top-0 text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;