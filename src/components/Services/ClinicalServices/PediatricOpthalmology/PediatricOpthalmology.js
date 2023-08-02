import '../../ClinicalServices/ClinicalServices.css'
import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const PediatricOpthalmology = () => {
    return (
        <div className='bg-gray-100'>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of Pediatric Opthalmology</h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <img
                            src='https://images.squarespace-cdn.com/content/v1/601b0a522a361b79f226eb0a/1628183279949-A5WSTTOT8ZIT62D90WMW/IMG_0096.JPG'
                            alt="Pediatric Ophthalmology"
                            className="rounded-lg w-full h-64 object-cover shadow-md"
                        />
                    </div>
                    <div>
                        <p className="text-lg mb-4">
                            Pediatric ophthalmology is a subspecialty of ophthalmology that
                            concentrates on treating the various eye problems affecting
                            children. At BEAE Hospital, Pediatric Ophthalmology is taken quite
                            seriously with expert consultants & surgeons working to ensure
                            that the vision of our future generation is well protected.
                        </p>
                        <p className="text-lg mb-4">
                            The department was inaugurated on 23 September, 2013, with the
                            support of Orbis International, Bangladesh, and has facilities
                            such as a children's play area, breastfeeding area, separate
                            out-patient and in-patient department. The department is run by a
                            team of trained and competent personnel such as pediatric
                            ophthalmologists, medical officers, anesthesiologists, orthoptists,
                            refractionists, and counselors. Service to more than 2500 patients
                            is provided monthly at the Pediatric Ophthalmology OPD, and 350
                            surgeries are done annually.
                        </p>
                        <p className="text-lg">
                            The Pediatric Ophthalmology service at BEAE Hospital started on 2012 with a
                            noble aim of bringing back a smile to a child’s face. Over the
                            years, the department has grown to be a major referral center for
                            pediatric eye disorders. At present, this service involves the
                            diagnosis and management of various facets of pediatric eye
                            disorders like refractive error, childhood cataract, glaucoma,
                            amblyopia, squint, congenital anomalies, etc. We are proud to
                            have a dedicated and skilled team of pediatric ophthalmologists
                            and anesthesiologists, whose sole focus is to help these children
                            at every stage of recovery. In short, all the possible diagnostic
                            and treatment facilities are made available to the children of
                            all strata under a single roof.
                        </p>
                    </div>
                </div>

                <div className="my-12">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">
                        Expert Pediatric Ophthalmologists
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src="https://visioneyebd.org/assets_admin/img/doctor/dr-mahmooda-rahman.png" // Replace with the actual image path of the ophthalmologist
                                alt="Pediatric Ophthalmologist 1"
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold">Dr. John Doe</h3>
                            <p className="text-lg">Pediatric Ophthalmologist</p>
                            <p className="text-gray-500">Experience: 15 years</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src="https://www.manavhospital.com/assets/img/dr-rajat.jpg" // Replace with the actual image path of the ophthalmologist
                                alt="Pediatric Ophthalmologist 2"
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold">Dr. Jane Smith</h3>
                            <p className="text-lg">Pediatric Ophthalmologist</p>
                            <p className="text-gray-500">Experience: 12 years</p>
                        </div>
                        {/* Add images and information of expert pediatric ophthalmologists */}

                    </div>
                </div>

                <div className="my-12">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">
                        Facilities and Services
                    </h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>
                            Comprehensive vision exams for children of all ages, assessing
                            eye health and vision needs.
                        </li>
                        <li>Diagnosis and treatment of refractive errors in children.</li>
                        <li>Treatment for childhood cataract and glaucoma.</li>
                        <li>Management of amblyopia (lazy eye) and squint.</li>
                        <li>Treatment of congenital eye anomalies.</li>
                        <li>
                            Referral to subspecialty ophthalmology care or other services when
                            needed.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PediatricOpthalmology;