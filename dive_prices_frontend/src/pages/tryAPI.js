import React from "react";
import CourseCard from "../Components/CourseCard";
import { useAPI } from "../helpers/useAPI";


function ApiView () {  

    const FetchData = () => {

        const url = "http://127.0.0.1:8000/api/school-list"
        const response = useAPI(url)
        return response      
    }
    const response = FetchData()  

    const SchoolList = () => {
        if (response.loading === false) {
            const schoolList = response.data.map(school => {
                return <CourseCard
                    key={school.id}
                    name={school.school_name} 
                    price={school.agency} 
                    tagline={school.website_link}
                    id={school.id}/>
            })
            return schoolList
        };
        
    };

    const schoolList = SchoolList()
    

    return (
        <div>
            <h1>stuff</h1>
            <div>
                {schoolList}
            </div>
        </div>

    )
}

export default ApiView