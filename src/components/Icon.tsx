'use client';

import React, {Suspense} from 'react';
import {Tech} from '@/data/tech';
import {animated, useSpring} from '@react-spring/web';
import {LazySvg} from '@/components/LazySVG';
import Spinner from '@/svg/spinner.svg'

const Icon = ({tech, size, textHidden}: { tech: Tech, size?: number, textHidden?: boolean }) => {
  const [style, api] = useSpring(() => ({
    transform: 'scale(1)',
    config: {friction: 10}
  }));

  const handleMouseEnter = () => {
    api.start({transform: 'scale(1.3)'});
  };

  const handleMouseExit = () => {
    api.start({transform: 'scale(1)'});
  };

  size = size || 36;

  return (
    <animated.div key={tech.name} className="flex flex-col items-center gap-2" style={style}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseExit}
    >
      <Suspense fallback={<Spinner width={size} height={size}/>}>
        <LazySvg name={tech.assetName} aria-label={tech.name} width={size} height={size}/>
      </Suspense>
      {!textHidden && <span className="text-center text-sm">{tech.name}</span>}
    </animated.div>
  );
};

export default Icon;
