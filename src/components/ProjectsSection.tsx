import React from 'react';
import { Layers } from 'lucide-react';
import { Translations } from '../data/translations';
import { ProjectItem } from '../data/projectsData';

interface ProjectsSectionProps {
  t: Translations;
  projects: ProjectItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ t, projects }) => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            {t.projects.subtitle}
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
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors">
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
  );
};

export default ProjectsSection;