import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useAPI } from "../helpers/useAPI";
import SchoolCard from "../Components/SchoolCard";
import "../styles/Search.css"

function Search() {

    const [viz, setViz] = useState('none');

    function handleClick() {
        if (viz === "none"){
            setViz('block')
        }
        else {setViz('none')}
    };

    const [searched, setSearched] = useState(false)

    function handleSearchClick() {
        setSearched(!searched)
    }
    const FetchData = () => {

        const url = "http://127.0.0.1:8000/api/school-list"
        const response = useAPI(url)
        return response      
    }
    const response = FetchData()  

    const SchoolList = () => {
        if (response.loading === false) {
            const schoolList = response.data.map(school => {
                return <SchoolCard
                    key={school.id}
                    name={school.school_name} 
                    agency={school.agency} 
                    id={school.id}/>
            })
            return schoolList
        };
        
    };

    const filtered = () => {
        return <p>you searched</p>
    }

    const schoolList = SchoolList()
    const Filtered = filtered()
    


    return (
        <div className="Searchpage">
            <Helmet>
                <title>Find the perfect diveschool for you!</title>
                <meta name="description" content="Select your parameters, hit Search and Find the perfect dive school for your next Adventure"/>
            </Helmet>

            <h1>Find the perfect diveschool for you!</h1>
            <p>Select your parameters, hit Search and Find the perfect dive school for your next Adventure</p>
            <div className="Search">
                <form className="SearchForm"> 

                <div className="optionbox">
                    <label htmlFor="VibeFun">I'm looking for a ____ diveschool</label>
                    <label><input name="VibeFun" id="VibeFun" type="checkbox"/>Fun</label>
                    <label><input name="Vibefam" type="checkbox"/>Family Friendly</label>
                    <label><input name="Vibebackp" type="checkbox"/>Backpackers</label>
                    <label><input name="Vibequiet" type="checkbox"/>Quiet</label>
                    <label><input name="Vibeserious" type="checkbox"/>Serious</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="PriceRange">Price Range</label>
                    <label><input name="price1" type="checkbox"/>$</label>
                    <label><input name="price2" type="checkbox"/>$$</label>
                    <label><input name="price3" type="checkbox"/>$$$</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="Size">School Size</label>
                    <label><input name="Size1" type="radio"/>Small</label>
                    <label><input name="Size2" type="radio"/>Medium</label>
                    <label><input name="Size3" type="radio"/>Large</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="Location">Location</label>
                    <label><input name="Mae Haad" type="checkbox"/>Mae Haad</label>
                    <label><input name="Sairee" type="checkbox"/>Sairee</label>
                    <label><input name="Chalok" type="checkbox"/>Chalok</label>
                </div>

                <div className="optionbox">
                    <label htmlFor="Beachfront">Beachfront Location</label>
                    <label><input name="Beachfront" type="checkbox" />Yes Please!</label>
                </div>
                </form>
            </div>  
            <button name="search" onClick={handleSearchClick}>Search</button>

            

            <div className="Results">
                <h2 style={{display: viz}}>Your results:</h2>
                <div className="SchoolResults">{searched? Filtered : schoolList}</div>
            </div>
        </div>
    )
}

export default Search