import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
/* -------------------------------------------------------------------------- */

const SignUpPage: React.FC<{}> = () => {
  const { t } = useTranslation();
  return <Typography variant="h1">{t('SignUpPage.title')}</Typography>;
};

export default SignUpPage;
