import { Drawer, ListItem, ListItemText, List } from '@mui/material'
import React from 'react'

export const AdminNav = () => {
  return (
    <Drawer>
        <List>
            {["Dashboard", "Film Clubs", "Featured Film"].map((text,index)=>{
                <ListItem button key={text}>
                    <ListItemText primary={text}/>
                </ListItem>
            })}
        </List>
    </Drawer>
  )
}
