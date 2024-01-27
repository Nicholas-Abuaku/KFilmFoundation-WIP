import React, { useEffect, useState } from 'react';
import { Grid, Typography, useTheme, useMediaQuery, Pagination } from '@mui/material';
import axios from 'axios';
import { MCard } from './MCard';

export const CardGrid = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3 ; // Change this as needed
    const API_KEY = import.meta.env.VITE_Event_API_KEY;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };

    const fetchAllEvents = async () => {
        try {
            const response = await axios.get("https://www.eventbriteapi.com/v3/organizations/335808768129/events/", { headers });
            setAllEvents(response.data.events);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllEvents();
    }, [])

    // Calculate total number of pages
    const totalPages = Math.ceil(allEvents.length / itemsPerPage);

    // Calculate index of the first and last item of the current page
    const indexOfLastEvent = currentPage * itemsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
    const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    return (
        <>
            <Grid container spacing={1} direction={'row'} paddingTop={3} paddingBottom={3} paddingLeft={'3%'} paddingRight={'3%'} sx={{ backgroundColor: '#339465', overflow: 'auto' }} width={'99.11vw'} height={'47.61vh'}>
                <Grid item xs={12}>
                    <Typography variant="h2" fontFamily={'Open Sans, arial, sans-serif'} sx={{ border: '2px solid', borderLeft: '0px', borderRight: '0px', marginRight: '40px', color: 'white' }}>What's On</Typography>
                </Grid>
                {currentEvents.map((event) => {
                    const startArr = event.start.local.replace("T", " ");
                    const dateTimeArray = startArr.split(" ");
                    const startTime = dateTimeArray[1];
                    const startDate = new Date(dateTimeArray[0]);
                    const eventDate = startDate.toDateString()
                    const currentDate = new Date();
                    console.log(startDate.getFullYear())
                    if(currentDate.getFullYear() <= startDate.getFullYear() && currentDate.getMonth() >= startDate.getMonth() && currentDate.getDate() >= startDate.getDate()){
                    return (
                        <Grid item key={event.id}>
                            <MCard title={event.name.text} description={event.description.text} date={eventDate} time={startTime} link={event.url} />
                        </Grid>
                    );
                    }
                })}
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </Grid>
            
        </>
    )
}