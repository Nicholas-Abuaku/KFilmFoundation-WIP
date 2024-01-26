import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, CardHeader, Typography, useTheme, useMediaQuery, createTheme} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
export const LatestScreeningCard = (props) => {
    const theme = useTheme();
    const textTheme = createTheme();
    textTheme.typography.h1={
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
      },
    }

    textTheme.typography.h4={
      fontSize: '0.8rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
      },
    }
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    isMobile ? (
      <>
      <CardActionArea>
    <Card sx={{ display:'inline'}} width={'92.44vw'} height={'63.49vh'}>
      <Box>
    <CardMedia component={'img'} width={'4px'} height={'100%'} src={props.img} sx={{ objectFit:'objectFit', marginRight:'0px' }}/>
    </Box>
    <CardContent sx={{ backgroundColor:'#1A1A1A', color:'white', wordBreak:'break-word'  }}>
      <ThemeProvider theme={textTheme}>
        <Typography textAlign={'center'} variant='h1'>{props.title}</Typography>
        
        <Typography color={'white'}  paddingBottom={4} textAlign={'center'} variant='h4'>{props.date}</Typography>
        <Typography color={'red'}  paddingBottom={4} textAlign={'center'} variant='h5'>Tickets</Typography>
        </ThemeProvider>
    </CardContent>
</Card>
</CardActionArea>
      </>
    ):(
    <CardActionArea>
    <Card sx={{ display:'flex'}} width={'92.44vw'} height={'63.49vh'}>
      <Box>
    <CardMedia component={'img'} width={'100%'} height={'100%'} src={props.img} sx={{ objectFit:'cover', marginRight:'0px' }}/>
    </Box>
    <CardContent sx={{ backgroundColor:'#1A1A1A', color:'white', wordBreak:'break-word' }}>
        <Typography textAlign={'center'} variant='h1'>{props.title}</Typography>
        <Typography color={'white'}  paddingBottom={4} textAlign={'center'} variant='h4'>{props.date}</Typography>
        <Typography color={'red'}  paddingBottom={4} textAlign={'center'} variant='h5'>Tickets</Typography>
    </CardContent>
</Card>
</CardActionArea>
    )
  )
}
