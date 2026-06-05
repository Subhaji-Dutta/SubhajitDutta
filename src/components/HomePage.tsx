import { Hero } from './Hero';
import { ProjectRow } from './ProjectRow';
import { TechStack } from './TechStack';
import { allProjects } from '../data/projects';
import { Stack } from './Stack';

interface HomePageProps {
  onProjectClick?: (projectId: number) => void;
}
const fullstack = allProjects.filter(
  p => p.category === "Full-Stack"
).reverse().slice(0, 4);
const frontend = allProjects.filter(
  p => p.category === "Frontend"
).slice(0, 4);
const uiux = allProjects.filter(
  p => p.category === "UI Design"
).reverse().slice(0, 4);

export function HomePage({ onProjectClick }: HomePageProps) {
  return (
    <div className='min-h-screen pt-6 min-w-full'>
      <Hero />
      
      <div className="pb-16">
      <div className="pt-4">
        <ProjectRow
          title="UI/UX Design"
          projects={uiux}
          onProjectClick={onProjectClick}
        />
        </div>
        <ProjectRow
          title="Frontend Development"
          projects={frontend}
          onProjectClick={onProjectClick}
        />
        <ProjectRow
          title="Full-Stack Development"
          projects={fullstack}
          onProjectClick={onProjectClick}
        />
        </div>
        <TechStack />
      <Stack />
      </div>
      
  );
}
