import { Box, Grid, Typography, Stack } from '@mui/material'
import React from 'react'

export const About = () => {
  return (
    <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
      <Grid item container xs={6} marginLeft={2} direction={'row'} spacing={5} marginTop={3} >
        <Grid item>
         <Typography fontSize={18} color={'green'}>HISTORY - HOW IT ALL BEGAN</Typography>
         </Grid>
         <Grid item>
       <Typography fontSize={23} fontFamily={'Open Sans, arial, sans-serif'}>Kent Film Foundation began as a non-for-profit arm of a film production company based in Thanet , Kent an area of high deprivation where young people suffer from "Poverty of Opportunity".</Typography>
       </Grid>
       <Grid item>
      <Typography fontSize={23} fontFamily={'Open Sans, arial, sans-serif'}>A local group of filmmakers attached training elements for young people to a series of feature film shoots. This successfully led talented young people into entry level film industry jobs, film schools, universities and drama schools for those interested in careers in media. </Typography>
      </Grid>
      <Grid item>
       <Typography fontSize={23} fontFamily={'Open Sans, arial, sans-serif'}>This inspired one of the filmmakers who had also grown up in poverty herself, to create the Kent Film Foundation, an organisation with charitable status in the hope of hiring professional filmmakers to mentor young people in film workshops that would be FREE to every participant.</Typography>
       </Grid>
       <Grid item paddingBottom={10}>
      <Typography fontSize={23} fontFamily={'Open Sans, arial, sans-serif'}>Since its inception in 2010 the charity has an excellent track record in achieving its outcomes. It recently received a prestigious nomination in the Colyer Fergusson 50th Anniversary Awards in the category "Unlocking Opportunities"</Typography>
      </Grid>
    </Grid>
    </Grid>
  )
}
