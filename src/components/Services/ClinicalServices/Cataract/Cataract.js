import React from 'react';
import SubNavBar from '../NavBar/SubNavBar';

const Cataract = () => {
    return (
        <div className='bg-gray-100'>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center font-bold p-5'>Services of Cataract</h2>
            {/* Navigation section */}
            <SubNavBar></SubNavBar>
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <img
                            src='https://www.eyesurgeonssa.com.au/images/cataract_progression.jpeg'
                            alt="Cataract"
                            className="rounded-lg w-full h-64 object-fill shadow-md"
                        />
                    </div>
                    <div className="md:pl-4">
                        <h1 className="text-4xl font-bold mb-4 text-blue-900">
                            Cataracts and Cataract Surgeries
                        </h1>
                        <p className="text-lg leading-relaxed mb-6">
                            Cataracts are the most common cause of vision loss in people,
                            particularly in the ageing population, and are the principal cause
                            of curable blindness in the world. Cataract surgery is very
                            successful in restoring vision through intraocular lens (IOL)
                            implantation. In fact, it is the most frequently performed surgery
                            in our hospital. The hospital performs around 10,000 cataract
                            surgeries annually. Small Incision Cataract Surgery (SICS) and
                            Phacoemulsification are both techniques that are done routinely
                            here.
                        </p>
                        <h2 className="text-3xl font-bold mb-2 text-blue-900">
                            Cataract Surgeries (OPD)
                        </h2>
                        <ul className="list-disc list-inside mb-6">
                            <li>PHACO: 15,112</li>
                            <li>SICS: 16,040</li>
                            <li>Adult: 31,152</li>
                            <li>Pediatric: 1,099</li>
                        </ul>
                        <h2 className="text-3xl font-bold mb-2 text-blue-900">
                            Cataract Surgeries (Outreach)
                        </h2>
                        <ul className="list-disc list-inside mb-6">
                            <li>PHACO: 193</li>
                            <li>SICS: 54,484</li>
                            <li>Adult: 63,891</li>
                            <li>Pediatric: 196</li>
                        </ul>
                        <p className="text-3xl font-bold text-blue-900">
                            Total Cataract Surgeries: 91,426 Up to 2023(Feb)
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-bold mb-4 text-blue-900">
                        Cataract Surgery Techniques
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-2 text-blue-900">Phacoemulsification</h3>
                            <p className="text-lg leading-relaxed">
                                Phacoemulsification is a modern cataract surgery technique that uses
                                ultrasonic energy to break up and remove the cloudy lens, allowing the
                                surgeon to insert a new intraocular lens (IOL) to restore vision.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-2 text-blue-900">Small Incision Cataract Surgery (SICS)</h3>
                            <p className="text-lg leading-relaxed">
                                SICS is a cataract surgery technique that involves making a small incision
                                to remove the cataract. It is a cost-effective method and is commonly used
                                in our hospital.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cataract;