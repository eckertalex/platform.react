import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ROUTES from 'constants/routes';
import LanguagePicker from 'components/Fragments/LanguagePicker';
/* -------------------------------------------------------------------------- */

const LandingPage: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h1">{t('LandingPage.title')}</Typography>
      <Button component={Link} to={ROUTES.SIGN_IN} variant="contained" color="primary">
        {t('LandingPage.toSignInPage')}
      </Button>
      <LanguagePicker />
    </>
  );
};

export default LandingPage;
