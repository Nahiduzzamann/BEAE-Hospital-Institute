import '../../ClinicalServices/ClinicalServices.css'
import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const GeneralOpthalmology = () => {
    return (
        <div className='bg-gray-100'>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of General Opthalmology </h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <img
                        src='https://www.westernlasereye.com/wp-content/uploads/shutterstock_1565916823-1.jpg'
                        alt="General Ophthalmology"
                        className="rounded-lg w-full h-64 object-cover"
                    />
                </div>
                <div>
                    <p className="text-xl mb-4">
                        General Ophthalmology Dept. at Deep Eye Care Foundation provides
                        comprehensive eye care, from examinations and vision correction to
                        the diagnosis and treatment of diseases through medication and
                        surgery.
                    </p>
                    <p className="text-xl mb-4">
                        The Dept. provides routine eye examinations and screens for
                        Cataract, Glaucoma, Diabetic Retinopathy, Ocular Inflammation,
                        Macular Degeneration, and eye injuries, in addition to monitoring
                        eye health in patients with other disorders.
                    </p>
                    <p className="text-xl">
                        Many other conditions that affect vision and ocular health are
                        treated by the clinic. The optometry service performs comprehensive
                        vision exams to assess eye health and vision needs and provides
                        vision correction with glasses or contact lenses for both pediatric
                        and adult patients. Patients who may require subspecialty
                        ophthalmology care or other services are referred after evaluation
                        in this clinic.
                    </p>
                </div>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/US_Navy_080607-N-9689V-008_Cmdr._Kenneth_Kubis_and_U.S._Air_Force_Capt._Tighe_Richardson_use_an_operating_microscope_while_performing_cataract_eye_surgery_to_return_sight_to_Marylin_Kansi%2C_a_12-year-old_girl_from_Cotabato.jpg" alt="Out Patient Department" className="w-full mb-8 mt-2 rounded-lg" />
            </div>
        </div>
    );
};

export default GeneralOpthalmology;