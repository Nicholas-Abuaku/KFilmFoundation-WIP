import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader } from '@mui/material';
export const HomeHero = () => {
  return (
    <Card sx={{ display:'flex'}}>
        <CardMedia component={'img'} width={844} height={400} src='/src/assets/images/placeholder2.png' />
        <CardContent sx={{ backgroundColor:'#1A1A1A', color:'white' }}>
            <Typography textAlign={'center'}>Welcome</Typography>
            <Typography color={'white'} variant='h4' paddingBottom={20} textAlign={'center'}>WE OFFER FREE FILM WORKSHOPS & SCREENINGS</Typography>
            <Typography color={'white'} textAlign={'center'}>Please contact us <a href='#' style={{ color:'red' }}>here</a> for more detail</Typography>
        </CardContent>
    </Card>
  )
}
