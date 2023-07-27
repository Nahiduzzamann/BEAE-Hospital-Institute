import React from 'react';
import { Avatar, Box, Chip, Container, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

// copyright function for generate year automatically
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            &copy; {new Date().getFullYear()} Birmuktijaddha Emdad Eli Eye Hospital & Institute. All rights reserved.
        </Typography>
    );
}

const Footer = () => {
    return (
        <footer>
            <Box className='sticky-container' sx={{ bgcolor: 'secondary.main', color: 'text.secondary', pb: 2, top: 'auto' }}>
                <Container maxWidth="xl">
                    <Grid container
                        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid sx={{ m: 'auto' }} item xs={12} sm={6} md={4}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
                                > <Avatar sx={{ mt: 1, mb: 1, mr: 1, bgcolor: 'white' }}>
                                        <HealingTwoToneIcon
                                            color='primary'
                                            fontSize='large' />
                                    </Avatar>
                                    BEAE Hospital & Institute
                                </Typography>
                                <Divider />
                            </Box>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mt: 1, bgcolor: '#007bff' }}>
                                    <LocationOnIcon />
                                </Avatar><span>Rangpur division</span>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: '#007bff' }}>
                                    <EmailIcon />
                                </Avatar>
                                <a className='text-style-footer' href="#">
                                    beae@gmail.com
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: '#007bff' }}>
                                    <CallIcon />
                                </Avatar>
                                <a className='text-style-footer' href="tel:01680xxx86">
                                    01680xxx86
                                </a>
                            </Stack >


                        </Grid>

                        {/* ----------service part ---------------*/}
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Our Services" />
                                </Divider>
                            </Root>
                            <Box sx={{ p: 2, }}><HashLink className='text-style-footer' to='/doctors#doctors' color='inherit'>Find a Doctor</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style-footer' to='/services#services' color='inherit'>All services</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style-footer' to='/appointment#appointment' color='inherit'>Make An Appointment</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style-footer' to='/register' color='inherit'>Register For Service </HashLink></Box>
                        </Grid>

                        {/* ----------social media part ------------*/}

                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Find us on social media" />
                                </Divider>
                            </Root>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: '#007bff' }}>
                                    <FacebookIcon />
                                </Avatar>
                                <a className='text-style-footer' href="#" target="_blank" rel="noopener noreferrer" >
                                    BEAE on Facebook
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: '#007bff' }}>
                                    <LinkedInIcon />
                                </Avatar>
                                <a className='text-style-footer' href="#" target="_blank" rel="noopener noreferrer" >
                                    BEAE on LinkedIn
                                </a>
                            </Stack >

                        </Grid>

                    </Grid>
                    <Divider sx={{ mb: 2 }} />
                    <Copyright sx={{ mt: 5 }} />

                </Container>
            </Box>

        </footer >
    );
};

export default Footer;