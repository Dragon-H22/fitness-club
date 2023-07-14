import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Detail from '../../Components/Detail/Detail.jsx'
import ExerciseVideos from '../../Components/ExerciseVideos/ExerciseVideos.jsx'
import SimilarExercises from '../../Components/SimilarExercises/SimilarExercises.jsx'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../../utils/fertchData.js'

export default function ExerciseDetail() {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const fetchExercisesData = async ()=>{
            const exerciseDbUrl = `https://exercisedb.p.rapidapi.com/exercises/`
            const exercisesDetailData = await fetchData(exerciseDbUrl+`exercise/${id}`, exerciseOptions);
            setExerciseDetail(exercisesDetailData);
            
            const targetMuscleExercisesData = await fetchData(exerciseDbUrl+`target/${exercisesDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);
            
            const equimentExercisesData = await fetchData(exerciseDbUrl+`equipment/${exercisesDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equimentExercisesData);

            const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercisesDetailData.name}`;
            const exerciseVideosData = await fetchData(youtubeSearchUrl, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
        }
        fetchExercisesData();
    }, [id]);

    return <>
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    </>
}
