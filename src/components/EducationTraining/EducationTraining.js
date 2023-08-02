import React from 'react';

const EducationTraining = () => {
    
    
    
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 mb-8">Education & Training</h1>

                {/* DICO Section */}
                <div className="bg-white rounded-lg shadow-md md:flex">
                    <div className="md:w-1/2">
                        <img
                            src='https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2021/04/01092516/whiteboard-training.jpg'
                            alt="Training"
                            className="rounded-t-lg md:rounded-l-lg w-full h-48 md:h-auto object-fill"
                        />
                    </div>
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">BEAE Institute of Community Ophthalmology (DICO)</h2>
                        <p className="text-lg leading-relaxed">
                            DICO is the training and research wing of BEAE Eye Care Foundation (BEAE Hospital). Established
                            in 2017, DICO’s mission is to eliminate needless blindness and make a sustainable,
                            equitable, and comprehensive health care system. The Institute provides training for
                            ophthalmologists, Mid-level ophthalmic personnel (MLOP), Outreach workers, Healthcare
                            managers, and Researchers. The general framework for our training courses is to make
                            them interactive and hands-on so that participants can derive the most benefit from
                            their time spent with us. The Institute has been recognized by the Ministry of Health
                            and Family welfare, Govt. of the People's Republic of Bangladesh & affiliated by the
                            State Medical Faculty of Bangladesh.
                        </p>
                    </div>
                </div>

                {/* MLOP Certificate Course Section */}
                <div className="bg-blue-100 rounded-lg shadow-md md:flex mt-8">
                    <div className="md:w-1/2">
                        <img
                            src='https://blogs.nvidia.com/wp-content/uploads/2020/09/MLOps-Neal-Analytics.png'
                            alt="MLOP"
                            className="rounded-t-lg md:rounded-l-lg w-full h-48 md:h-auto object-fill"
                        />
                    </div>
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">MLOP Certificate Course</h2>
                        <p className="text-lg leading-relaxed">
                            The course provides knowledge, skills, and attitude through which MLOPs will be able to
                            assist the ophthalmologist and render primary eye care services with efficiency and
                            accuracy where necessary within the defined boundary of responsibilities. The students
                            having passed in SSC (science background preferred) are selected to undergo comprehensive
                            theoretical and practical training in Ophthalmic procedures. After successful completion
                            of the course, we provide the opportunity for employment at BEAE Hospital. The course is affiliated
                            by the State Medical Faculty of Bangladesh.
                        </p>
                    </div>
                </div>

                {/* Short Term Refraction Course Section */}
                <div className="bg-yellow-100 rounded-lg shadow-md md:flex mt-8">
                    <div className="md:w-1/2">
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/8/85/Refraction_photo.png'
                            alt="Refraction"
                            className="rounded-t-lg md:rounded-l-lg w-full h-48 md:h-auto object-fill"
                        />
                    </div>
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Short Term Refraction Course</h2>
                        <p className="text-lg leading-relaxed">
                            This training is designed for certified Mid-level Ophthalmic Personnel (MLOP) with a desire
                            to increase their knowledge and clinical skill along with an attitude towards planning,
                            implementing, monitoring, and evaluating activities towards carrying out the refraction
                            practice efficiently. BEAE Care Foundation with its immense potential has taken
                            initiative to provide training on refraction to the MLOPs. The short term training course
                            will primarily focus on enhancing the clinical and supervisory skills on refraction, and to
                            upgrade their knowledge set with hands-on training, and practicing patient service under
                            the direct supervision of a certified refracting optician, Orthoptist, Optometrist, and
                            Ophthalmologist.
                        </p>
                    </div>
                </div>

                {/* Community Ophthalmology Section */}
                <div className="bg-green-100 rounded-lg shadow-md md:flex mt-8">
                    <div className="md:w-1/2">
                        <img
                            src='https://gcmonitor.org/wp-content/uploads/2021/07/team-386673_1920-1.jpeg'
                            alt="Community Ophthalmology"
                            className="rounded-t-lg md:rounded-l-lg w-full h-48 md:h-auto object-fill"
                        />
                    </div>
                    <div className="p-6 md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Community Ophthalmology</h2>
                        <p className="text-lg leading-relaxed">
                            The BEAE Institute of Community Ophthalmology (DICO) is dedicated to making a sustainable,
                            equitable, and comprehensive health care system by developing human resources for own
                            hospitals as well as the country. DICO imparts training for ophthalmologists, Mid-level
                            ophthalmic personnel (MLOP), Outreach workers, Healthcare managers, and Researchers. Our
                            training courses are interactive and hands-on to derive the most benefit from participants'
                            time spent with us. The Institute is recognized by the Ministry of Health and Family welfare,
                            Govt. of the People's Republic of Bangladesh & affiliated by the State Medical Faculty of
                            Bangladesh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationTraining;