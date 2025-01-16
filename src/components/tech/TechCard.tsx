import React from 'react';
import {Tech, TechCategory} from '@/data/tech';
import {useTranslations} from 'next-intl';
import TechGrid from '@/components/tech/TechGrid';

const TechCard = ({techs, category}: { techs: Tech[], category: TechCategory }) => {
  const t = useTranslations('Stack');

  return (
    <div className="border border-border w-[400px] max-w-[90%] rounded-sm p-2 drop-shadow-lg bg-card text-card-foreground">
      <h3 className="text-2xl ml-2 mb-4 font-semibold">{t(category)}</h3>
      <TechGrid techs={
        techs.filter((tech: Tech) => tech.category === category)
      }/>
    </div>
  );
};

export default TechCard;
