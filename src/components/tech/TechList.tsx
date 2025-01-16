import React from 'react';
import {Project} from '@/data/projects';
import Icon from '@/components/Icon';

const TechList = ({project}: { project: Project }) => {

  return (
    <ul className="flex flex-wrap gap-4">
      {
        project.technologies.map((tech) => (
          <li key={tech.assetName}>
            <Icon key={tech.assetName} tech={tech} size={24} textHidden/>
          </li>
        ))
      }
    </ul>
  );
};
export default TechList;
