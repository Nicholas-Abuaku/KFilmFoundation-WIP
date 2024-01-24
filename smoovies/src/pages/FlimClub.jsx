import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, IconButton, Stack, Typography, Icon, Paper, Grid } from '@mui/material';
export const FilmClub = () => {
  return (
    <>
    <Grid container spacing={1} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12} md={12}>
        <Paper elevation={24} sx={{ width:'64.16vw', height:'65.18vh', margin:'auto',  marginTop: '40px', marginBottom:'80px'}}>
        <Card width={'64.16vw'} height={'65.18vh'} sx={{ backgroundColor:'#88A79A' }}>
            <CardMedia component={'img'} height={'100%'} src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Girls%20film%20club%201.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true'/>
            <CardContent>
                <Stack spacing={2}>
                <Typography textAlign={'center'} variant='h5' color={'white'}>FREE YOUTH FILM CLUBS EVERY MONDAY (term time only) 6-8pm</Typography>
                <Typography textAlign={'center'} color={'white'}>For more information contact:   kentfilmfoundation@gmail.com  </Typography>
                </Stack>
            </CardContent>
        </Card>
    </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
    <Paper elevation={4} sx={{ width:'90%', height:'50%', marginLeft:'0.875rem', marginTop: '40px' }}>
        <Card width={'100%'} height={'100%'}>
            <CardMedia component={'img'} height={'300px'} src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/36017984913_a367a47e19_b.jpg/:/cr=t:7.16%25,l:0%25,w:100%25,h:85.68%25/rs=w:600,h:300,cg:true'/>
            <CardContent>
                <Stack spacing={2}>
                <Typography textAlign={'center'} fontWeight={'bold'}>ARE YOU INTERESTED IN MAKING WILDLIFE/NATURE FILMS?</Typography>
                <Typography textAlign={'center'}>BRAND NEW FOR THIS YEAR Free course for young adults 16 - 25 years olds For more information contact:</Typography>
                <Typography textAlign={'center'}>  kentfilmfoundation@gmail.com </Typography>
                </Stack>
            </CardContent>
        </Card>
    </Paper>
    </Grid>

    <Grid item xs={12} md={3}>
    <Paper elevation={4} sx={{ width:'90%', height:'50%', marginLeft:'0.875rem', marginTop: '100px', marginBottom:'40px' }}>
        <Card width={'100%'} height={'100%'}>
            <CardMedia component={'img'} height={'300px'} src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/2-275845-Main-600x450-7.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:600,h:300,cg:true'/>
            <CardContent>
                <Stack spacing={2}>
                <Typography textAlign={'center'} fontWeight={'bold'}>A fun experience with filmmakers</Typography>
                <Typography textAlign={'center'}>Our award-winning film mentors are from professional arts and media backgrounds. We also invite guest speakers from the world of film and television. Guest speakers have included OSCAR and BAFTA winning Actors, Directors, Producer,s Propmakes, Make Up Artists and Screenwriters.</Typography>
                </Stack>
            </CardContent>
        </Card>
    </Paper>
    </Grid>

    <Grid item xs={12}  md={3}>
    <Paper elevation={4} sx={{ width:'100%', height:'100%', marginTop: '100px', marginBottom:'40px', marginLeft:'0.875rem' }} >
        <Card width={'100%'} height={'100%'}>
            <CardMedia component={'img'} height={'300px'} src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/ff5ef498a6974abbf9f8cbb269fac47a628a60a5.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300'/>
            <CardContent>
                <Stack spacing={0}>
                <Typography textAlign={'center'} fontWeight={'bold'}>We offer a range of film clubs</Typography>
                <Typography textAlign={'center'}>Girl's Film Club (ages 13-19)</Typography>
                <Typography textAlign={'center'}>New Talent Film Club (ages 14-19)</Typography>
                <Typography textAlign={'center'}>LGBT Film Club (ages 15-19)</Typography>
                <Typography textAlign={'center'}>Wildlife Cinematographer Programme is for young adults 16 - 25</Typography>
                </Stack>
            </CardContent>
        </Card>
    </Paper>
    </Grid>

    </Grid>
    </>
  )
}
