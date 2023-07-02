import React from 'react';

function BookingPage({id, course, first_name, last_name, email, school, date_of_birth, date_of_book, age}) {
    return (
            <div className='content-container'>
            <h3>Booking {id}</h3>

            <h2>Course booked:</h2>
            <h3>{course}</h3>

            <h2>Booked By:</h2>
            <h3>{first_name}{last_name}</h3>
            <h3>Date of Birth : {date_of_birth}</h3>
            <h3>age : {age} </h3>
            <h3>{email}</h3>

            <h2>Booking Date:</h2>
            <h3>{date_of_book}</h3>
            </div>
    )
}

export default BookingPage


