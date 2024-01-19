import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, CardHeader, Typography } from '@mui/material';
export const LatestScreeningCard = (props) => {
    
  return (
    <CardActionArea>
    <Card sx={{ display:'flex'}} width={1775} height={600}>
    <CardMedia component={'img'} width={1280} height={720} src={props.img} sx={{ objectFit:'cover', marginRight:'0px' }} />
    <CardContent sx={{ backgroundColor:'#1A1A1A', color:'white' }}>
        <Typography textAlign={'center'} variant='h1'>{props.title}</Typography>
        <Typography color={'white'}  paddingBottom={4} textAlign={'center'} variant='h4'>{props.date}</Typography>
        <Typography color={'red'}  paddingBottom={4} textAlign={'center'} variant='h5'>Tickets</Typography>
    </CardContent>
</Card>
</CardActionArea>
  )
}
