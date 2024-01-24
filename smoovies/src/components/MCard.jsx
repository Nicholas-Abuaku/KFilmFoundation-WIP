import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, IconButton, Stack, Typography, Icon, CardActionArea, Skeleton } from '@mui/material';
import PGIcon from '../assets/icons/bbfc-pg-certificate-uk-seeklogo.svg'
import { Link } from 'react-router-dom';
export const MCard = (props) => {
  function handleClick(){
    console.log(props.link)
  }
  return (
    <CardActionArea component={Link} to={props.link}>
    <Card sx={{ width:'29.59vw', height:'29vh', display:'flex', backgroundColor:'#F0F0ED ', color:'black'}} elevation={10}> 
   
        {/* <CardMedia component='img' image={props.img} title={props.title} sx={{ maxWidth:'8.5vw', minHeight:'29vh',  maxHeight:'29vh', objectFit:'cover', marginRight:'5px' }}/> */}
        <Skeleton variant='rectangular' width={400} height={274.05}/>
        <Box sx={{ wordWrap:'break-word', overflow:'auto'}}> 
            <Stack direction={'row'} spacing={10}>
            <Typography fontWeight={'bold'} variant='h5' fontFamily={'Open Sans, arial, sans-serif'}>{props.title}</Typography>
            <Icon>
                <img src={PGIcon} height={25} width={25}/>
            </Icon>
            </Stack>
            <Typography fontWeight={'bold'} variant='h6'>{props.date + " " + props.time}</Typography>
          
            <Typography sx={{marginTop:'10px'}}>{props.description}</Typography>
        </Box>
       
    </Card>
    </CardActionArea>
  )
}
