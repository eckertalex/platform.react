import { Typography } from '@material-ui/core';
import LanguagePicker from 'components/LanguagePicker';
import React from 'react';

import { useTranslation } from 'react-i18next';
import Container from 'fragments/Container';
/* -------------------------------------------------------------------------- */

const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container helmetTitle={t('Settings.title')}>
      <Typography variant='h3'>{t('Settings.title')}</Typography>
      <LanguagePicker />
    </Container>
  );
};

export default Settings;
