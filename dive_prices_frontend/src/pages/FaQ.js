import React from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { businessName } from '../helpers/helpfuncs'


import '../styles/FaQ.css'



function Faq() {
    localStorage.clear()

    return (
        <HelmetProvider>
        <div className="FAQ">
            <Helmet>
                <title>{businessName} FAQ</title>
                <meta name='description' content='FAQ for all your burning questions!'/>
            </Helmet>
            <div className="faqheader">
                <h1>FAQ</h1>
            </div>

            <div className='questions'>
                <div className='question'>
                    <h2>Why can I not book a course tomorrow?</h2>
                    <p>
                        We like to give dive schools enough time to make sure they can accommodate you as well as possible.
                        Sometimes it will take some time to find the right instructor for your course, or dive schools can be fully booked.
                    </p>
                </div>
                <div className='question'>
                    <h2>Why do I need to sign a medical form?</h2>
                    <p>
                        Scuba diving is a activity that is inherently risky. As a diver you need to be medically fit to dive to ensure your safety.
                        Most people won't run in to issues with the medical form, but it is always good to check.
                        If you do end up with a yes on your medical form, contact a diving physician to see if you're safe to dive.
                    </p>
                </div>
                <div className='question'>
                    <h2>I have a yes on my medical form, can I still book the course?</h2>
                    <p>
                        You can still book the course but you are running the risk of getting turned away at the dive school.
                        The best thing to do if you have a yes on your medical form is to contact a diving physician and consult with them.
                    </p>
                </div>
                <div className='question'> 
                    <h2>How long before I need a refresher?</h2>
                    <p>
                        Official guidelines say 6-12 months depending on experience.
                        If you have lots of dives and experience diving in all sorts of places, doing a refresher after 1 year is no problem.
                        If you have only a few dives it may be best to do a refresher after about 6 months to make sure you stay safe.
                    </p>
                </div>
                <div className='question'>
                    <h2>Does dive agency matter?</h2>
                    <p>
                        Simple answer? No.
                        Difficult answer? Still No.
                        In the end it is not the agency that teaches the course, it's the instructor. You are looking for a diveschool that fits
                        you. Once you've found that, it doesn't matter what your certification card says!
                    </p>
                </div>
                <div className='question'>
                    <h2>Isnt't there more dive schools on Koh Tao?</h2>
                    <p>
                        Yes there is! Many more. At the moment we are only working with the schools that are currently on the website.
                        We are working on getting more schools to be on the website every day!
                    </p>
                </div>
                <div className='question'>
                    <h2>Can I book diving outside Koh Tao?</h2>
                    <p>
                        Currently {businessName} is a Koh Tao only platform.
                    </p>
                </div>
            </div>
        </div>
        </HelmetProvider>
    )
}

export default Faq
