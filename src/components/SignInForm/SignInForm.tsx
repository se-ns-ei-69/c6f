import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LoginButton from '../LoginButton/LoginButton';

const SignInForm = () => {
  return (
    <>
      <CssBaseline />
      <Box component="div" sx={{ mt: 1 }}>
        <LoginButton/>
      </Box>
    </>
  );
};

export default SignInForm;
