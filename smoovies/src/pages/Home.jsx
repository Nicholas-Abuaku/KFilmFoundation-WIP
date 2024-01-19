import React from 'react'
import { Grid, Typography, IconButton } from '@mui/material'
import { HomeCarousel } from '../components/HomeCarousel'
import { CardGrid } from '../components/CardGrid'
import { Footer } from '../components/Footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { HomeHero } from '../components/HomeHero'
import { LatestScreeningCard } from '../components/LatestScreeningCard'
export const Home = () => {
  return (
    <Grid container spacing={0} direction={'row'} marginTop={0} paddingLeft={0} paddingRight={0}>
    <Grid item xs={12} container direction={'column'}  marginBottom={4} marginTop={0}>
    <HomeCarousel/>
    {/* <HomeHero/> */}
    {/* <LatestScreeningCard/> */}
    </Grid>
    <Grid item>
      <CardGrid/>
    </Grid>
    <Grid item xs={12} justifyContent={'center'} alignItems={'center'} > 
            <IconButton>
                <FacebookIcon/>
            </IconButton>
            <IconButton>
                <InstagramIcon/>
            </IconButton>
        </Grid>
   
        <Grid item container justifyContent={'center'} alignItems={'center'} spacing={4} >
        <Grid item textAlign={'center'} xs={12}>
            <Typography variant='h4' textAlign={'center'}>A HUGE THANKS to our partners</Typography>
        </Grid>
            <Grid item xs={3}>
                <img src='https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/GWF-logo-blue.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true'/>
            </Grid>
            <Grid item xs={2}>
                <img src='https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/GWF-logo-blue.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true'/>
            </Grid>
            <Grid item xs={2}>
                <img src='https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/GWF-logo-blue.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true'/>
            </Grid>
            <Grid item xs={3}>
                <img src='https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/GWF-logo-blue.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true'/>
            </Grid>
            <Grid item xs={12} textAlign={'center'}>
                <Typography variant='h4'>Supporters over the past 24 months</Typography>
            </Grid>
            <Grid item>
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/rsz_comic-relief.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"/>
            </Grid>
        </Grid>
    

  </Grid>
  )
}
