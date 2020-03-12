import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import ROUTES from 'router/routes';
import auth from 'auth';
import Container from 'fragments/Container';
/* -------------------------------------------------------------------------- */

type SignInProps = RouteComponentProps<{}, {}, { referrer: string }>;

const SignIn: React.FC<SignInProps> = props => {
  const {
    history,
    location: { state },
  } = props;
  const { t } = useTranslation();

  const handleSignIn = (): void => auth.signIn((): void => history.push(state?.referrer || ROUTES.DASHBOARD));

  return (
    <Container helmetTitle={t('SignIn.title')}>
      <Typography variant='h3'>{t('SignIn.title')}</Typography>
      <Button variant='contained' color='primary' onClick={handleSignIn}>
        {t('SignIn.signIn')}
      </Button>
    </Container>
  );
};

export default SignIn;
