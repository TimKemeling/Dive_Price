import React from 'react';
import { useParams } from "react-router-dom";
import { useAPI } from '../helpers/useAPI';
import CourseCard from '../Components/CourseCard';
import {Helmet, HelmetProvider} from 'react-helmet-async'


import "../styles/Course.css";
import "../styles/Coursecard.css"
import { businessName } from './names';

function Course() {
    const params = useParams();
    let head1 = ''
    let p1 = ''
    let sched = ''
    
    const FetchBeginnerlist = () => {
        const url = "http://127.0.0.1:8000/api/beginner-overview"
        const response = useAPI(url)
        return response
    }

    const FetchAdvancedlist = () => {
        const url = "http://127.0.0.1:8000/api/advanced-overview"
        const response = useAPI(url)
        return response 
    }

    const FetchFundivelist = () => {
        const url = "http://127.0.0.1:8000/api/fundiving-overview"
        const response = useAPI(url)
        return response
    }


    function filterOW(courses) {
        const courseList = courses.filter(function (course) {
            return course.name === 'Open Water Diver' || 
                    course.name === 'Open Water 20';
        });
        return courseList
    }

    function filterTry(courses) {
        const courseList = courses.filter(function (course) {
            return course.name === 'Discover Scuba Diving' || 
                    course.name === 'Basic Diver' ||
                    course.name === 'Try Diving';
        });
        return courseList
    }

    function filterFD(courses) {
        const courseList = courses.filter(function (course) {
            return course.name === 'Fun Diving';
        });
        return courseList
    }

    function filterRef(courses) {
        const courseList = courses.filter(function (course) {
            return course.name === 'Refresher';
        });
        return courseList
    }

    function filterAOW(courses) {
        const courseList = courses.filter(function (course) {
            return course.name === 'Advanced Adventurer' || 
                    course.name === 'Advanced Open Water' ||
                    course.name === 'Explorer 30';
        });
        return courseList
    }

    function filterSpec(courses) {
        const courseList = courses.filter(function (course) {
            return course.name.includes('Specialty');
        });
        return courseList
    }

    const MakeCourselist = () => {
        let response = []
        switch (params.course) {
            case 'Open-Water':
                head1 = 'Open water'
                p1 = `The Open Water course is the entry-level certification for scuba diving. 
                It covers theory, skills, and open water dives, equipping participants with the knowledge and abilities for safe diving. 
                Upon completion, students earn a Open Water Diver certification, enabling autonomous diving to 18 or 20 meters, depending on certifying agency. 
                It's the starting point for exciting diving adventures and further training.`
                
                sched = `The Open Water Course is normally conducted over 3-3,5 days.
                Some schools work with orientation evenings to familiarise you with their specific schedule and course. 
                On the first day students will normally do some academic work and their confined water sessions (shallow water or pool training). 
                The second day includes more academic work and 2 dives in the open water.
                The last day includes 2 open water dives to finish up the course and a small celebration.`

                response = FetchBeginnerlist()
                if (response.loading === false){
                    const courses = response.data
                    const courselist = filterOW(courses)
                    return courselist
                }
                break;
            case 'Try-Diving':
                head1 = 'Try Diving'
                p1 = `Try diving courses go by many names including: Try Diving, Basic Diver or Discover Scuba diving. These are all the same course from different agencies. 
                It's an introductory experience that allows individuals to discover scuba diving in a controlled environment under the supervision of an instructor. 
                It covers a small amount of theory to make sure students know the important safety rules and some confined water work to get familiar with equipment. 
                Students are provided a taste of the underwater world without a certification. For certification the full Open Water course needs to be completed.`

                sched = `A Try diving experience is done in 1 day. You will meet your instructor in the morning and go trough some basics. 
                Some schools start with theory, others with the confined water session. A lot of schools do the confined session in the afternoon in a shallow bay. 
                Once the theory and confined have been completed you're ready for a dive. At a maximum depth of 12 meters these dives are relatively safe and easy. 
                There is often an option for doing a second dive if you wish to do so for a small fee. `

                response = FetchBeginnerlist()
                if (response.loading === false){
                    const courses = response.data
                    const courselist = filterTry(courses)
                    return courselist
                }
                break;
            case 'Fundiving':
                head1 = 'Fun Diving'
                p1 = `Fun Dives are diving experiences for certified divers to explore dive sites, marine life, and underwater ecosystems. 
                It offers the diver the freedom to choose when and where they want to go diving.
                Dive schools will set dive sites 1 or 2 days before the boat is planned to go out. 
                The dive sites are scheduled with weather, diver capability and course requirements in mind. 
                As a certified diver you can sign up to go diving at any diveschool providing you have been diving recently and you have proof of certification.`

                sched = `Most diveschools will have 2 trips per day. One in the morning and one in the afternoon. 
                Morning trips go out around 7 and are back around noon, afternoon trips go out around 1 and are back around 5. 
                The trips consist of 2 dives at different dive sites. 
                The timing normally allows for divers to do two dives of about an hour under the guidance of a experienced dive guide. 
                In between dives fresh fruit and refreshments are served and (de)briefings are done leading up to the next dive.`

                response = FetchFundivelist()
                if (response.loading === false){
                    const courses = response.data
                    const courselist = filterFD(courses)
                    return courselist
                }
                break;
            case 'Refresher':
                head1 = 'Refreshers'
                p1 = ` Refresher courses provide certified divers with the opportunity to review diving knowledge and skills after a period of inactivity. 
                The general recommendation by large dive agencies is to do a refresher after 6-12 months of inactivity depending on previous experience. 
                Refreshers take divers trough the basic theory and safety procedures they learned on their Open Water Courses. 
                Next to the theory there is a skill review to ensure people know how to use dive equipment and keep themselves safe. 
                Ultimately, refreshers help divers regain confidence and ensure safe diving practices by refreshing essential techniques and procedures.`

                sched = `Refreshers generally start in the morning with some theory. 
                Some schools use a classroom setting with a whiteboard, while others give students a questionnaire and review this with them individually or as a group. 
                Once the classroom portion is done students will be shown equipment set-up to make sure this is fresh in their minds again. 
                After the equipment set-up some skills will be explained and demonstrated after which the student can attempt them. 
                Once the skills are completed to a satisfactory level, students are ready to explore the open water once again. 
                This is often done on the same day in the afternoon.`

                response = FetchFundivelist()
                if (response.loading === false){
                    const courses = response.data
                    const courselist = filterRef(courses)
                    return courselist
                }
                break;
            case 'Advanced-Open-Water':
                head1 = 'Advanced Open Water'
                p1 = `Going by Advanced Open Water, Advanced Adventurer or Explorer 30 depending on the agency, 
                the Advanced Open water course is a course designed to expand diving skills and knowledge beyond the Open Water level. 
                The course consists of 5 dives and each dive is part of a larger specialty course. 
                It includes deep dives, underwater navigation, and three additional adventure dives to enhance confidence and expertise. 
                If you do the specialty course itself you can count the Advanced open water dive as experience towards your certification. `

                sched = `Done over 2 days, the Advanced often consists the following dives: Deep, Navigation, Wreck, Buoyancy and night. 
                Bad weather, dive site availability or student preference can all change the dives chosen to be connducted during the Advanced Course. 
                Depending on the dives being done the course starts with a academic session covering the needed subjects. 
                In the afternoon there will be 2 dives followed by a nightdive if elected and available. 
                The next moring the course will be finished with 2 more dives. 
                Sometimes the night dive will be planned on the second day or a different third dive will be done if the choice was made not to do a night dive`

                response = FetchAdvancedlist()
                if (response.loading === false){
                    const courses = response.data
                    const courselist = filterAOW(courses)
                    return courselist
                }
                break;
            case 'Specialties':
                head1 = 'Specialties'
                p1 = `Specialty courses are courses focused on specific diving interests such as underwater photography, wreck diving, night diving, and more. 
                These courses provide specialized training to explore specific areas of diving in greater depth. 
                One of the most common Specialties is Nitrox Diving which allows you to dive with a higher percentage of oxygen to extend you bottom time by lowering nitrogen exposure. 
                Another popular course is the Deep Specialty which allows you to dive up to 40 meters depth. `

                sched = `Schedules for specialty courses depend heavily on what course has been chosen. 
                Most Specialties take 2 days to complete while some can be done in a afternoon and others take over a week. 
                When booking a specialty course, make sure to have enough time in your schedule to finish the course. 
                Also mention in a comment with your booking what time your schedule allows to help the divecenter plan your course.`

                response = FetchAdvancedlist()
                if (response.loading === false){
                    const courses = response.data
                    const courselist = filterSpec(courses)
                    return courselist
                }
                break;
            default:
                break;
        }
    };

    const makeComp = (courses) => {
        const courselist = courses?.map( course => {

            return <CourseCard
            key={course.id}
            name={course.name}
            level = {course.level} 
            price = {course.price}
            agency={course.agency}
            school = {course.school}
            school_id={course.schoolsid_id}/>
        })
        return courselist
    }

    const courses = MakeCourselist()
    const courselist = makeComp(courses)
    let count = 0 
    courses?.forEach(element => {
        count = count + 1
    });

    const metacont = `Browse different ${head1} courses on ${businessName} and find out which one suits you best!`

    return (
        <HelmetProvider>
        <div className='coursePage'>
            <Helmet>
                <title>{businessName} {head1} Scuba Courses</title>
                <meta name='description' content={metacont}/>
            </Helmet>

            <h1>{head1}</h1>
            <div className='info'>
                <p className='courseOutline'>{p1}</p>
                <h2>Schedule</h2>
                <p className='courseSchedule'>{sched}</p>
                <p className='disclaimer'>*Course structures and schedules can change per school. <br/>
                We can not guarantee these schedules are accurate for every school*</p>

                <p></p>
                <p>Courses available: {count}</p>
            </div>

            <div className='coursesContainer'>
                {courselist}
            </div>
        </div>
        </HelmetProvider>
    )
}
export default Course
