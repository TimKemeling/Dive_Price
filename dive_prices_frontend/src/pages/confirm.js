import React, { useState } from "react";
import axios from "axios";
import { useAPI } from "../helpers/useAPI";
import { useParams } from "react-router-dom";
import BookingPage from "../Components/bookingpage";

import '../styles/Confirm.css'

function Confirmbooking () {  
    const params = useParams()
    const bookingid = params.bookingid

    const [isLoading, setisLoading] = useState(false)
    const [isFinal, setisFinal] = useState(true)



    const url = `http://127.0.0.1:8000/api/bookings`
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
            const url = `http://127.0.0.1:8000/api/booking/confirm/${bookingid}`
            axios.put(url, {'confirmed': true, 'denied':false})
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
        setisLoading(true)

        try{
            const url = `http://127.0.0.1:8000/api/booking/confirm/${bookingid}`
            axios.put(url, {'confirmed': false, 'denied':true})
            .then((response) => {
                setisLoading(false)
                setisFinal(true)
            })

        } catch(error){
            console.log(error)
        }


    }

    return (
        <div className="booking-container">
            <div className='border-container'>
            {bookingcomp}
            {isFinal? <h1 className="finalh1">Thank you for finalising this booking.</h1> 
            : <div>
            {!isLoading? <div className="buttons">
                    <button className="acceptbutton" onClick={Acceptbooking}>Accept Booking</button>
                    <button className="denybutton" onClick={Denybooking}>Deny Booking</button>
                </div>
            : <div className='loadingbooking'>
                <h1>saving booking</h1>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>} 
            </div> }
            </div>
        </div>
    )
}

export default Confirmbooking