import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import LocaleMenu from '@/components/LocaleMenu';
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Menu} from 'lucide-react';
import {useTranslations} from 'next-intl';

const Nav = () => {
  const t = useTranslations("Nav")

  return (
    <nav className="fixed w-full p-2 bg-primary text-primary-foreground uppercase z-50">
      <div className="container grid grid-cols-3 gap-2 items-center">
        <h1 className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider">
          Douglas <span className="hidden md:inline">Brum</span>
        </h1>

        <ul className="flex text-sm sm:text-base justify-center gap-2 sm:gap-4 w-full">
          <li>
            <a href="#">{t('home')}</a>
          </li>
          <li>
            <a href={'#'}>{t('projects')}</a>
          </li>
          <li>
            <a href={'#'}>{t('contact')}</a>
          </li>
        </ul>

        <div className="hidden gap-4 items-center justify-end md:flex">
          <LocaleMenu/>
          <ThemeToggle/>
        </div>
        <div className="flex justify-end md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ThemeToggle asSubContent/>
              <LocaleMenu asSubContent/>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
