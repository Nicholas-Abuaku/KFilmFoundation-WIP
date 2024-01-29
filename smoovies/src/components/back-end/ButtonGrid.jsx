import React from 'react'
import { Stack } from '@mui/material';
import { DashboardFeaturedButton } from './DashboardFeaturedButton';
import { DashboardManageButton } from './DashboardManageButton';
import { DashboardManageNewsButton } from './DashboardManageNewsButton';
export const ButtonGrid = () => {
  return (
    <Stack direction={'row-reverse'} spacing={2} marginTop={3}>
        <DashboardFeaturedButton/>
        <DashboardManageButton/>
        <DashboardManageNewsButton/>
    </Stack>
  )
}
