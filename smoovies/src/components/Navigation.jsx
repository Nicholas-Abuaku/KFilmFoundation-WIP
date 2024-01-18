import React from 'react'
import {AppBar, Toolbar, IconButton, Button, Typography, Stack} from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import KentFilmLogo from '../assets/images/KentFilmLogo.png'
import App from '../App';
import { Link } from 'react-router-dom';
export const Navigation = () => {
  return (
    <AppBar position='static' elevation={0}>
        <Toolbar sx={{ backgroundColor:'#339465', height:'150px'}}>
            <IconButton component={Link} to={'/'}>
                <img src={KentFilmLogo}/>
            </IconButton>
            <Typography sx={{ flexGrow: '1', color:'white', fontWeight: 'bold' }} variant='h5'> Kent Film Foundaton </Typography>
            <Stack direction={'row'} spacing={2}>
            <Button variant="outlined" color='inherit' component={Link} to={'/'}>Home</Button>
                <Button variant="outlined" color='inherit' component={Link} to={'/film-clubs'}>Film Clubs</Button>
                <Button variant='outlined' color='inherit'component={Link} to={'/contact'}>Contact Us</Button>
                <Button color='inherit' variant='outlined'component={Link} to={'/news'}>News</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
