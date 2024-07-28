const courses = [
    {
        image: 'img/course-3.jpg',
        name: 'Nursing And Midwifery',
        description: 'Nursing and midwifery are two of the most important professions in the world. Nurses and midwives care for people of all ages, from newborns to the elderly, in hospitals, clinics, schools, and homes. They provide physical and emotional care, educate patients and families, and advocate for their patients\' rights.'
    },
    {
        image: 'img/carousel-1.jpg',
        name: 'Medical Laboratory Science',
        description: `Medical laboratory science is a growing field with excellent job prospects. The Bureau of Labor Statistics projects that employment of MLSs will grow 12% from 2020 to 2030, faster than the average for all occupations. This growth is due to the increasing demand for laboratory testing, as well as the aging population. With a bachelor's degree in MLS, you can start a rewarding career in this growing field.`
    },
    {
        image: 'img/carousel-2.jpg',
        name: 'Medical Imaging Technology',
        description: 'Medical imaging technology is a rapidly growing field that uses various techniques to create images of the human body for medical diagnosis and treatment. These images can be used to detect diseases, injuries, and other abnormalities, and to plan and guide medical procedures.'
    }
    , {
        image: 'img/course-3.jpg',
        name: 'Nursing And Midwifery',
        description: 'Nursing and midwifery are two of the most important professions in the world. Nurses and midwives care for people of all ages, from newborns to the elderly, in hospitals, clinics, schools, and homes. They provide physical and emotional care, educate patients and families, and advocate for their patients\' rights.'
    },
    {
        image: 'img/carousel-1.jpg',
        name: 'Dental Therapy',
        description: 'Dental therapists are in high demand, and the job outlook for this profession is excellent. If you are looking for a rewarding career in oral health care, dental therapy is a great option.'
    },
    {
        image: 'img/carousel-2.jpg',
        name: 'Physiotherapy',
        description: 'If you are interested in a career in healthcare, physiotherapy science is a great option. Physiotherapists are in high demand, and the profession is expected to grow in the coming years. A degree in physiotherapy science will teach you the skills and knowledge you need to assess, diagnose, and treat a variety of conditions. You will also learn how to use evidence-based practice to develop treatment plans that are tailored to the individual needs of your patients.'
    }
    , {
        image: 'img/course-3.jpg',
        name: 'Pharmacy',
        description: `Are you interested in a career in health and wellness? If so, consider a degree in pharmacy! Pharmacists are healthcare professionals who dispense medications and provide patient counseling. They play a vital role in the healthcare system, helping to ensure that patients receive the medications they need safely and effectively.A degree in pharmacy from our school will prepare you for a successful career in this growing field. Our program is accredited by the Accreditation Council for Pharmacy Education (ACPE), and our graduates are highly sought-after by employers.`
    },
    {
        image: 'img/carousel-1.jpg',
        name: `School Of Business Managment (HND)`,
        description: 'Health care managers must have a strong understanding of healthcare finance, law, and ethics. They must also be able to effectively communicate with patients, staff, and other stakeholders.'
    },
    {
        image: 'img/carousel-2.jpg',
        name: 'Business Administration',
        description: `Are you looking to advance your career in business? Are you eager to learn from the best and brightest minds in the industry? If so, then you should consider enrolling in the School of Business Management.Our school offers a wide range of programs that will prepare you for a successful career in business. Our bisiness cources includes.
Marketing, Banking And Finance, Accounting, Human Resource management, Project Managment`
    },
    ,
    {
        image: 'img/carousel-2.jpg',
        name: 'School Of Agriculture And Food Science',
        description: `Join the School of Agricultural and Food Science and make a difference in the world.Our programs are designed to prepare you for a career in Food Processing And Agricultural Engineering, or a related field`
    },
];

// Function to create course elements
function createCourseElement(course) {
    const courseDiv = document.createElement('div');
    courseDiv.className = 'col-lg-4 col-md-6 wow fadeInUp';
    courseDiv.dataset.wowDelay = '0.1s';

    courseDiv.innerHTML = `
        <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid" src="${course.image}" alt="${course.name}">
            </div>
            <div class="text-center p-4 pb-0">
                <h3 class="mb-0">${course.name}</h3>
            </div>
            <div class="d-flex border-top">
                <span class="mb-4 px-2">${course.description}</span>
            </div>
        </div>
    `;

    return courseDiv;
}
// Get the container div
const listOfCourses = document.getElementById('list-of-courses');

// Map over the courses array and append each course element to the container
courses.forEach(course => {
    const courseElement = createCourseElement(course);
    listOfCourses.appendChild(courseElement);
});