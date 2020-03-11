import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import auth from 'utils/auth';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

type SignInPageProps = RouteComponentProps<{}, {}, { referrer: string }>;

const SignInPage: React.FC<SignInPageProps> = (props: SignInPageProps) => {
  const {
    history,
    location: { state },
  } = props;
  const { t } = useTranslation();

  const handleSignIn = (): void => {
    auth.signIn((): void => history.push(state?.referrer || ROUTES.DASHBOARD));
  };

  return (
    <>
      <Typography variant="h1">{t('SignInPage.title')}</Typography>
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        {t('SignInPage.signIn')}
      </Button>
    </>
  );
};

export default SignInPage;
