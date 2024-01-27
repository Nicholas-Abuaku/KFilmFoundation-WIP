import React from 'react'
import {Typography, useTheme, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const textTheme = createTheme();
  textTheme.typography.h6={
    fontSize: '0.1 rem',
    fontFamily:'Open Sans, arial, sans-serif',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  }
  return (
    <>
    <ThemeProvider theme={textTheme}>
    <Typography variant='h6' textAlign={'center'}>COPYRIGHT © 2024 KENT FILM FOUNDATION - ALL RIGHTS RESERVED.</Typography>
    </ThemeProvider>
    </>
  )
}


