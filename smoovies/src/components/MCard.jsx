import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, IconButton, Stack, Typography, Icon } from '@mui/material';
import PGIcon from '../assets/icons/bbfc-pg-certificate-uk-seeklogo.svg'
export const MCard = (props) => {
  return (
    <Card sx={{ width:'29.59vw', height:'29vh', display:'flex', backgroundColor:'#F0F0ED ', color:'black'}} elevation={10}> 
        <CardMedia image={props.img} title={props.title} sx={{ minWidth:'8.5vw', minHeight:'27.51vh', objectFit:'cover', marginRight:'5px' }}/>
        <Box sx={{ wordWrap:'break-word'}}>
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
  )
}
