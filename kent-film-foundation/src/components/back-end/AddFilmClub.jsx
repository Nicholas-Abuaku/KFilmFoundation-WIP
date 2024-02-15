import { TextField, TextareaAutosize, Typography, Stack, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { FilmClubCard } from './FilmClubCard'
export const AddFilmClub = () => {
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    const [file,setFile] = useState();
    function handleHeadingChange(event){
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    function handleDescriptionChange(event){
        console.log(event.target.value);
        setDesc(event.target.value)
    }

    function getImage(event){
        setFile(URL.createObjectURL(event.target.files[0]))
    }
  return (

    <form>
        <Stack spacing={2} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Typography>Add Film Club</Typography>
        <FilmClubCard title={title} desc={desc}/>
        <TextField name="club-title" label="Club Heading" sx={{ width:'80%' }} onChange={handleHeadingChange}/>
        <TextField name='description' label="Description" rows={8} sx={{ width:'80%' }} onChange={handleDescriptionChange}/>
        <Button component="label" variant='contained'>
                Upload Image
                <input type='file' hidden onChange={getImage}/>
            </Button>
        </Stack>
        <Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} marginTop={5}>
            <Button variant='contained' color='success'>Submit</Button>
        </Stack>
       
    </form>
  )
}
