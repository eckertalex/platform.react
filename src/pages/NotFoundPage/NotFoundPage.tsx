import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

const NotFoundPage: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">{t('NotFoundPage.pageNotFound')}</Typography>
      <Button component={Link} to={ROUTES.DASHBOARD} variant="contained" color="primary">
        {t('NotFoundPage.backToSafety')}
      </Button>
    </>
  );
};

export default NotFoundPage;
