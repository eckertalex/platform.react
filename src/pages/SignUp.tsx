import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'fragments/Container';
/* -------------------------------------------------------------------------- */

const SignUp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container helmetTitle={t('SignUp.title')}>
      <Typography variant='h3'>{t('SignUp.title')}</Typography>
    </Container>
  );
};

export default SignUp;
