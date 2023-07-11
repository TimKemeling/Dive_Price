import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { useAPI } from '../helpers/useAPI'
import { Link } from 'react-router-dom'
import { businessName } from '../helpers/helpfuncs'
import { ApiUrls } from '../helpers/helpfuncs'
import Select from 'react-select'


import IndoManta from "../assets/IndoManta.jpg"
import greenTick from "../assets/green-tick.png"
import "../styles/Booking.css"

function Booking() {
    const [isLoading, setIsLoading] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const [readMedical ,setreadMedical] = useState(false)

    // set minimum booking date
    const today = new Date()
    const twoDay = today.setDate(today.getDate() +2)
    const un = new Date(twoDay)
    const year = un.getFullYear()
    const month = (un.getMonth() + 1).toString().length === 1 ? `0${today.getMonth() + 1}`:today.getMonth() + 1 
    const day = un.getDate()

    const pickdate = year + '-' + month + '-' + day

    // set initial booking state
    const [bookData, setBookData] = useState({
        'first_name':'',
        'last_name':'', 
        'diveschool':'',
        'course':'',
        'email':'',
        'date_of_birth':'',
        'date_of_book':'',
        'date_booked':'',
        'comment':'',
        'status':''
    }); 

    // set schoolid
    const [idschool, setSchool] = useState(1)

    // fetch school data and make into option tags
    const FetchSchools = () => {

        const url = ApiUrls.Schoollist
        const response = useAPI(url)
        return response      
    }

    const schoolresponse = FetchSchools()
    const schools = schoolresponse.data 


    const makeSchools = (schools) => {
        const schoollist = schools?.map((school)=> {
            return  {value : school.school_name, label: school.school_name, bookingcat: 'diveschool',  key:school.id}
        })
        return schoollist
    }

    const schoollist = makeSchools(schools)


    // fetch course data and make option tags
    const FetchCourses = () => {
        const url = ApiUrls.CourseList
        const response = useAPI(url)
        return response      
    }

    const courseresponse = FetchCourses()
    const courses = courseresponse.data 

    const makeCourses = (courses) => {
        // eslint-disable-next-line array-callback-return
        const filteredlist = courses?.filter((course)=> {
            if (course.schoolsid_id === idschool) {
                return course
            }
        })
        const courselist = filteredlist?.map((course) => {
            return {value : course.name, label: course.name, bookingcat: 'course',  key:course.id}
        })
        return courselist

    }

    const courselist = makeCourses(courses)


    // change course options when school changes 

    const handleSchoolChange = (event) => {
        setSchool(event.key)
        setBookData({
            ...bookData,
            [event.bookingcat] : event.value,
            'course' : ''
        })
    }
    
    const handleChange = (event) => {
        setBookData({
            ...bookData,
            [event.bookingcat] : event.value
        })
        console.log(bookData)
    }

    // take submitted data and save into state
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.target);
        formData.append('first_name', bookData['first_name'])
        formData.append('last_name', bookData['last_name'])
        formData.append('diveschool', bookData.diveschool)
        formData.append('course', bookData.course)
        formData.append('email', bookData.email)
        formData.append('date_of_birth', bookData.date_of_birth)
        formData.append('date_of_book', bookData.date_of_book)
        formData.append('date_booked', new Date())
        formData.append('comment', bookData.comment)
        
        // send data to backend and wait for response, then reset form data to be empty
        try{

            const url = ApiUrls.Bookings
            const config = {headers: { 'content-type': 'multipart/form-data' }};
            axios.post(url, formData, config)
            .then((response) => {
                setBookData({
                    'first_name':'',
                    'last_name':'',
                    'diveschool':'',
                    'course':'',
                    'email':'',
                    'date_of_birth':'',
                    'date_of_book':'',
                    "date_booked" :'',
                    'comment':'',
                    'status':'success'
                })
                setIsLoading(false)
                setIsBooked(true)

            });

        } catch(error){
            console.log(error)
            setBookData({'status':'error'})
        }
    }

    const refreshPage= () => {
        window.location.reload(false);
    };

    const handleCheckbox = () => {
        setreadMedical(true)
    };

    // set variables for pre filled options 
    let schoolopt
    let courseopt

    let schoolInfo = useRef(null)
    let courseInfo = useRef(null)

    // retrieve data from local storage
    schoolInfo.current = JSON.parse(localStorage.getItem('school')) 
    courseInfo.current = JSON.parse(localStorage.getItem('course')) 

    // prepare options for default value in select component
    if (schoolInfo.current) { schoolopt = {value : schoolInfo.current[0], label: schoolInfo.current[0], bookingcat: 'diveschool',  key: schoolInfo.current[1]}}
    if (courseInfo.current) { courseopt = {value : courseInfo.current[0], label: courseInfo.current[0], bookingcat: 'course',  key: courseInfo.current[1]}}

    // set school id for course drop list, set bookData for school and or course if available 
    useEffect (() => {
        if (schoolInfo.current) {
            setSchool(schoolInfo.current[1])
        }

        if (localStorage.getItem('course')) {
            setBookData({...bookData, 
                'diveschool' : schoolInfo.current[0],
                'course' : courseInfo.current[0]
            })
        } else if (localStorage.getItem('school')) {
            setBookData({...bookData, 'diveschool' : schoolInfo.current[0]})
        } else {schoolInfo.current = null}

    }, [])  // eslint-disable-line react-hooks/exhaustive-deps 
            // adding array above causes infinite loop


    



    return (
        <HelmetProvider>
        <div className="booking">
            <Helmet>
                <title>Book your next Scuba Diving adventure!</title>
                <meta name='description' content='Book your next Scuba Dive adventure! Select your Scuba Course and Dive school and secure your next adventure!'/>
            </Helmet>
            <div style={{ backgroundImage: `url(${IndoManta})`}} className="bookingLeft"></div>
            <div className="bookingRight" >
            {isBooked? <div className='booked'>
                <div style={{ backgroundImage: `url(${greenTick})`}} className='greenTick'></div>
                <h1>Your next adventure is on the way!</h1>
                <h2>Thank you for booking with {businessName}</h2>
                <p>You have been sent a email with you booking details</p>
                <p>The diveschool has been informed of your booking and will reply within 24 hours</p>
                <p>Please remember this is not a confirmed booking yet.</p>
                <p>You will be sent a email confirmation when the booking is finalized</p>
                <div className='bookedbuttons'>
                <Link to={`/home`} className='bookedbuttonlink'><button className='bookedbutton'>Back to home</button></Link> 
                <Link to={`/booking`} className='bookedbuttonlink'><button className='bookedbutton' onClick={refreshPage}>Book another course</button></Link> 
                </div>


            </div> : <div>
            {!isLoading?  <div>

                <h1>Book your Scuba Adventure</h1>                

                <form id="bookingForm" method="POST" className='BookingForm' onSubmit={handleSubmit} onKeyDown={(e) => { e.key ==='Enter' && e.preventDefault() }}>
                    <div className='SchoolAndCourse'>
                        <div className='schoolDrop'>
                            <label htmlFor='diveschool' >choose a diveschool</label>
                            <Select 
                            options = {schoollist}
                            onChange={handleSchoolChange} 
                            name='diveschool'
                            placeholder='Choose a school'
                            defaultValue={schoolInfo === null? null : schoolopt }
                            />

                        </div>
                        <div className='courseDrop'>
                            <label htmlFor='course' >choose a course</label>
                            <Select 
                            className='courseselect'
                            options = {courselist}
                            onChange={handleChange} 
                            name='course'
                            placeholder='Choose a course'
                            defaultValue={courseInfo === null? null : courseopt }

                            />

                        </div>
                    </div>

                    <label htmlFor="first_name">First Name</label>
                    <input name="first_name" onChange={handleChange} type="text" required placeholder="please enter your first name"  />

                    <label htmlFor="last_name">Last Name</label>
                    <input name="last_name" onChange={handleChange} type="text" required placeholder="please enter your last name" />

                    <label htmlFor="email">Email</label>
                    <input name="email" onChange={handleChange} type="email" required placeholder="please enter your email"  />

                    <div className='DobAndMed'>
                        <div className='DoB'>
                            <label htmlFor="date_of_birth">Date of birth</label>
                            <input name="date_of_birth" onChange={handleChange} type='date' required placeholder="please enter your Date of Birth" />
                        </div>
                        <div className='bookingdate'>
                        <label htmlFor="date_of_book">When do you want to dive?</label>
                            <input name="date_of_book" onChange={handleChange} type='date' min={pickdate} required placeholder="please enter the date you want to dive" />
                        </div>
                    </div>
                    <label htmlFor='medical' >
                        <input name='medical' onChange={handleChange} className='medcheck' title='please open the medical form before proceeding' required disabled={!readMedical} onInvalid={e => e.target.setCustomValidity('Your custom message')} type='checkbox' />
                        <span>I have read the <a href={`${process.env.PUBLIC_URL}/assets/Diver_Medical_Participant_Questionnaire.pdf`} target="\_blank\" rel="noreferrer noopener" onClick={handleCheckbox} title='please open this link before proceeding'>medical</a> form and made sure I'm safe to dive</span>
                    </label>

                    <label htmlFor="comment">Comments</label>
                    <textarea name='comment' onChange={handleChange} rows="6" placeholder="Let us know if you have any special requests" maxLength={500}></textarea>
                    <button type="submit" disabled={isLoading} className='submitbutton'>Submit</button>
                </form>
                </div>
                : 
                <div className='loadingbooking'>
                <h1>sending your booking request</h1>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                } </div>}
            </div>
        </div>
        </HelmetProvider>
    )
}

export default Booking
