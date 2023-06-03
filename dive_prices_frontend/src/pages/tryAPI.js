import React from "react";
import { useAPI } from "../helpers/useAPI";


function ApiView () {  

    const url = "http://127.0.0.1:8000/api/beginner-overview"
    const response = useAPI(url)
    const course_list = response.data

    return (
        <div>
            <h1>Beginner scuba dive courses</h1>
            <button>Try Diving</button>
            <button>Open Water Course</button>

            <p>Beginner dive courses are designed to introduce you to the exciting world of scuba diving. 
                These courses provide the necessary knowledge and skills to safely explore the underwater realm. 
                Led by experienced instructors, beginner dive courses typically consist of a combination of classroom sessions, confined water training, and open water dives. 
                Participants learn fundamental diving concepts such as equipment usage, buoyancy control, equalization techniques, and dive planning. 
                <br/><br/>
                Through hands-on training in confined water settings, beginners practice essential dive skills like mask clearing, regulator recovery, and buoyancy. 
                Once the foundational skills are mastered, students progress to open water dives, where they put their knowledge into practice while immersing themselves in the breathtaking underwater environment.
                Beginner dive courses often include multiple open water dives to gain experience and confidence. 
                <br/><br/>
                These courses not only provide the necessary certifications, such as the Open Water Diver certification, but also foster a sense of adventure, curiosity, and respect for the underwater world. 
                They lay the groundwork for a lifetime of exploration and appreciation of the ocean's wonders. 
                Whether in tropical locations with vibrant coral reefs or in colder waters with unique marine life, beginner dive courses offer individuals the opportunity to embark on an incredible journey beneath the waves.</p>
        </div>

    )
}

export default ApiView