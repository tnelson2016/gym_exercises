import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' },
            }}
            position="relative"
            p="20px"
        >
            <Typography color="#076385" fontWeight="550" fontSize="46px">
                Troy's Fantastic Fitness App
            </Typography>

            <Typography
                fontWeight={500}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' },
                }}
                mb="23px"
                mt="30px"
            >
                Sweat, Work, Smile <br /> and Repeat
            </Typography>

            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>

            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{ backgroundColor: '#076385', padding: '10px' }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#076385"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' },
                }}
                fontSize="200px"
            >
                Exercise
            </Typography>
            <img
                src={HeroBannerImage}
                alt="banner"
                className="hero-banner-img"
            />
        </Box>
    )
}

export default HeroBanner
