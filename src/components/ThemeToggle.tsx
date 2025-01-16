'use client';

import * as React from 'react';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

import {Button} from '@/components/ui/button';
import {DropdownMenuItem} from '@/components/ui/dropdown-menu';
import {useTranslations} from 'next-intl';

const ThemeToggle = ({asSubContent}: { asSubContent?: boolean }) => {
  const {setTheme, theme} = useTheme();
  // Just to solve some hydration error
  const [mounted, setMounted] = React.useState(false);
  const t = useTranslations('Nav');

  React.useEffect(() => setMounted(true), []);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (asSubContent)
    return (
      <DropdownMenuItem onClick={changeTheme}>
        {mounted && theme === 'dark' ? (
          <Sun/>
        ) : (
          <Moon/>
        )}
        {t(`${theme === 'light' ? 'dark' : 'light'}-theme`)}
      </DropdownMenuItem>
    );

  return (
    <Button variant={'outline'} size={'icon'} className="bg-transparent"
            onClick={changeTheme}>
      {mounted && theme === 'dark' ? (
        <Sun/>
      ) : (
        <Moon/>
      )}
    </Button>);
};

export default ThemeToggle;