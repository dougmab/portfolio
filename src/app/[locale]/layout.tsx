import '../globals.css';
import React from 'react';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import {ThemeProvider} from '@/contexts/theme-provider';
import {Manrope} from 'next/font/google';
import {Toaster} from '@/components/ui/toaster';
import {Metadata} from 'next';

export async function generateMetadata({params: {locale}}: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title'),
    description: t('description')
  };
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap'
});

export default async function RootLayout({
                                           children,
                                           params: {locale}
                                         }: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  if (!routing.locales.includes(locale as 'pt' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
    <body className={manrope.className}>
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {children}
        <Toaster/>
      </ThemeProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
