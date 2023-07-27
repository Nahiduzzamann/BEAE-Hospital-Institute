import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './About.css';
const About = () => {
    const VisionMissionSection = () => {
        return (
            <section className="section">
                <div className="content">
                    <h2>Vision</h2>
                    <p>
                        To establish as a Center of Excellence in Eye Care to eliminate avoidable blindness and vision impairment, in order to support people to become productive and contribute to the socio-economic growth of their societies.
                    </p>
                </div>
                <img className="image" src="https://www.prophylacticaqua.com/img/resources/vission.png" alt="Vision Image" />
            </section>
        );
    };

    const MissionSection = () => {
        return (
            <section className="section" style={{ backgroundColor: '#f0f0f0' }}>
                <img className="image" src="https://www.moveaheadmedia.com.au/wp-content/uploads/2020/07/mission-image-01.jpg" alt="Mission Image" />
                <div className="content">
                    <h2>Mission</h2>
                    <ul>
                        <li>Patient Care - To ensure qualitative and quantitative eye care affordable to all.</li>
                        <li>Community Outreach - To work with community people’s participation.</li>
                        <li>Education & Training - To develop skilled human resource in the eye care sector.</li>
                        <li>Research - To conduct research to intervene both the prevalence and incidence of eye diseases.</li>
                    </ul>
                </div>
            </section>
        );
    };
    return (
        <Box id='about' sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: 8,
            pb: 8
        }}
            points="0,100 50,00, 100,100" >
            <Container maxWidth="xl">
                <Typography sx={{ color: 'primary.main', mx: 2, p: 2, textAlign: "center" }}
                    variant='h4'>
                    All-in-One Website Health Solution
                </Typography>

                <Typography sx={{ mx: 2, p: 2, textAlign: "center" }}
                    variant='h6'>
                    10 Years Of Experience in Medical Services
                </Typography>

                <Typography sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
                    variant='p'>One big thing I wanted to highlight is that our methodology is fairer to hospitals and health systems than horizontal sites. CareDash has many hospital reviews from real users, but the way we survey our patient users has less “motivated complainer bias.” Thus, I think the CareDash hospital reviews provider a more accurate view of real patient satisfaction. <br /><br />

                    We think something between 8 to 9 out of 10 patients walks out of the hospital satisfied, but typical web reviews make hospitals look much worse. This negative bias in hospital reviews is a big deal because people are walking into their care journey with a negative mindset about the care they are going to get, and that’s not good. The scale is just off because of the motivated complainers.<br /><br />

                    Be sure to leave a review on <strong>BEAE Hospital & Institute</strong> of any hospital you’ve visited, whether you’ve had a negative or a positive experience. Share your suggestions about writing hospital reviews in the comments below.
                </Typography>
                <div>
                    <h1 className='header'>Vision and Mission</h1>
                    <VisionMissionSection />
                    <MissionSection />
                </div>
            </Container>
        </Box>
    );
};

export default About;