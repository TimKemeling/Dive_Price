import React, { useState } from 'react'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import OptionTag from '../Components/Optiontag'
import { useAPI } from '../helpers/useAPI'
import IndoManta from "../assets/IndoManta.jpg"
import "../styles/Booking.css"

function Booking() {

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
        'comment':'',
        'status':''
    });

    // set schoolid
    const [idschool, setSchool] = useState(1)

    // fetch school data and make into option tags
    const FetchSchools = () => {

        const url = "http://127.0.0.1:8000/api/school-list"
        const response = useAPI(url)
        return response      
    }

    const schoolresponse = FetchSchools()
    const schools = schoolresponse.data 
    let schoolid = ''


    const makeSchools = (schools) => {
        const schoollist = schools?.map((school)=> {
            if (school.school_name === idschool){
                schoolid = school.id
            }
            return <OptionTag 
            option = {school.school_name}/>
        })
        return schoollist
    }

    const schoollist = makeSchools(schools)


    // fetch course data and make option tags
    const FetchCourses = () => {
        const url = "http://127.0.0.1:8000/api/course-list"
        const response = useAPI(url)
        return response      
    }

    const courseresponse = FetchCourses()
    const courses = courseresponse.data 


    const makeCourses = (courses) => {
        // eslint-disable-next-line array-callback-return
        const courselist = courses?.map((course)=> {
            if (course.schoolsid_id === schoolid) {
                return <OptionTag 
                option = {course.name}/>
            }
        })
        return courselist
    }

    const courselist = makeCourses(courses)


    // change course options when school changes 

    const handleSchoolChange = (event) => {
        setSchool(event.target.value)
        setBookData({
            ...bookData,
            [event.target.name]:event.target.value
        })
    }
    
    const handleChange = (event) => {
        setBookData({
            ...bookData,
            [event.target.name]:event.target.value
        })
    }

    // take submitted data and save into state
    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target);
        formData.append('first_name', bookData['first_name'])
        formData.append('last_name', bookData['last_name'])
        formData.append('diveschool', bookData.diveschool)
        formData.append('course', bookData.course)
        formData.append('email', bookData.email)
        formData.append('date_of_birth', bookData.date_of_birth)
        formData.append('date_of_book', bookData.date_of_book)
        formData.append('comment', bookData.comment)
        
        // send data to backend and wait for response, then reset form data to be empty
        try{

            const url = 'http://127.0.0.1:8000/api/bookings'
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
                    'comment':'',
                    'status':'success'
                })
            });

        } catch(error){
            console.log(error)
            setBookData({'status':'error'})
        }
    }



    return (
        <div className="booking">
            <Helmet>
                <title>Book your next Scuba Diving adventure!</title>
                <meta name='description' content='Book your next Scuba Dive adventure! Select your Scuba Course and Dive school and secure your next adventure!'/>
            </Helmet>
            <div style={{ backgroundImage: `url(${IndoManta})`}} className="bookingLeft"></div>
            <div className="bookingRight">
                <h1>Book your Scuba Adventure</h1>

                <form id="bookingForm" method="POST" className='BookingForm' onSubmit={handleSubmit}>
                    <div className='SchoolAndCourse'>
                        <div className='schoolDrop'>
                            <label htmlFor='diveschool' >choose a diveschool</label>
                            <select name='diveschool' onChange={handleSchoolChange}>
                            <option selected disabled hidden>choose a school</option>
                                {schoollist}
                            </select>
                        </div>
                        <div className='courseDrop'>
                            <label htmlFor='course' >choose a course</label>
                            <select name='course' className='courseselect' onChange={handleChange}>
                                <option selected disabled hidden>choose a course</option>
                                {courselist}
                            </select>
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
                        <input name='medical' onChange={handleChange} className='medcheck' required type='checkbox' />
                        <span>I have read the <a href="/example.pdf" download="Diver-Medical-Statement" target="\_blank\" rel="noreferrer">medical</a> form and made sure I'm safe to dive</span>
                    </label>

                    <label htmlFor="comment">Comments</label>
                    <textarea name='comment' onChange={handleChange} rows="6" placeholder="Let us know if you have any special requests" maxLength={500}></textarea>
                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Booking
