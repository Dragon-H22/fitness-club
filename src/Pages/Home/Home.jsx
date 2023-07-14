
import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from './../../Components/HeroBanner/HeroBanner';
import SearchExercises from './../../Components/SearchExercises/SearchExercises';
import Exercises from './../../Components/Exercises/Exercises';



export default function Home() {

    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');


    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
        </Box>
    )
}
