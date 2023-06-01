import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useAPI } from "../helpers/useAPI";
import SchoolCard from "../Components/SchoolCard";
import "../styles/Search.css"

function Search() {

    const [searched, setSearched] = useState(false)

    const FetchData = () => {

        const url = "http://127.0.0.1:8000/api/school-list"
        const response = useAPI(url)
        return response      
    }

    const response = FetchData()  

    function makeComp(schools) {
        const schoolList = schools.map(school => {

            let price = 'bla'
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

    const SchoolList = () => {
        if (response.loading === false) {
        const schools = response.data
        return makeComp(schools)
        };
    };

    const [filteredres, setFilteredres] = useState([])


    function onfilter(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries());
        const filters = []
        for (const key in formJson){
            filters.push(key)
        }

        const filtered = []

        response.data.forEach(school => {

            let check = true
            filters.forEach(filter => {
                if (filter === 'maehaad' || filter === 'sairee' || filter === 'chalok') {
                    const name = school['neighbourhood'].replace(' ','').toLowerCase();
                    if (name !== filter){check = false}
                }
                else if (!school[filter]) {
                    check = false}
            })
                
            if (check) {filtered.push(school)}
        });

        setFilteredres(makeComp(filtered))
        handleSearchClick()
    }

    function handleSearchClick() {
        setSearched (true)
    }

    const schoolList = SchoolList()



    return (
        <div className="Searchpage">
            <Helmet>
                <title>Find the perfect diveschool for you!</title>
                <meta name="description" content="Select your parameters, hit Search and Find the perfect dive school for your next Adventure"/>
            </Helmet>

            <h1>Find the perfect dive school for you!</h1>
            <p>Select your parameters, hit Search and Find the perfect dive school for your next Adventure</p>
            <div className="Search">
                <form className="SearchForm" onSubmit={onfilter}> 

                <div className="optionbox">
                    <label htmlFor="Vibe">I'm looking for a ____ diveschool</label>
                    <label><input name="vibe_fun" type="checkbox"/>Fun</label>
                    <label><input name="vibe_family" type="checkbox"/>Family Friendly</label>
                    <label><input name="vibe_backpack" type="checkbox"/>Backpackers</label>
                    <label><input name="vibe_quiet" type="checkbox"/>Quiet</label>
                    <label><input name="vibe_serious" type="checkbox"/>Serious</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="PriceRange">Price Range</label>
                    <label><input name="price_1" type="checkbox"/>$</label>
                    <label><input name="price_2" type="checkbox"/>$$</label>
                    <label><input name="price_3" type="checkbox"/>$$$</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="Size">School Size</label>
                    <label><input name="size_1" type="checkbox"/>Small</label>
                    <label><input name="size_2" type="checkbox"/>Medium</label>
                    <label><input name="size_3" type="checkbox"/>Large</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="Location">Location</label>
                    <label><input name="maehaad" type="checkbox"/>Mae Haad</label>
                    <label><input name="sairee" type="checkbox"/>Sairee</label>
                    <label><input name="chalok" type="checkbox"/>Chalok</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="beach">Beachfront Location</label>
                    <label><input name="beach" type="checkbox" />Yes Please!</label>
                </div>
                <button name="search" type="submit">Search</button>
                </form>
            </div>  
            <div className="Results">
                <div className="SchoolResults">{searched? filteredres : schoolList}</div>
            </div>
        </div>
    )
}

export default Search