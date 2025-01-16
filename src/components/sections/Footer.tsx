import React from 'react';
import {useTranslations} from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="flex flex-col justify-center items-center m-4 py-2 border-t border-border text-muted-foreground text-sm space-y-2">
      <span>{t("madeWith")}</span>
      <span>© 2025 Douglas Brum</span>
    </footer>
  );
};
export default Footer;
