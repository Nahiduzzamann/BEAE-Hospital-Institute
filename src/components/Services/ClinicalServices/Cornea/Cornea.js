import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const Cornea = () => {
    return (
        <div className='bg-gray-100'>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of Cornea</h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="md:order-2">
                        <img
                            src='https://visioneyebd.org/assets_admin/img/blogandfaq/corneal-abrasion-1200x630-1661587858.jpg'
                            alt="Cornea"
                            className="rounded-lg w-full h-64 object-fill shadow-md"
                        />
                    </div>
                    <div className="md:order-1">
                        <h1 className="text-4xl font-bold text-blue-900">Low Vision & Cornea Services</h1>
                        <p className="text-lg leading-relaxed mt-4">
                            Low vision exists when ordinary glasses, contact lenses, medical treatment, and/or surgery
                            cannot fully correct vision. Unlike total blindness, people with low vision have some useful
                            vision. However, vision loss interferes with their ability to complete tasks of everyday life
                            such as reading, recognizing faces, cooking, driving, and differentiating color. Our
                            comprehensive, multi-disciplinary approach to care provides a team of specialists from
                            ophthalmologists to optometrists to Orthoptists who are trained to evaluate your condition
                            and to learn about tools and assistive technology available to help you meet the demands of
                            daily living.
                        </p>
                    </div>
                </div>

                {/* Additional Section - Diagnostic Evaluation */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Diagnostic Evaluation</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        Our Cornea and Low Vision department offers comprehensive diagnostic evaluations to assess
                        and understand the specific challenges faced by individuals with low vision. Our experienced
                        team of ophthalmologists, optometrists, and Orthoptists utilize advanced technologies to
                        identify the root causes of low vision and design personalized treatment plans to improve
                        visual function and enhance the quality of life for our patients.
                    </p>
                </div>

                {/* Additional Section - Assistive Devices and Technology */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Assistive Devices and Technology</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        At BEAE Hospital, we are committed to helping individuals with low vision regain independence and
                        overcome visual challenges in their daily lives. Our specialists are well-versed in the latest
                        assistive devices and technologies that can significantly enhance visual capabilities and
                        make daily tasks more manageable. From magnification aids to electronic devices, we provide
                        a range of solutions tailored to individual needs and preferences.
                    </p>
                </div>

                {/* Additional Section - Vision Rehabilitation */}
                <div className="mt-12 mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">Vision Rehabilitation</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        Our vision rehabilitation programs aim to optimize functional vision and improve overall quality
                        of life for individuals with low vision. Our team of experts works closely with patients to
                        develop personalized rehabilitation plans, including vision training, adaptive techniques, and
                        support services. We are dedicated to empowering our patients to live fulfilling and independent
                        lives despite visual challenges.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cornea;