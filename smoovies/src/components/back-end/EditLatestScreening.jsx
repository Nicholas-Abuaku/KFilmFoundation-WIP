import React, { useState } from 'react'
import { LatestScreeningCard } from '../LatestScreeningCard';
import { Button, Stack, TextField } from '@mui/material';
export const EditLatestScreening = () => {
    const [file,setFile] = useState()
    function getImage(event){
        setFile(URL.createObjectURL(event.target.files[0]))
    }

   const [title,setTitle] = useState();
   const [date,setDate] = useState();
   const [eventUrl,setEventUrl] = useState();
    function handleTitleChange(e){
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function handleDateChange(e){
        console.log(e.target.value)
        setDate(e.target.value)
    }

    function handleUrlChange(e){
        console.log(e.target.value)
        setEventUrl(e.target.value)
    }
  return (
    <>
    <LatestScreeningCard img={file} title={title} date={date} ticketLink={eventUrl}/>
    <form style={{ marginTop:'50px' }}>
        <Stack spacing={2} width={'100%'} justifyContent={'center'} alignItems={'center'}>
            <TextField name='title' label='Title' onChange={handleTitleChange} sx={{ width:'50%' }}/>
            <TextField name='date' label='Date' onChange={handleDateChange} sx={{ width:'50%' }}/>
        </Stack>
        <Stack direction={'row'} spacing={2} marginTop={5} justifyContent={'center'} alignItems={'center'} >
        <Button component="label" variant='contained'>
                Upload Image
                <input type='file' hidden onChange={getImage}/>
            </Button>
        <Button variant='contained'  sx={{ backgroundColor:'#339465'}}>Submit</Button>
        </Stack>
    </form>
    </>
    
  )
}
