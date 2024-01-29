import { Grid, Typography } from '@mui/material'
import React from 'react'
import { EditLatestScreening } from './EditLatestScreening'

export const LatestScreeningPage = () => {
  return (
   <Grid container>
    <Grid item xs={12}>
        <Typography variant='h3' textAlign={'center'}> Edit Latest Screening</Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography variant='h3'>Preview</Typography>
    </Grid>
    <Grid item xs={12}>
        <EditLatestScreening/>
    </Grid>
   </Grid>
  )
}
