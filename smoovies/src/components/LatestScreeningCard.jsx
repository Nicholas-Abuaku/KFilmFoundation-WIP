import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, CardHeader, Typography, useTheme, useMediaQuery, createTheme} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';
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
    <Card sx={{ display:'inline', width:'100%'}}>
      <Box>
    <CardMedia component={'img'} width={'900px'} height={'100%'} src={props.img} sx={{ objectFit:'objectFit', marginRight:'0px' }}/>
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
    <Card sx={{ display:'flex'}} width={'900px'} height={'63.49vh'}>
      <Box  maxHeight={'500px'} maxWidth={'974px'}>
    <CardMedia component={'img'}  height={'100%'} src={props.img} sx={{ objectFit:'fill', marginRight:'0px', width:'100%' }}/>
    </Box>
    <CardContent sx={{ backgroundColor:'#1A1A1A', color:'white', wordBreak:'break-word', width:'50%' }}>
        <Typography textAlign={'center'} variant='h1'>{props.title}</Typography>
        <Typography color={'white'}  paddingBottom={4} textAlign={'center'} variant='h4'>{props.date}</Typography>
        <Typography color={'red'}  paddingBottom={4} textAlign={'center'} paddingLeft={'420px'} variant='h5' component={Link} to={props.ticketLink}>Tickets</Typography>
    </CardContent>
</Card>
</CardActionArea>
    )
  )
}
