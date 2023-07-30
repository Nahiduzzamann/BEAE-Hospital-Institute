import '../../ClinicalServices/ClinicalServices.css'
import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const GeneralOpthalmology = () => {
    return (
        <div>
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
            </div>
        </div>
    );
};

export default GeneralOpthalmology;