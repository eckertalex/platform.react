import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ROUTES from 'router/routes';
import Container from 'fragments/Container';
/* -------------------------------------------------------------------------- */

const Landing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container helmetTitle={t('Landing.title')}>
      <Typography variant='h3'>{t('Landing.title')}</Typography>
      <Button component={Link} to={ROUTES.AUTH.SIGN_IN} variant='contained' color='primary'>
        {t('Landing.toSignIn')}
      </Button>
    </Container>
  );
};

export default Landing;
