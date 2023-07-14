
import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import HeroBannerImage from '../../assets/images/banner.png'

export default function HeroBanner() {
    return <>
        <Box sx={{
            mt: { lg: '212px', sx: '70px' },
            ml: { sm: '50px' },
        }} position='relative' p='20px' >
            <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>
            <Typography fontWeight='700' mb='23px' mt="30px" sx={{
                fontSize: { lg: '44px', xs: '40px' },
            }}>
                Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography fontSize='22px' fontFamily="Alegreya" lineHeight='35px' mb={4}>
                Check out the most effective exercises personalized to you
            </Typography>
            <Button variant='contained' href='#exercises' sx={{
                backgroundColor: '#FF2625',
                paddingY: '8px',
                paddingX: '16px',
                marginTop: '20px',
                fontSize: '22px',
                borderRadius: '4px',
                fontFamily: 'Josefin Sans',
                textTransform: 'capitalize',
                boxShadow: '0'
            }}>Explore Exercises</Button>
            <Typography fontWeight={600} color='#ff2625' fontSize='200px' sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' },
            }} >
                Exercises
            </Typography>
            <img src={HeroBannerImage} alt="hero-banner" className='hero-banner-img' />
        </Box>
    </>
}
