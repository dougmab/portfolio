'use client';

import React from 'react';
import {Project} from '@/data/projects';
import {useTranslations} from 'next-intl';
import HoverImage from '@/components/project/HoverImage';
import {Button} from '@/components/ui/button';
import TechList from '@/components/tech/TechList';
import {ExternalLink} from 'lucide-react';

const ProjectDisplay = (
  {project, left}: { project: Project, left: boolean }
) => {
  const t = useTranslations('Projects');

  return (
    <div
      className={`flex flex-col ${left ? 'md:flex-row' : 'md:flex-row-reverse'} overflow-hidden md:gap-4 justify-between items-start max-w-[100%] w-[400px] md:w-[1200px] lg:w-[1400px] h-auto bg-card text-card-foreground drop-shadow-lg p-6 pb-0 space-y-4 rounded-lg border border-border`}>
      <div className={`w-full md:mb-4 mt-10 lg:mt-20 space-y-2 ${left ? 'text-left' : 'text-right'} flex-1`}>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{project.name}</h3>
        <p>{t(project.description)}</p>
        <div className={`flex flex-col ${left ? 'items-start' : 'items-end'} gap-4`}>

          <TechList project={project}/>

          <div className="flex gap-0 md:gap-2 flex-col lg:flex-row">
            {project.url && (
              <Button asChild variant={'secondary'}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink/>
                  {t('view')}
                </a>
              </Button>
            )}
            <Button className="text-blue-600" asChild variant={'link'}>
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                {t('source')}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <HoverImage project={project}/>
    </div>
  );
};
export default ProjectDisplay;
