import React from 'react'
import { Grid, Typography, IconButton, Stack } from '@mui/material'
import { HomeCarousel } from '../components/HomeCarousel'
import { CardGrid } from '../components/CardGrid'
import { Footer } from '../components/Footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { HomeHero } from '../components/HomeHero'
import { Link } from 'react-router-dom'
import { LatestScreeningCard } from '../components/LatestScreeningCard'
export const Home = () => {
  return (
    <Grid container spacing={0} direction={'row'} marginTop={0} paddingLeft={0} paddingRight={0}>
    <Grid item md={12} xs={12} container direction={'column'}  marginBottom={4} marginTop={0}>
    <HomeCarousel/>
    {/* <HomeHero/> */}
    {/* <LatestScreeningCard/> */}
    </Grid>
    <Grid item>
      <CardGrid/>
    </Grid>

   
        <Grid item container justifyContent={'center'} alignItems={'center'} spacing={4} >
        <Grid item textAlign={'center'} md={12} >
            <Typography variant='h4' textAlign={'center'} fontFamily={'Open Sans, arial, sans-serif'}>A HUGE THANKS to our partners</Typography>
        </Grid>
        <Grid item container md={12}   justifyContent={'center'} alignItems={'center'}>
            <Grid item md={12}  >
                <Stack direction={'row'} spacing={3} justifyContent={'center'} alignItems={'center'}>
                <img src='https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/GWF-logo-blue.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true'/>
                <img src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Colyer_Ferguson-e0a5fc3.png/:/rs=h:100,cg:true,m'/>
                <img src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/KCF-Logo-Colour-Web-5b45e2cb5d499%20_sma-14583dc.png/:/rs=h:100,cg:true,m'/>
                <img src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/SKMBT_C22013070112300.png/:/rs=h:100,cg:true,m'/>
                <img src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/FHSE.jpg/:/rs=h:100,cg:true,m'/>
                </Stack>
            </Grid>
            </Grid>
            <Grid item md={12} textAlign={'center'}>
                <Typography variant='h4'>Supporters over the past 24 months</Typography>
            </Grid>
            <Grid item container md={12}  justifyContent={'center'} alignItems={'center'} spacing={1}>
            <Grid item md={12}>
                <Stack direction={'row'} spacing={3} justifyContent={'center'} alignItems={'center'}>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/rsz_comic-relief.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/sslogo.png/:/rs=h:100,cg:true,m"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/foyle-foundation.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/bfi_logo_transp.png/:/rs=h:100,cg:true,m"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Lottery-black.jpg/:/rs=h:100,cg:true,m"/>
                
                </Stack>
            </Grid>
            {/* Row 2 of images */}
            <Grid item md={12} >
                <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={20}>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/logo_2023.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/animation%20%20company.png/:/rs=h:100,cg:true,m"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/future%20youth.png/:/rs=h:100,cg:true,m"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/POW.png/:/rs=h:100,cg:true,m"/>
                </Stack>
            </Grid>
            {/*Row 3 of images */}
            <Grid item md={12}>
                <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={20}>
                <img src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/margate%20pride.jpe/:/rs=h:100,cg:true,m"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/oasis%202.png/:/rs=h:100,cg:true,m"/>
                <img src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/DYT.jpe/:/rs=h:100,cg:true,m"/>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/powell.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"/>
                <img src='//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/download%20(1).png/:/rs=h:100,cg:true,m'/>
                </Stack>
            </Grid>
            </Grid>
            <Grid item md={12}  justifyContent={'center'} alignItems={'center'} > 
            <IconButton>
                <FacebookIcon/>
            </IconButton>
            <IconButton component={Link} to={'https://www.instagram.com/ramsgatecinema/'}>
                <InstagramIcon/>
            </IconButton>
        </Grid>
        </Grid>
    

  </Grid>
  )
}
