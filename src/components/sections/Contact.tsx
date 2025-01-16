'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import ContactForm from '@/components/form/ContactForm';

const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <section className="container">
      <h2 className="section-title">{t('title')}</h2>
      <div className="m-auto w-[300px] md:w-[450px] lg:w-[650px] flex justify-start flex-col items-center gap-4">
        <p className="w-full text-center">
          {t('description')}
        </p>
        <div className="w-full">
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
