import { Box, Button, Stack, TextField, TextareaAutosize, Typography, useTheme, useMediaQuery, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

export const ContactForm = () => {
  const theme = useTheme();
  const textTheme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
    {isMobile ? (<Box width={'100%'} justifyContent={'center'} alignItems={'center'} margin={'auto'} >
        <form style={{ width:'100%' }}>
        <Typography textAlign={'left'} variant='h6' color={'#339465'}>Contact Us</Typography>
            <Stack direction={'column'} spacing={2}>
            <TextField name="Name" label="Name"/>
            <TextField name="Email" label="Email"/>
            <TextField name="mesasge" label="Message" multiline rows={8}/>
            <Button variant='contained' sx={{ backgroundColor:'#339465', borderRadius:'0px', width:'10px', alignSelf:'center' }}>Send</Button>
            </Stack>
            <Stack spacing={3} marginTop={'40px'}>
            <Typography textAlign={'center'} color={'#339465'} variant='h6'>PLEASE NOTE KENT FILM FOUNDATION HAS NO FULL TIME STAFF SO PLEASE BE PATIENT WITH US.</Typography>
            <Typography textAlign={'center'}>ALL OUR PROFESSIONAL FILM MENTORS UNDERTAKE AN ENHANCED DBS CHECK</Typography>
            <Typography textAlign={'center'} color={'#339465'}>KENT FILM FOUNDATION</Typography>
            <Typography textAlign={'center'}>Ramsgate Youth Centre, High St, St Lawrence Ramsgate, CT11 0QG</Typography>
            </Stack>
            
        </form>
    </Box>) : (
      <Box width={'800px'} justifyContent={'center'} alignItems={'center'} margin={'auto'} >
      <form>
      <Typography textAlign={'left'} variant='h6' color={'#339465'}>Contact Us</Typography>
          <Stack direction={'column'} spacing={2}>
          <TextField name="Name" label="Name"/>
          <TextField name="Email" label="Email"/>
          <TextField name="mesasge" label="Message" multiline rows={8}/>
          <Button variant='contained' sx={{ backgroundColor:'#339465', borderRadius:'0px', width:'10px', alignSelf:'center' }}>Send</Button>
          </Stack>
          <Stack spacing={3} marginTop={'40px'}>
          <Typography textAlign={'center'} color={'#339465'} variant='h6'>PLEASE NOTE KENT FILM FOUNDATION HAS NO FULL TIME STAFF SO PLEASE BE PATIENT WITH US.</Typography>
          <Typography textAlign={'center'}>ALL OUR PROFESSIONAL FILM MENTORS UNDERTAKE AN ENHANCED DBS CHECK</Typography>
          <Typography textAlign={'center'} color={'#339465'}>KENT FILM FOUNDATION</Typography>
          <Typography textAlign={'center'}>Ramsgate Youth Centre, High St, St Lawrence Ramsgate, CT11 0QG</Typography>
          </Stack>
          
      </form>
  </Box>
    )}
    </>
   
  )
}
