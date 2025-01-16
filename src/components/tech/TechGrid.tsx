import React from 'react';
import {Tech} from '@/data/tech';
import Icon from '@/components/Icon';

const TechGrid = ({techs}: { techs: Tech[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
      {techs.map((tech: Tech) => (
        <Icon tech={tech} key={tech.name}/>
      ))}
    </div>
  );
};
export default TechGrid;
