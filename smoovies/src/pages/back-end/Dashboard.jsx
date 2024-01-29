import React from 'react'
import { AdminNav } from '../../components/back-end/AdminNav'
import { Grid, Typography} from '@mui/material'
import { ButtonGrid } from '../../components/back-end/ButtonGrid'
import { DashboardAnalytics } from '../../components/back-end/DashboardAnalytics'

export const Dashboard = () => {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'} >
      <Grid item xs={12}>
        <ButtonGrid/>
      </Grid>
      <Grid item xs={12}>
      <DashboardAnalytics/>
      </Grid>
    </Grid>
  )
}
