import React from 'react';
import {useTranslations} from 'next-intl';
import techs from '@/data/tech';
import TechCard from '@/components/tech/TechCard';

const Stack = () => {
  const t = useTranslations('Stack');
  const techArr = Object.values(techs);
  return (
    <section className="container">
      <h2 className="section-title">{t('title')}</h2>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        <TechCard techs={techArr} category={'language'}/>
        <TechCard techs={techArr} category={'frontend'}/>
        <TechCard techs={techArr} category={'backend'}/>
        <TechCard techs={techArr} category={'db'}/>
        <TechCard techs={techArr} category={'infra'}/>
      </div>
    </section>
  );
};

export default Stack;
