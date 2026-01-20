import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  onClick?: (projectId: number) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(project.id);
    }
  };

  return (
    <div
      className="flex-shrink-0 w-64 md:w-80 cursor-pointer transition-transform duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <div className="relative rounded overflow-hidden group">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-40 md:h-48 object-cover"
        />
        
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                    transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
            <h3 className="text-white">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </div>
        </div>

        {/* Bottom gradient always visible on mobile */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <p className="text-white text-sm">{project.title}</p>
        </div>
      </div>
    </div>
  );
}