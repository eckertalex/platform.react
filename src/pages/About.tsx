import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'fragments/Container';
/* -------------------------------------------------------------------------- */

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container helmetTitle={t('About.title')}>
      <Typography variant='h3'>{t('About.title')}</Typography>
    </Container>
  );
};

export default About;
