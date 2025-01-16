'use client';

import React, {useEffect, useState} from 'react';
import {animated, useSpring} from '@react-spring/web';
import Image from 'next/image';
import {Project} from '@/data/projects';

const HoverImage = (
  {project}: { project: Project }
) => {
  // TODO: Fix animation skipping initial state animation after completely finishing hover animation
  const [hovered, setHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const styles = useSpring({
    transform: (windowWidth < 750 || hovered) ? 'translateY(0)' : 'translateY(16px)',
    config: {tension: 170, friction: 26},
  });

  // TODO: Refactor this shitty HTML
  return (
    <div className="flex flex-col justify-end self-end flex-1">
      <animated.div
        className="relative p-2 pb-0 border border-b-none rounded-lg rounded-b-none border-border md:w-[400px] lg:w-[500px] xl:w-[750px]"
        style={styles}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div className={`overflow-hidden rounded-md rounded-b-none w-full`}>
          <a href={project.img} target="_blank" rel="noopener noreferrer">
            <Image src={project.img} alt={project.name}
                   className="object-cover contain-layout w-full rounded-md rounded-b-none" width={800} height={365}/>
          </a>
        </div>
      </animated.div>
    </div>

  );
};
export default HoverImage;
