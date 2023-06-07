import React from 'react'
import {Helmet} from 'react-helmet'
import IndoManta from "../assets/IndoManta.jpg"
import "../styles/Booking.css"

function Booking() {
    const today = new Date()
    const twoDay = today.setDate(today.getDate() +2)
    const un = new Date(twoDay)
    const year = un.getFullYear()
    const month = (un.getMonth() + 1).toString().length === 1 ? `0${today.getMonth() + 1}`:today.getMonth() + 1 
    const day = un.getDate()

    const pickdate = year + '-' + month + '-' + day

    return (
        <div className="booking">
            <Helmet>
                <title>Book your next Scuba Diving adventure!</title>
                <meta name='description' content='Book your next Scuba Dive adventure! Select your Scuba Course and Dive school and secure your next adventure!'/>
            </Helmet>
            <div style={{ backgroundImage: `url(${IndoManta})`}} className="bookingLeft"></div>
            <div className="bookingRight">
                <h1>Book your Scuba Adventure</h1>

                
                <form id="bookingForm" method="POST" className='BookingForm'>
                    <div className='SchoolAndCourse'>
                        <div className='schoolDrop'>
                            <label htmlFor='chooseDiveschool' >choose a diveschool</label>
                            <select name='chooseDiveschool'>
                                <option value="diveschool1">diveschool1</option>
                                <option value="diveschool1">diveschool2diveschool2</option>
                                <option value="diveschool1">diveschool3</option>
                                <option value="diveschool1">diveschool4</option>
                            </select>
                        </div>
                        <div className='courseDrop'>
                            <label htmlFor='chooseCourse' >choose a course</label>
                            <select name='chooseCourse'>
                                <option value="course1">course1</option>
                                <option value="course2">course2</option>
                                <option value="course3">course3</option>
                                <option value="course4">couse4</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="name">First Name</label>
                    <input name="name" required placeholder="please enter your first name" type="text" />

                    <label htmlFor="name">Last Name</label>
                    <input name="name" required placeholder="please enter your last name" type="text" />

                    <label htmlFor="email">Email</label>
                    <input name="email" required placeholder="please enter your email" type="email" />

                    <div className='DobAndMed'>
                        <div className='DoB'>
                            <label htmlFor="DateOfBirth">Date of birth</label>
                            <input name="DateOfBirth" type='date' required placeholder="please enter your Date of Birth" />
                        </div>
                        <div className='bookingdate'>
                        <label htmlFor="DateOfbook">When do you want to dive?</label>
                            <input name="DateOfBook" type='date' min={pickdate} required placeholder="please enter your Date of Birth" />
                        </div>
                    </div>
                    <label htmlFor='medical' >
                        <input name='medical' className='medcheck' required type='checkbox' />
                        <span>I have read the medical form and made sure I'm safe to dive</span>
                    </label>

                    <label htmlFor="comment">Comments</label>
                    <textarea name='comment' rows="6" placeholder="Let us know if you have any special requests" maxLength={500}></textarea>
                </form>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Booking
