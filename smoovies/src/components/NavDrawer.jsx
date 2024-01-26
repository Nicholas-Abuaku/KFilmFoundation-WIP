import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemText, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
export const NavDrawer = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
       <IconButton onClick={()=>setOpenDrawer(true)}>
        <MenuIcon/>
    </IconButton>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        <List sx={{ backgroundColor:'#339465', height:'100%' }}>
            <ListItem onClick={()=>setOpenDrawer(false)}>
                <Button component={Link} to={'/'} sx={{color:'white'}} >Home</Button>
            </ListItem>
            <ListItem>
            <Button component={Link} to={'/film-clubs'} sx={{color:'white'}}>Film Clubs</Button>
            </ListItem>
            <ListItem>
            <Button component={Link} to={'/press'} sx={{color:'white'}}>Press</Button>
            </ListItem>
            <ListItem>
            <Button component={Link} to={'/about'} sx={{color:'white'}}>About</Button>
            </ListItem>
            <ListItem>
            <Button component={Link} to={'/contact'} sx={{color:'white'}}>Contact Us</Button>
            </ListItem>
        </List>
    </Drawer>
 
    </>
  )
}
