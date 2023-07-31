import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const OrbitOculoplasty = () => {
    return (
        <div className='bg-gray-100'>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of Orbit & Oculoplasty</h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="md:order-2">
                        <img
                            src='https://shreeretinacare.com/wp-content/uploads/2023/05/4-1.png'
                            alt="Orbit & Oculoplasty"
                            className="rounded-lg w-full h-64 object-fill shadow-md"
                        />
                    </div>
                    <div className="md:order-1">
                        <h1 className="text-4xl font-bold text-blue-900">Orbit & Oculoplasty Services</h1>
                        <p className="text-lg leading-relaxed mt-4">
                            The department of Orbit & Oculoplasty offers comprehensive treatment to various problems
                            affecting the orbit of the eye. Orbit refers to the eye-socket (the cavity in the skull that
                            holds the eye) and the surrounding structures. Diseases of the Orbit may arise from within
                            the eye-socket or might be a secondary condition arising out of an existing illness. While
                            some of these issues could be cosmetic, quite a few of orbital problems might affect the
                            regular functioning of the eyes. There’s sure relief for these conditions, and oculoplasty
                            is a cosmetic/reconstructive surgical procedure that comes to the rescue of patients with
                            eye orbit problems. Annually around 6000 patients are provided service through this department
                            and around 2500 surgeries are performed.
                        </p>
                    </div>
                </div>

                {/* Additional Section - Diagnostic Facilities */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Diagnostic Facilities</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        Our Orbit & Oculoplasty department is equipped with the latest diagnostic facilities to
                        accurately assess and diagnose various eye orbit problems. We utilize advanced imaging
                        techniques, including Fluorescein angiography, Optical Coherence Tomography (OCT), and
                        Color Fundus Photography, to provide detailed insights into patients' conditions.
                        Our team of expert ophthalmologists and technicians ensures precise and thorough
                        evaluations for effective treatment planning.
                    </p>
                </div>

                {/* Additional Section - Surgical Expertise */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Surgical Expertise</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        Our experienced team of ophthalmologists specializes in a wide range of oculoplastic
                        and orbital surgeries. From cosmetic procedures to complex reconstructive surgeries,
                        we are committed to providing the best possible outcomes for our patients. Our state-of-the-art
                        surgical facilities and advanced techniques ensure that our patients receive the highest
                        standard of care and achieve optimal results.
                    </p>
                </div>

                {/* Additional Section - Patient Care and Support */}
                <div className="mt-12 mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">Patient Care and Support</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        At BEAE, we prioritize patient care and support throughout the treatment
                        journey. Our compassionate and caring team is dedicated to providing personalized care and
                        attention to each patient. From initial consultation to post-operative follow-ups, we strive
                        to make our patients feel comfortable and well-informed. We believe in building strong doctor-patient
                        relationships to ensure the best possible outcomes and patient satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrbitOculoplasty;