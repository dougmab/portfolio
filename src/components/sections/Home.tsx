import React from 'react';
import {useTranslations} from 'next-intl';
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai';
import {RiBlueskyFill, RiTwitterXFill} from 'react-icons/ri';
import {Button} from '@/components/ui/button';
import Image from 'next/image';

const Home = () => {
  const t = useTranslations('Home');

  return (
    <main className="bg-primary text-primary-foreground">
      <div
        className="container relative grid grid-rows-[auto_auto_auto] lg:grid-cols-2 lg:grid-rows-none gap-6 place justify-items-center md:place-items-center min-h-screen p-4 pt-[68px] lg:pt-0 text-shadow">
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-[300px] sm:w-[450px] z-10">
            <h1 className="text-lg xl:text-2xl font-extrabold mb-4">
              {t('presentation')}
              <span className="block text-4xl sm:text-5xl md:text-7xl xl:text-8xl uppercase">
              Douglas Brum
            </span>
            </h1>
            <p className="text-4xl font-bold mb-8">
              {t('description')} <span className="underline">{t('role')}</span>
            </p>
            <div className="flex md:items-center flex-col md:flex-row justify-between gap-4">
              <div className="flex gap-2">
                <a href="https://x.com/dougmab" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                  <RiTwitterXFill size={36}/>
                </a>
                <a href="https://bsky.app/profile/dougmab.bsky.social" target="_blank" rel="noopener noreferrer"
                   title="Bluesky">
                  <RiBlueskyFill size={36}/>
                </a>
                <a href="https://instagram.com/dougmab/" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <AiOutlineInstagram size={36}/>
                </a>
                <a href="https://github.com/dougmab" target="_blank" rel="noopener noreferrer" title="Github">
                  <AiFillGithub size={36}/>
                </a>
                <a href="https://linkedin.com/in/doug-brum/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <AiFillLinkedin size={36}/>
                </a>
              </div>
              <div>
                <Button variant={'secondary'} size={'lg'}>
                  {t('resume')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-full bg-secondary overflow-hidden aspect-square lg:absolute w-[300px] md:w-[400px] 2xl:w-[600px]">
          <Image src="/assets/img/profile.png" alt="profile" priority width={500}
               height={500} className="object-cover contain-layout w-full scale-105" /> {/* That scale is just to fix the gap left by the image */}
        </div>
        <div className="w-full flex justify-center lg:justify-end">
          <article className="w-[300px] md:w-[450px] z-10 text-right">
            <h2 className="text-4xl font-bold mb-2">
              {t('About.title')}
            </h2>
            <p className="text-xl font-semibold">
              {t('About.description')}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Home;
