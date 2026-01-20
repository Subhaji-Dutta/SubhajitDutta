import { ArrowLeft, CheckCircle2, Target, Lightbulb, TrendingUp, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import styles from '../styles/font.module.css';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <div className="absolute inset-0">
          <img src={project.image} style={{aspectRatio:"3.1"}} />

          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <button
            onClick={onBack}
            className={`${styles.paraText} flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 w-fit`}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
          
          <div className="inline-block mb-3">
            <span className={`${styles.paraText} px-4 py-1.5 bg-red-600 text-white rounded-full text-sm`}>
              {project.category}
            </span>
          </div>
          
          <h1 className={`${styles.logoText} text4xl md:text-6xl mb-4 max-w-4xl`}>
            {project.title}
          </h1>
          
          <p className={`${styles.paraText} text-xl md:text-2xl text-gray-300 max-w-3xl`}>
            {project.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className={`${styles.headText} text-3xl mb-6 flex items-center gap-3`}>
                <div className={`${styles.headText} w-1 h-8 bg-red-600 rounded-full`} />
                Project Overview
              </h2>
              <p className={`${styles.paraText} text-gray-300 text-lg leading-relaxed`}>
                {project.fullDescription}
              </p>
            </section>

            {/* Challenges */}
            <section>
              <h2 className={`${styles.headText} text-3xl mb-6 flex items-center gap-3`}>
                <Target className="text-red-600" size={32} />
                Challenges
              </h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className={`${styles.paraText} text-gray-300 leading-relaxed`}>
                  {project.challenges}
                </p>
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className={`${styles.headText} text-3xl mb-6 flex items-center gap-3`}>
                <Lightbulb className="text-red-600" size={32} />
                Solution
              </h2>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <p className={`${styles.paraText} text-gray-300 leading-relaxed`}>
                  {project.solution}
                </p>
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className={`${styles.headText} text-3xl mb-6 flex items-center gap-3`}>
                <TrendingUp className="text-red-600" size={32} />
                Results & Impact
              </h2>
              <div className="bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/20 rounded-lg p-6">
                <p className={`${styles.paraText} text-gray-300 leading-relaxed`}>
                  {project.results}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.logoText} block w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 sticky top-24`}
              >
                <ExternalLink size={20} />
                View Live Project
              </a>
            )}
                        
            {/* Technologies */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className={`${styles.logoText} text-xl mb-4 flex items-center gap-2`}>
                <CheckCircle2 className="text-red-600" size={24} />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`${styles.paraText} px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className={`${styles.logoText} text-sm text-gray-400 mb-3`}>Key Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${styles.paraText} px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs border border-red-600/30`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Mockups */}
        {project.mockupImages && project.mockupImages.length > 0 && (
          <section className="mt-16">
            <h2 className={`${styles.headText} text-3xl mb-8 flex items-center gap-3`}>
              <div className="w-1 h-8 bg-red-600 rounded-full" />
              Project Mockups
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.mockupImages.map((img, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 hover:border-red-600/50 transition-all duration-300"
                >
            <img key={index} src={img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}