import React, { useState } from "react";
import axios from "axios";
import { useAPI } from "../helpers/useAPI";
import { useParams } from "react-router-dom";
import BookingPage from "../Components/bookingpage";
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { businessName } from "../helpers/helpfuncs";


import '../styles/Confirm.css'
import { ApiUrls } from "../helpers/helpfuncs";

function Confirmbooking () {  
    const params = useParams()
    const bookingid = params.bookingid

    const [isLoading, setisLoading] = useState(false)
    const [isFinal, setisFinal] = useState(false)
    const [DenyForm, setDenyForm] = useState(false)
    const [Denyreason, setDenyreason] = useState('')



    const url = ApiUrls.Bookings
    const response = useAPI(url)
    const bookings = response.data


    const makeComp = (booking) => {

        const Age = (dob) => {
            var todayDate = new Date().getTime();
            var birthDate = new Date(dob).getTime();
            var age = Math.floor((todayDate - birthDate) / (1000 * 60 * 60 * 24 * 365))
            return age
          };

        const age = Age(booking.date_of_birth)

        return <BookingPage 
            id={booking.id}
            course={booking.course}
            first_name = {booking.first_name}
            last_name = {booking.last_name}
            email = {booking.email}
            school = {booking.diveschool} 
            date_of_book = {booking.date_of_book}
            date_of_birth={booking.date_of_birth}
            age={age}
        />
    }

    const fetchbooking = () => {
        if (response.loading === false) {
            const booking = bookings.filter(function (booking) {
                return booking.id === bookingid;
            })
            return makeComp(booking[0])
        }
    }

    const bookingcomp = fetchbooking()



    const Acceptbooking = (event) => {
        event.preventDefault()
        setisLoading(true)

        try{
            const url = ApiUrls.BookingConfirm + bookingid
            axios.put(url, {'confirmed': true, 'denied':false, 'deniedfor': ''})
            .then((response) => {
                setisLoading(false)
                setisFinal(true)
            })


        } catch(error){
            console.log(error)
        }
    
    }
    
    const Denybooking = (event) => {
        event.preventDefault()
        if (Denyreason === 'none' || Denyreason === '') {
            alert('please add a reason for denying the booking')
        }
        else {
        setisLoading(true)

        try{
            const url = ApiUrls.BookingConfirm + bookingid
            axios.put(url, {'confirmed': false, 'denied':true, 'deniedfor': Denyreason})
            .then((response) => {
                setisLoading(false)
                setisFinal(true)
            })

        } catch(error){
            console.log(error)
        }}
    };

    const Trydeny = (e) => {
        e.preventDefault() 
        setDenyForm(true)
    }

    const ReasonDeny = (e) => {
        e.preventDefault() 
        setDenyreason(e.target.value)
    }

    const metacont = `Finalise your ${businessName} booking with just 1 click!`



    return (
        <HelmetProvider>
            <Helmet>
                <title>Finalise your {businessName} booking</title>
                <meta name='description' content={metacont}/>
            </Helmet>
        <div className="booking-container">
            <div className='border-container'>
            {bookingcomp}
            {isFinal? <h1 className="finalh1">Thank you for finalising this booking.</h1> 
            : <div>
            {!isLoading? <div>
                {!DenyForm? <div className="buttons">
                    <button className="acceptbutton" onClick={Acceptbooking}>Accept Booking</button>
                    <button className="denybutton" onClick={Trydeny}>Deny Booking</button>
                </div> : <div className="Denyreason">

                <h2 className="denyh2">Please let us know why the booking is being denied</h2>
                <select onChange={ReasonDeny} className="reasondenyselect">
                    <option defaultValue value='none'>please choose a reason</option>
                    <option value='No availability for the selected dates'>No availability for the selected dates</option>
                    <option value='No instructors available'>No instructors available</option>
                    <option value='Too short notice for this course'>Too short notice for this course</option>
                </select>
                <button className="denysend" onClick={Denybooking}>Deny Booking</button>
                </div>
                }

                </div>
            : <div className='loadingconfirm'>
                <h1>saving booking</h1>
                <div class="lds-ring-confirm"><div></div><div></div><div></div><div></div></div>
            </div>} 
            </div> }
            </div>
        </div>
        </HelmetProvider>
    )
}

export default Confirmbooking