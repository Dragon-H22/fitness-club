
import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, exerciseOptions } from '../../utils/fertchData.js';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar.jsx';

export default function SearchExercises({setExercises, bodyPart, setBodyPart}) {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    
    useEffect(()=>{
        const fetchExercisesData = async ()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            if(bodyPartsData?.length>0){
                setBodyParts(['all', ...bodyPartsData]);
            }
            else{
                setBodyParts(['all']);
            }
        }
        fetchExercisesData();
    }, []);


    const handleSearch = async ()=>{
        if(search){
            // const url = "https://"+ process.env.RapidAPI_ExerciseDB_HOST + "/exercises/bodyPartList"
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter((exercise)=> exercise.name.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search));

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            setSearch('');
            setExercises(searchedExercises);
        } 
    }

    return <>
        <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
            <Typography fontWeight={700} textAlign='center' mb='50px' sx={{
                fontSize: { lg: '44px', xs: '30px ' }
            }}>
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '1100px', md: '700px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                    value={search}
                    height='76px'
                    placeholder='Search Exercises'
                    type='text'
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                />
                <Button className='search-btn' onClick={handleSearch} sx={{
                    bgcolor: '#ff2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '100px' },
                    fontSize: { lg: '20px', xs: '14px' },
                    height: '56px',
                    position: 'absolute',
                    right: '0',
                }}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width:'100%', p:'20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    </>
}
