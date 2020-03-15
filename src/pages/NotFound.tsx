import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { APP } from 'router/routes';
import Container from 'fragments/Container';
/* -------------------------------------------------------------------------- */

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container helmetTitle={t('NotFound.pageNotFound')} noIndex>
      <Typography variant='h3'>404</Typography>
      <Typography variant='h4'>{t('NotFound.pageNotFound')}</Typography>
      <Button component={Link} to={APP.DASHBOARD} variant='contained' color='primary'>
        {t('NotFound.backToSafety')}
      </Button>
    </Container>
  );
};

export default NotFound;
