import React from 'react';
import axios from 'axios';
export const EventBrite = () => {
    const API_KEY = 'O6A4J6574FEEZXGNQGQP';
    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };

    const getStuff = async ()=>{
        try{
            axios.get('https://www.eventbriteapi.com/v3/users/me/?token=O6A4J6574FEEZXGNQGQP',{headers})
            .then(response=>{
                console.log(response.data);
            })
        }catch(err){
            console.log(err)
        }
    }
  return (
    getStuff()
  )
}
