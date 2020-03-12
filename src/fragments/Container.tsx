import React, { ReactNode } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

type BasicContainerProps = {
  children: ReactNode;
  helmetTitle: string;
  helmetContent?: string;
  noIndex?: boolean;
};

const BasicContainer: React.FC<BasicContainerProps> = props => {
  const { helmetTitle, helmetContent, children, noIndex } = props;
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name='description' content={helmetContent || helmetTitle} />
        {noIndex && <meta name='robots' content='noindex, nofollow'></meta>}
      </Helmet>
      <Container maxWidth='lg' disableGutters className={classes.container}>
        {children}
      </Container>
    </>
  );
};

BasicContainer.defaultProps = {
  noIndex: false,
};

export default BasicContainer;
