import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, IconButton, Stack, Typography, Icon, CardActionArea } from '@mui/material';
import PGIcon from '../assets/icons/bbfc-pg-certificate-uk-seeklogo.svg'
export const MCard = (props) => {
  return (
    <CardActionArea>
    <Card sx={{ width:'29.59vw', height:'29vh', display:'flex', backgroundColor:'#F0F0ED ', color:'black'}} elevation={10}> 
   
        <CardMedia component='img' image={props.img} title={props.title} sx={{ maxWidth:'8.5vw', maxHeight:'27.51vh', objectFit:'cover', marginRight:'5px' }}/>
        <Box sx={{ wordWrap:'break-word', overflow:'auto'}}>
            <Stack direction={'row'} spacing={10}>
            <Typography fontWeight={'bold'} variant='h5'>{props.title}</Typography>
            <Icon>
                <img src={PGIcon} height={25} width={25}/>
            </Icon>
            </Stack>
            <Typography fontWeight={'bold'} variant='h6'>{props.date}</Typography>
            <Typography fontWeight={'bold'} variant='h7'>Running Time: {props.runningTime} mins</Typography>
            {/* <hr/> */}
            <Typography sx={{marginTop:'10px'}}>{props.description}</Typography>
        </Box>
       
    </Card>
    </CardActionArea>
  )
}
