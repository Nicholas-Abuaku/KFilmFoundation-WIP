import { Box, Card, CardActionArea, CardMedia, Paper, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

export const FilmClubCard = (props) => {
  return (
    <Paper elevation={4} sx={{ width:'430px', height:'100%', marginTop: '100px', marginBottom:'40px', marginLeft:'0.875rem' }} >
            <Card width={'100%'} height={'100%'}>
            <CardMedia component={'img'} height={'300px'} src={props.img}/>
                <CardContent>
                    <Stack spacing={0}>
                    <Typography textAlign={'center'} fontWeight={'bold'} variant='subtitle1'>{props.title}</Typography>
                    <Typography textAlign={'center'} variant='subtitle2'>{props.desc}</Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Paper>
  )
}
