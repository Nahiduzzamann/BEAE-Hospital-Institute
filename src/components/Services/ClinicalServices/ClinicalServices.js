import './ClinicalServices.css'
import React from 'react';
import SubNavBar from './NavBar/SubNavBar';

const ClinicalServices = () => {
    return (
        <div className="bg-gray-100">
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of Clinical </h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            {/* OPD Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Out Patient Department (OPD)</h2>
                    <img src="https://ihlbd.org/wp-content/uploads/2019/05/Outpatient-Department.jpg" alt="Out Patient Department" className="w-full mb-8 rounded-lg" />
                    <p className="text-gray-700 mb-4">
                        Out-patients are those who do not require admission to the hospital. The Department which caters to this
                        category of patients is called Out-patient Department (OPD). Since it is the first area of the hospital, it
                        reflects the image of the hospital. Good out-patient services constitute one of the most important elements
                        of an ideal hospital. DECF is always concerned about better out-patient service. Our OPD has proper
                        ventilation, lighting, and sufficient space to accommodate patients and their attendees. The OPD provides
                        diagnostic, curative, and preventive services to around five hundred patients a day. The patient registration
                        counter registers the patient as an out-patient, and our Ophthalmic assistant then guides them to the relevant
                        departments for diagnosis and treatment procedures.
                    </p>
                </div>
            </section>

            {/* In-Patient Department Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">In-Patient Department (Ward)</h2>
                    <img src="https://mmmedical.co/wp-content/uploads/2015/05/1140-hospital-room.jpg" alt="In-Patient Department" className="w-full mb-8 rounded-lg" />
                    <p className="text-gray-700 mb-4">
                        A patient who is admitted to a hospital for treatment that requires at least one-night stay is called an
                        in-patient. The area which caters to these patients is the in-patient department or wards. Our In-patient
                        department is located away from main roads and the OPD area, which prevents cross-infection, and it is easily
                        approachable from the operation theatre and supportive services. The in-patient department ensures a
                        comfortable stay for patients with 50 general beds for male, female, and pediatric patients. All the wards
                        have the required staff, cleanliness, and support facilities to ensure patient satisfaction.
                    </p>
                </div>
            </section>

            {/* Subspecialty Services Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Subspecialty Services</h2>
                    <p className="text-gray-700 mb-4">
                        DECF provides specialized services in various subspecialties to cater to specific eye conditions. Some of the
                        key subspecialties include:
                    </p>
                    <ul className="list-disc list-inside mb-8">
                        <li>Cataract</li>
                        <li>Glaucoma</li>
                        <li>Orbit & Oculoplasty</li>
                        <li>Pediatric Ophthalmology</li>
                        <li>Vitreo-Retina</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        Each subspecialty department is equipped with modern facilities and staffed with trained and competent
                        doctors to provide the best possible care to patients.
                    </p>
                </div>
            </section>

            {/* Operation Theatre Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Operation Theatre</h2>
                    <img src="https://advinhealthcare.com/wp-content/uploads/2022/12/Modular-Operation-Theatre-1.jpg" alt="Operation Theatre" className="w-full mb-8 rounded-lg" />
                    <p className="text-gray-700 mb-4">
                        The operation theatre is the heart of an eye hospital. A team of skilled surgeons, nurses, OAs, and
                        anesthesiologists operate on and care for patients in the OT. DECF has separate OTs for septic and aseptic
                        cases, ensuring a high level of hygiene and safety. The well-equipped independent operation theatres cater to
                        around 60 surgeries a day. A Modular OT complex is under construction and planned to open in 2021 to enhance
                        surgical capabilities.
                    </p>
                </div>
            </section>

            {/* Vitreo-Retina Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Vitreo-Retina</h2>
                    <img src="https://vistasancheztrancon.com/wp-content/uploads/2019/01/anatomia-del-ojo.jpg" alt="Vitreo-Retina" className="w-full mb-8 rounded-lg" />
                    <p className="text-gray-700 mb-4">
                        The retina is a thin tissue layer located at the back of each eye near the optic nerve. It is essential to our
                        vision and assists in processing light and sending signals to our brain. The Vitreo-Retina department deals
                        with patients having vitreo-retinal disorders that can be managed medically or through surgical intervention.
                        The department is equipped with modern facilities like Fluorescein angiography, Optical Coherence Tomography,
                        Color Fundus Photography, and Laser services. The department also provides counseling to the patients.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ClinicalServices;
