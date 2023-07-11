import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from "react";
import { useAPI } from "../helpers/useAPI";
import SchoolCard from "../Components/SchoolCard";
import "../styles/Search.css"
import { ApiUrls } from "../helpers/helpfuncs";

function Search() {

    const [searched, setSearched] = useState(false)
    const [filteredres, setFilteredres] = useState([])



    // Fetch schools list from api and store in 'response'
    const FetchData = () => {

        const url = ApiUrls.Schoollist
        const response = useAPI(url)
        return response      
    }

    const response = FetchData()  

    // make components from schools data using schoolcard component
    function makeComp(schools) {
        const schoolList = schools.map(school => {

            let price = ''
            if (school.price_1 === true) {
                price = "$"
            } else if (school.price_2 === true){
                price = "$$"
            } else {price = "$$$"}

            return <SchoolCard
                key={school.id}
                name={school.school_name} 
                price = {price}
                agency={school.agency}
                tagline = {school.tagline} 
                description = {school.description}
                id={school.id}/>
        })
        return schoolList
    }

    // takes all schools and makes components to populate page at load
    const SchoolList = () => {
        if (response.loading === false) {
        const schools = response.data
        return makeComp(schools)
        };
    };


    // contains filter logic for form submittal
    function onfilter(event) {
        // prevents full reload on submit form
        event.preventDefault();
        
        // pull all form data and store the filters in array
        const form = event.target;
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries());
        const filters = []
        for (const key in formJson){
            filters.push(key)
        }


        // initiate filter categories and list all filters to be able to categorise them 
        const vibefilters = []
        const pricefilters = []
        const sizefilters = []
        const locationfilters = []
        const beachfrontfilters = []

        const filtercat = {
            'vibe': ['vibe_fun', 'vibe_family', 'vibe_quiet', 'vibe_backpack', 'vibe_serious'],
            'price': ['price_1', 'price_2', 'price_3'],
            'size': ['size_1', 'size_2', 'size_3'],
            'location': ['maehaad', 'sairee', 'chalok'],
            'beach': ['beach']
          }
                    
          // categorise all filters in correct arrays
          filters.forEach(filter => {
            for (const cat in filtercat) {
                for (const x in filtercat[cat]){
                    if (filter === filtercat[cat][x]) {
                        switch (cat) {
                            case 'vibe':
                                vibefilters.push(filter)
                                break;
                            case 'price':
                                pricefilters.push(filter)
                                break;
                            case 'size':
                                sizefilters.push(filter)
                                break;
                            case 'location':
                                locationfilters.push(filter)
                                break;
                            case 'beach':
                                beachfrontfilters.push(filter)
                                break;
                            default:
                                break;
                        }
                    }
              }
          }
          });


        const vibefiltered = []
        const pricefiltered = []
        const sizefiltered = []
        const locationfiltered = []
        const beachfrontfiltered = []

        const filtered = []

        // compare filters to schools and save qualifying schools in separate arrays per category 
        response.data.forEach(school => {
            vibefilters.forEach(filter => {
                if (school[filter]) {
                    if (!vibefiltered.includes(school) ){
                        vibefiltered.push(school.id)
                    }
                }
            })

            pricefilters.forEach(filter => {
                if (school[filter]) {
                    if (!pricefiltered.includes(school) ){
                        pricefiltered.push(school.id)
                    }
                }
            })

            sizefilters.forEach(filter => {
                if (school[filter]) {
                    if (!sizefiltered.includes(school) ){
                        sizefiltered.push(school.id)
                    }
                }
            })

            locationfilters.forEach(filter => {
                if (school['neighbourhood'] === filter) {
                    if (!locationfiltered.includes(school) ){
                        locationfiltered.push(school.id)
                    }
                }
            })

            beachfrontfilters.forEach(filter => {
                if (school[filter]) {
                    if (!beachfrontfiltered.includes(school) ){
                        beachfrontfiltered.push(school.id)
                    }
                }
            })
        });

        // fill array in case of no filter clicked
        if (vibefiltered.length === 0) {response.data.forEach(school => vibefiltered.push(school.id))}
        if (pricefiltered.length === 0) {response.data.forEach(school => pricefiltered.push(school.id))}
        if (sizefiltered.length === 0) {response.data.forEach(school => sizefiltered.push(school.id))}
        if (locationfiltered.length === 0) {response.data.forEach(school => locationfiltered.push(school.id))}
        if (beachfrontfiltered.length === 0) {response.data.forEach(school => beachfrontfiltered.push(school.id))}


        // compare filtered arrays with each other and push accompanying school in to final array 
        response.data.forEach(school => {
            if (pricefiltered.includes(school.id)&& vibefiltered.includes(school.id) && sizefiltered.includes(school.id) && locationfiltered.includes(school.id) && beachfrontfiltered.includes(school.id)) {
                filtered.push(school)
            }
        });

        // set searched to true to refresh list 
        handleSearchClick()

        // if no filters have been ticked full list will show, otherwise filtered results will show
        if (filters.length === 0){ setSearched(false)}
        else {setFilteredres(makeComp(filtered))}

    }

    function handleSearchClick() {
        setSearched (true)
    }

    // set schoollist to full list to show something at load 
    const schoolList = SchoolList()

    const resultnum = filteredres.length

    const [searchoptions, setSearchoptions] = useState({
            "vibe_fun" : false,
            'vibe_family' : false,
            'vibe_backpack' : false,
            "vibe_quiet" : false,
            "vibe_serious" : false,
            "price_1" : false,
            "price_2" : false,
            "price_3" : false,
            "size_1" : false,
            "size_2" : false,
            "size_3" : false,
            "maehaad" : false,
            "sairee" : false,
            "chalok" : false,
            "beach" : false,
    })




    localStorage.removeItem('school')
    localStorage.removeItem('course')
    
    useEffect(() => {
        if (localStorage.getItem('searchoptions')) {
            setSearchoptions(JSON.parse(localStorage.getItem('searchoptions')) )
        } else {
            localStorage.setItem('searchoptions', JSON.stringify(searchoptions))
        }
    }, [])

    const handleChange = (event) => {
        let curr = event.target.checked
        setSearchoptions({...searchoptions, 
            [event.target.name] : curr
        })

        localStorage.setItem('searchoptions', JSON.stringify(searchoptions))
    }

    // WORKS 90% DOESN'T UPDATE LAST CHECKED BOX, ALSO DOESN'T FILTER ON RELOAD


    return (
        <HelmetProvider>
        <div className="Searchpage">
            <Helmet>
                <title>Find the perfect diveschool for you!</title>
                <meta name="description" content="Select your parameters, hit Search and Find the perfect dive school for your next Adventure"/>
            </Helmet>

            <div className="toptext">
            <h1>Find the perfect dive school for you!</h1>
            <p>Select your parameters, hit Search and Find the perfect dive school for your next Adventure</p>
            </div>
            <div className="Search">
                <form className="SearchForm" onSubmit={onfilter}> 
                <div className="options">
                    <div className="optionbox">
                        <label className="toplabel" htmlFor="Vibe">I'm looking for a <span style={{textDecoration: 'underline'}}>___</span> diveschool</label>
                        <label><input onChange={handleChange} checked={searchoptions['vibe_fun']} name="vibe_fun" type="checkbox"/>Fun</label>
                        <label><input onChange={handleChange} checked={searchoptions['vibe_family']} name="vibe_family" type="checkbox"/>Family Friendly</label>
                        <label><input onChange={handleChange} checked={searchoptions['vibe_backpack']} name="vibe_backpack" type="checkbox"/>Backpackers</label>
                        <label><input onChange={handleChange} checked={searchoptions['vibe_quiet']} name="vibe_quiet" type="checkbox"/>Quiet</label>
                        <label><input onChange={handleChange} checked={searchoptions['vibe_serious']} name="vibe_serious" type="checkbox"/>Serious</label>
                    </div>

                    <div className="optionbox">
                        <label htmlFor="PriceRange">Price Range</label>
                        <label><input onChange={handleChange} checked={searchoptions['price_1']} name="price_1" type="checkbox"/>$</label>
                        <label><input onChange={handleChange} checked={searchoptions['price_2']} name="price_2" type="checkbox"/>$$</label>
                        <label><input onChange={handleChange} checked={searchoptions['price_3']} name="price_3" type="checkbox"/>$$$</label>
                    </div>

                    <div className="optionbox">
                        <label htmlFor="Size">School Size</label>
                        <label><input onChange={handleChange} checked={searchoptions['size_1']} name="size_1" type="checkbox"/>Small</label>
                        <label><input onChange={handleChange} checked={searchoptions['size_2']} name="size_2" type="checkbox"/>Medium</label>
                        <label><input onChange={handleChange} checked={searchoptions['size_3']} name="size_3" type="checkbox"/>Large</label>
                    </div>

                    <div className="optionbox">
                        <label htmlFor="Location">Location</label>
                        <label><input onChange={handleChange} checked={searchoptions['maehaad']} name="maehaad" type="checkbox"/>Mae Haad</label>
                        <label><input onChange={handleChange} checked={searchoptions['sairee']} name="sairee" type="checkbox"/>Sairee</label>
                        <label><input onChange={handleChange} checked={searchoptions['chalok']} name="chalok" type="checkbox"/>Chalok</label>
                    </div>

                    <div className="optionbox">
                        <label htmlFor="beach">Beachfront Location</label>
                        <label><input onChange={handleChange} name="beach" type="checkbox" />Yes, please!</label>
                    </div>
                </div>

                <div className="buttonbox">
                    <button name="search" type="submit">Search</button>
                </div>
                </form>
            </div>  
            <div className="Results">
                {!searched? <p style={{display:"none"}}></p> : <p className="resultnum">{resultnum} schools found</p>}
                <div className="SchoolResults">{searched? filteredres : schoolList}</div>
            </div>
        </div>
        </HelmetProvider>
    )
}

export default Search