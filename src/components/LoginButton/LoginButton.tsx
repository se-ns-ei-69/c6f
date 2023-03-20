import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@mui/material';

const LoginButton = () => {
  const { t } = useTranslation();

  return (
    <Link
      // eslint-disable-next-line max-len
      href={`${process.env.REACT_APP_BUNGIE_BASEURL}OAuth/Authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&state=xyzABC123`}
      underline="none">
      {t('buttons.login')}
    </Link>
  );
};

export default LoginButton;
