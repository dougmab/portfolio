import React from 'react';
import {useTranslations} from 'next-intl';
import projects, {Project} from '@/data/projects';
import ProjectDisplay from '@/components/project/ProjectDisplay';

const Projects = () => {
  const t = useTranslations('Projects');
  const featuredProjects: Project[] = [
    projects['storem'],
    projects.yabbl,
    projects['open-vinyl-box'],
    projects.ygibringer
  ];

  let toLeft = false;

  return (
    <section className="container">
      <h2 className="section-title">{t('title')}</h2>
      <div className="flex flex-col items-center gap-4">
        {featuredProjects.map((project: Project) => (
          <ProjectDisplay key={project.name} project={project} left={toLeft = !toLeft}/>
        ))}
      </div>
    </section>
  );
};
export default Projects;
