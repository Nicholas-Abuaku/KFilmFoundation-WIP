import React from 'react'
import {MCard} from './MCard'
import { Grid, Typography } from '@mui/material'

export const CardGrid = () => {
    const TheBoyHeronImage = "https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg";
    const TheHoldoversImage = "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg";
    const movies = [
        {
            id:1,
            title:'Caitlin Gorgeous',
            img: '',
            runningTime:'1',
            date:'Saturday 13th January 2024',
            description:'Something amazing Caitlin jus whipped up'
        },
        {
            id:2,
            title:'The Boy and The Heron',
            img:"https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
            runningTime:'124',
            date:'Saturday 14th July 2024',
            description:"Mahito, a young 12-year-old boy, struggles to settle in a new town after his mother's death. However, when a talking heron informs Mahito that his mother is still alive, he enters an abandoned tower in search of her, which takes him to another world."
        },
        {
            id:3,
            title:'The Holdovers',
            img:"https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            runningTime:'150',
            date:'Saturday 15th July 2024',
            description:"A curmudgeonly instructor at a New England prep school remains on campus during Christmas break to babysit a handful of students with nowhere to go. He soon forms an unlikely bond with a brainy but damaged troublemaker, and with the school's head cook, a woman who just lost a son in the Vietnam War."
        },
        {
            id:4,
            title:'Poor Things',
            img:"https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            runningTime:'141',
            date:'Saturday 15th July 2024',
            description:"Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation."
        },
        {
            id:5,
            title:'The Holdovers',
            img:"https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            runningTime:'150',
            date:'Saturday 15th July 2024',
            description:"A curmudgeonly instructor at a New England prep school remains on campus during Christmas break to babysit a handful of students with nowhere to go. He soon forms an unlikely bond with a brainy but damaged troublemaker, and with the school's head cook, a woman who just lost a son in the Vietnam War."
        },
        {
            id:6,
            title:'The Holdovers',
            img:"https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            runningTime:'150',
            date:'Saturday 15th July 2024',
            description:"A curmudgeonly instructor at a New England prep school remains on campus during Christmas break to babysit a handful of students with nowhere to go. He soon forms an unlikely bond with a brainy but damaged troublemaker, and with the school's head cook, a woman who just lost a son in the Vietnam War."
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
