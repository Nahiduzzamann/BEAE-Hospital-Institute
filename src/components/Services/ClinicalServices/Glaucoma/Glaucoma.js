import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const Glaucoma = () => {
    return (
        <div className='bg-gray-100'>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of Glaucoma</h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <img
                            src='https://www.inmedpharma.com/wp-content/uploads/2020/05/Glaucoma-compared-to-normal-vision.png'
                            alt="Glaucoma"
                            className="rounded-lg w-full h-64 object-fill shadow-md"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-blue-900">Glaucoma Services</h1>
                        <p className="text-lg leading-relaxed mt-4">
                            Glaucoma is a group of diseases that damage the eye’s optic nerve and can result in
                            vision loss and blindness. However, with early detection and treatment, you can often
                            protect your eyes against serious vision loss. Neglected, this fell disease gradually
                            devours your field of vision from the periphery and ultimately leads to complete
                            blindness. That is why it is called the ‘silent killer of sight’ and is, at present, the
                            second leading cause of blindness worldwide. Glaucoma service at DECF is managed by
                            trained & competent doctors. For better and efficient management, the hospital is
                            equipped with all necessary equipment’s like Visual Field Analyzer, Optical Coherence
                            Tomography, Pachymeter, Laser, etc. The glaucoma department deals with around 600 OPD
                            visits annually.
                        </p>
                    </div>
                </div>

                {/* Additional Section - Early Detection and Prevention */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Early Detection and Prevention</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        At DECF, we emphasize the importance of early detection and prevention in managing
                        glaucoma. Our team of experienced ophthalmologists and specialists is dedicated to
                        conducting regular screenings and comprehensive eye exams to identify early signs of
                        glaucoma. By detecting the condition at its early stages, we can implement effective
                        treatment strategies to protect your vision and prevent further progression of the
                        disease.
                    </p>
                </div>

                {/* Additional Section - Advanced Diagnostic Techniques */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-blue-900">Advanced Diagnostic Techniques</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        Our glaucoma department is equipped with state-of-the-art diagnostic equipment, including
                        Visual Field Analyzer, Optical Coherence Tomography (OCT), Pachymeter, and Laser devices.
                        These advanced technologies allow our specialists to accurately assess the health of your
                        optic nerve and monitor any changes in your visual field. The early and precise diagnosis
                        provided by these techniques enables us to develop personalized treatment plans tailored to
                        your specific condition.
                    </p>
                </div>

                {/* Additional Section - Comprehensive Glaucoma Management */}
                <div className="mt-12 mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">Comprehensive Glaucoma Management</h2>
                    <p className="text-lg leading-relaxed mt-4">
                        Our glaucoma service provides comprehensive management options to address the varying needs
                        of our patients. Treatment approaches may include medication, laser therapy, or surgical
                        intervention, depending on the severity and type of glaucoma. Our goal is to preserve your
                        vision and quality of life by delivering the most appropriate and effective treatments.
                        Regular follow-ups and continuous monitoring ensure that your glaucoma is well managed and
                        any changes in your eye health are promptly addressed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Glaucoma;