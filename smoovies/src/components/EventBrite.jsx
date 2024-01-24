import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MCard } from './MCard';
import { LatestScreeningCard } from './LatestScreeningCard';
export const EventBrite = () => {
    const [name,setName] = useState([]);
    const [desc,setDesc] = useState([]);
    const [date,setDate] = useState([]);
    const [stuff,setStuff] = useState([]);
    const API_KEY = import.meta.env.Event_API_KEY;
    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };
// "335808768129"  eventbriteapi.com/v3/organizations/organizationid/events/335808768129
    const getStuff = async ()=>{
        try{
            axios.get('https://www.eventbriteapi.com/v3/events/803841630957/',{headers})
            .then(response=>{
                setStuff(response.data);
                var dateFormatted = response.data.start.local;
                setDate(response.data.start.local)
                setName(response.data.name.text);
                setDesc(response.data.description.text);
            })
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getStuff()
        
    },[])
  return (
    <>
    {console.log(name, desc, date)}

    <LatestScreeningCard/>
    </>
    
  )
}
