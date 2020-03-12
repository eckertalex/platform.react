import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'fragments/Container';
/* -------------------------------------------------------------------------- */

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container helmetTitle={t('Dashboard.title')}>
      <Typography variant='h3'>{t('Dashboard.title')}</Typography>
    </Container>
  );
};

export default Dashboard;
