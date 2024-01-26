import React, { useState } from 'react'
import {AppBar, Toolbar, IconButton, Button, Typography, Stack, CssBaseline, useTheme, useMediaQuery} from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import KentFilmLogo from '../assets/icons/Untitled_Artwork.jpg'
import { NavDrawer } from './NavDrawer';
import { Link } from 'react-router-dom';
export const Navigation2 = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position='static' elevation={0}>
        <Toolbar sx={{ backgroundColor:'#339465', width:'100%'}} >
            <IconButton component={Link} to={'/'}>
                <img src={KentFilmLogo} width={80} height={80}/>
            </IconButton>
            <Typography sx={{ flexGrow: '1', color:'white', fontWeight: 'bold' }} variant='h5'> Kent Film Foundation </Typography>
            {isMobile ? (<NavDrawer/>):(
                  <Stack direction={'row'} spacing={2}>
                  <Button variant="text" color='inherit' component={Link} to={'/'}>Home</Button>
                      <Button variant="text" color='inherit' component={Link} to={'/film-clubs'}>Film Clubs</Button>
                      <Button variant='text' color='inherit' component={Link} to={'/press'}>Press</Button>
                      <Button variant='text' color='inherit' component={Link} to={'/about'}>About</Button>
                      <Button variant='text' color='inherit' component={Link} to={'/contact'}>Contact Us</Button>
                      
                  </Stack>
            )}
        
        </Toolbar>
    </AppBar>
  )
}
