import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    function Item(props) {
        return (
            <Paper>
                <div className='banner-container'>
                    <img src={props.item.img} alt="" />
                    <div className='banner-text tracking-in-expand'>
                        <Typography component="h4" variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography component="p">
                            {props.item.description}
                        </Typography>

                        <HashLink smooth to="/appointment#appointment" className='text-style'>
                            <Button sx={{ mt: 2 }} variant="contained" className="CheckButton">
                                Make an Appointment
                                <AddCircleIcon />
                            </Button>
                        </HashLink>
                    </div>
                </div>

            </Paper>
        )
    }
    const items = [
        {
            name: "You are just one click away from your healthy life",
            description: "Probably the most random thing you have ever seen!",
            img: "https://img.freepik.com/free-photo/man-having-eye-sight-check-ophthalmology-clinic_23-2149082461.jpg?w=2000"
        },
        {
            name: "Consult with experts Online 24/7",
            description: "Get Online support from oue expert Doctor 24/7 and lead a healthy life",
            img: "https://helpmesee.org/wp-content/uploads/2021/06/HelpMeSee-Eye-Hospital-of-Wenzhou-Medical-University.png"
        },
        {
            name: "Check Your Health Condition Regularly",
            description: "Upto date with your health condition prevention is always better than cure",
            img: "https://cloudfront-us-east-1.images.arcpublishing.com/dmn/PBOXADJYKBA7LDUOHFBWEWLNE4.jpg"
        }
    ]
    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;