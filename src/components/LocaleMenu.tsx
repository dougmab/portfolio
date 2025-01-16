'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


import React, {useState} from 'react';
import {Link, routing, usePathname} from '@/i18n/routing';
import {Button} from '@/components/ui/button';
import {BookA, ChevronDown} from 'lucide-react';
import {useLocale, useTranslations} from 'next-intl';

const LocaleOptions = () => {
  const pathname = usePathname();

  return routing.locales.map((locale) => (
        <Link href={pathname} locale={locale} key={locale}>
          <DropdownMenuItem>
            {locale.toUpperCase()}
          </DropdownMenuItem>
        </Link>
      ))
}

const LocaleMenu = ({asSubContent}: { asSubContent?: boolean }) => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Nav")

  if (asSubContent)
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <BookA/>
          {t('language')} ({locale.toUpperCase()})
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <LocaleOptions/>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    )

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className="bg-transparent">
          {locale.toUpperCase()} <ChevronDown/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <LocaleOptions/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LocaleMenu;
