import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const About = () => {
  return (
    <Grid container>
        <Grid item container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} textAlign={'center'}>
            <Typography variant='h3'>HISTORY - HOW IT ALL BEGAN</Typography>
            </Grid>
            <Grid item textAlign={'left'}>
                <Typography variant='h4'>Kent Film Foundation began as a non-for-profit arm of a film production company based in Thanet , Kent an area of high deprivation where young people suffer from "Poverty of Opportunity". </Typography>
            </Grid>
            <Grid item textAlign={'left'}>
            <Typography variant='h6'>A local group of filmmakers attached training elements for young people to a series of feature film shoots. This successfully led talented young people into entry level film industry jobs, film schools, universities and drama schools for those interested in careers in media. </Typography>
            </Grid>
            <Grid item>
            <Typography variant='h6'>This inspired one of the filmmakers who had also grown up in poverty herself, to create the Kent Film Foundation, an organisation with charitable status in the hope of hiring professional filmmakers to mentor young people in film workshops that would be FREE to every participant.</Typography>
            </Grid>
            <Grid item>
            <Typography variant='h6'>Since its inception in 2010 the charity has an excellent track record in achieving its outcomes. It recently received a prestigious nomination in the Colyer Fergusson 50th Anniversary Awards in the category "Unlocking Opportunities"</Typography>
            </Grid>
        </Grid>
    </Grid>

  )
}
