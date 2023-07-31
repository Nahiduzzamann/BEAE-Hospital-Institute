import React from 'react';

const EducationTraining = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
            //   src={trainingImage}
              alt="Training"
              className="rounded-lg w-full h-64 object-cover shadow-md"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Education & Training</h1>
            <p className="text-lg leading-relaxed">
              Deep Institute of Community Ophthalmology (DICO) is the training and research wing of
              Deep Eye Care Foundation (DECF). Established in 2017, DICO’s mission to eliminate
              needless blindness and make a sustainable, equitable, and comprehensive health care
              system has led to the development of human resources for our own hospitals as well as
              the country. DICO imparts training for ophthalmologists, Mid-level ophthalmic personnel
              (MLOP), Outreach workers, Healthcare managers, and Researchers. The general framework
              for our training courses is to make them interactive and hands-on so that participants
              can derive the most benefit from their time spent with us. The Institute has been
              recognized by the Ministry of Health and Family welfare, Govt. of the People's Republic
              of Bangladesh & affiliated by the State Medical Faculty of Bangladesh.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">MLOP Certificate Course</h2>
          <p className="text-lg leading-relaxed">
            The course provides knowledge, skills, and attitude through which MLOPs will be able to
            assist the ophthalmologist and render primary eye care services with efficiency and
            accuracy where necessary within the defined boundary of responsibilities. The students
            having passed in SSC (science background preferred) are selected to undergo comprehensive
            theoretical and practical training in Ophthalmic procedures. After successful completion
            of the course, we provide the opportunity for employment at DECF. The course is affiliated
            by the State Medical Faculty of Bangladesh.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Short Term Refraction Course</h2>
          <p className="text-lg leading-relaxed">
            This training is designed for certified Mid-level Ophthalmic Personnel (MLOP) with a desire
            to increase their knowledge and clinical skill along with an attitude towards planning,
            implementing, monitoring, and evaluating activities towards carrying out the refraction
            practice efficiently. Deep Eye Care Foundation with its immense potential has taken
            initiative to provide training on refraction to the MLOPs. The short term training course
            will primarily focus on enhancing the clinical and supervisory skills on refraction, and to
            upgrade their knowledge set with hands-on training, and practicing patient service under
            the direct supervision of a certified refracting optician, Orthoptist, Optometrist, and
            Ophthalmologist.
          </p>
        </div>
      </div>
    </div>
    );
};

export default EducationTraining;