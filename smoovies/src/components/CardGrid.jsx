import React from 'react'
import {MCard} from './MCard'
import { Grid, Typography } from '@mui/material'

export const CardGrid = () => {
    const TheBoyHeronImage = "https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg";
    const TheHoldoversImage = "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg";
    const movies = [
        {
            id:1,
            title:'My Old School (Documentary)',
            img: 'https://m.media-amazon.com/images/M/MV5BZmFmM2ZkYzAtNmEzZC00MTEyLTg3ZTgtZGM4MTYwYjc2MDNkXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_FMjpg_UY519_.jpg',
            runningTime:'104',
            date:'Thursday 25th January',
            description:'In 1993, a boy named Brandon Lee enrolls at the Bearsden Academy secondary school in Glasgow, Scotland. Over time, it is revealed that Brandon Lee is not who he seems.'
        },
        {
            id:2,
            title:'Picnic at Hanging Rock',
            img:"https://m.media-amazon.com/images/M/MV5BNzk4NTljZDEtNDk0Ny00ODkxLWExMzItODVlODc4MDUxN2JkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg",
            runningTime:'115',
            date:'Friday 26th January 2pm',
            description:"Appleyard College, a girls' private school, plans a summer picnic to Hanging Rock in Victoria. However, things turn bad when a few students and a teacher go missing at the picnic."
        },
        {
            id:3,
            title:'The Caastle',
            img:"https://m.media-amazon.com/images/M/MV5BMDM4MDFiMjEtOWFhOC00M2RjLWE2NDItZGZlZjVhOGVjZWExXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_.jpg",
            runningTime:'85',
            date:'Friday 26th January 7pm',
            description:"A Melbourne family loves its home which is located next to the Melbourne airport. When government and airport authorities force them to vacate the house, they decide to fight for their beloved home."
        },
        {
            id:4,
            title:'A Good Person',
            img:"https://m.media-amazon.com/images/M/MV5BYzBkZGYyM2QtNzgwYy00NmZjLTk2ZTItYzY3ZTdjY2M0YmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            runningTime:'129',
            date:'Wednesday 31st 2pm',
            description:"Allison is a young woman with a wonderful fiance, a blossoming career, and supportive family and friends. However, her world crumbles in the blink of an eye when she survives an unimaginable tragedy, emerging from recovery with an opioid addiction and unresolved grief. In the following years, she forms an unlikely friendship with her would-be father-in-law that gives her a fighting chance to put her life back together and move forward."
        },
        {
            id:5,
            title:'Finite: The Climate Of Change',
            img:"https://m.media-amazon.com/images/M/MV5BMDdkNWRjZTUtODE5NS00NmZjLTk3NmUtODIzNDI1ZmUxMGY5XkEyXkFqcGdeQXVyMTYyMzQ5NTUy._V1_.jpg",
            runningTime:'99',
            date:'Thursday 1st Feb',
            description:"Concerned citizens in Germany and England put their bodies on the line to save an ancient forest from Europe's largest coal mine."
        },
        {
            id:6,
            title:'The Servant',
            img:"https://m.media-amazon.com/images/M/MV5BZmM5ODI3ODItYmJiNC00YzAzLTk4M2QtNjViMjM3MDE4YTZiXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg",
            runningTime:'116',
            date:'Wednesday 7th Feb 2pm',
            description:"Upper-class Tony hires servant Hugo Barrett, who turns out to have a hidden agenda."
        },
        

    ]
  return (
    <>
    
    <Grid container spacing={1} direction={'row'} paddingTop={3} paddingBottom={3} paddingLeft={'3%'} paddingRight={'3%'} sx={{ backgroundColor:'#339465'}}>
        <Grid item xs={12}>
        <Typography variant="h2" sx={{ border: '2px solid', borderLeft:'0px', borderRight:'0px', marginRight:'40px', color:'white' }}>What's On</Typography>
        </Grid>
    {movies.map((movie)=>{
        return(
            <Grid item xs={4} key={movie.id}>
                <MCard title = {movie.title} img={movie.img} runningTime = {movie.runningTime} date={movie.date} description={movie.description} />
            </Grid>
        )
    })}
    </Grid>
    </>
  )
}
