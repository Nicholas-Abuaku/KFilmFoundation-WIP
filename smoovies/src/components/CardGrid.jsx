import React, { useEffect, useState, useSyncExternalStore } from 'react';
import {MCard} from './MCard';
import { Grid, Typography, Skeleton } from '@mui/material';
import axios from 'axios';
export const CardGrid = () => {
    const [allEvents,setAllEvents] = useState([]);
    const API_KEY = import.meta.env.VITE_Event_API_KEY;
    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };

    const currentDate = new Date();

    
    const fetchAllEvents = async ()=>{
        try{
            axios.get("https://www.eventbriteapi.com/v3/organizations/335808768129/events/", {headers})
            .then(response=>{
                console.log(response.data.events)
                setAllEvents(response.data.events)
            })
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchAllEvents();
    },[])
  return (
    <>
    
    <Grid container spacing={1} direction={'row'} paddingTop={3} paddingBottom={3} paddingLeft={'3%'} paddingRight={'3%'} sx={{ backgroundColor:'#339465'}} width={'99.11vw'} height={'47.61vh'}>
        <Grid item xs={12}>
        <Typography variant="h2" fontFamily={'Open Sans, arial, sans-serif'} sx={{ border: '2px solid', borderLeft:'0px', borderRight:'0px', marginRight:'40px', color:'white' }}>What's On</Typography>
        </Grid>
        {allEvents.map((event)=>{
            const startArr = event.start.local.replace("T", " ");
            const dateTimeArray = startArr.split(" ");
            const startTime = dateTimeArray[1];
           
            var startDate = new Date(dateTimeArray[0]);
            var eventDate = startDate.toLocaleDateString()
            if(currentDate < startDate){
                return(
                    <Grid item key={event.id}>
                        <MCard title={event.name.text} description = {event.description.text} date={eventDate} time = {startTime} link={event.url} />
                    </Grid>
                )
            }
        })}
    </Grid>
    </>
  )
}
