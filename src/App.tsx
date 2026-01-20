import { useState } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { ProjectRow } from './components/ProjectRow';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { allProjects } from './data/projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    setCurrentPage('projects');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onProjectClick={handleProjectClick} />;
      case 'projects':
        return <ProjectsPage onProjectClick={handleProjectClick} />;
      case 'project-detail':
        if (selectedProjectId !== null) {
          const project = allProjects.find(p => p.id === selectedProjectId);
          if (project) {
            return <ProjectDetailPage project={project} onBack={handleBackToProjects} />;
          }
        }
        return <ProjectsPage onProjectClick={handleProjectClick} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onProjectClick={handleProjectClick} />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}