import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const RetinaVitreous = () => {
    return (
        <div className='bg-gray-100'>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of Retina & Vitreous</h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="md:order-2">
                        <img
                            src='https://newportretina.com/wp-content/uploads/2022/06/shahem-1200x677.jpg'
                            alt="Retina and Vitreous"
                            className="rounded-lg w-full h-64 object-fill shadow-md"
                        />
                    </div>
                    <div className="md:order-1">
                        <h1 className="text-4xl font-bold text-blue-900">Retina and Vitreous Services</h1>
                        <p className="text-lg leading-relaxed mt-4">
                            BEAE Hospital & Institute started its first Retina service in Rangpur in 2012 and established
                            the first Vitreo-Retina (VR) service in 2016. It is one of the major tertiary care eye hospitals
                            receiving referral cases from all over Bangladesh. The clinic has state-of-the-art equipment for
                            the investigation and treatment of various Vitreo retinal diseases.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            The retina is a thin tissue layer located in the back of each of our eyes near the optic nerve.
                            It is composed of alternating layers of cells in order to best interpret and direct the light
                            coming in through our eyes. It’s an important part of our eye that assists in processing light
                            and sending signals to our brain to help translate what we see. It is essential to our vision,
                            and diseases and conditions affecting the retina can lead to permanent blindness. Vitreo Retina
                            department deals with the patients having vitreo-retinal disorders that can be managed medically
                            or by surgical intervention. The department is equipped with modern facilities like Fluorescein
                            angiography, Optical Coherence Tomography, Color Fundus Photography, and Laser services. The
                            department also provides counseling to the patients.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Diabetic Retinopathy (DR) Prevalence</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        Applying the WHO suggested criteria, about 1.6 million populations have DR, and about 80,000
                        people are blind due to DR in Bangladesh. By 2030, the number of diabetic patients will almost
                        be doubled in comparison to 2000 and, hence, the number of blind people due to DR will be 125,000
                        or even more.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Rising Diabetes Prevalence in Greater Rangpur</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        There are 11.4 million people living in the five districts of the Greater Rangpur region, and
                        most of them are poor and underserved. According to the prevalence of Diabetic patients in the
                        population, there are 427,500 diabetics. Approximately 115,425 people are suspected DR, and 5800
                        people are blind due to DR in five proposed districts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RetinaVitreous;