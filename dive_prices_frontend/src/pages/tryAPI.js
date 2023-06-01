import React from "react";


function ApiView () {  

    const schoolList = [
        {
            "id": 1,
            "school_name": "Big Blue Diving",
            "agency": "SSI",
            "website_link": "https://www.bigbluediving.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Sairee",
            "vibe_fun": true,
            "vibe_family": true,
            "vibe_backpack": true,
            "vibe_quiet": false,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": false,
            "size_2": true,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": true,
            "age_4": false,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": false
        },
        {
            "id": 2,
            "school_name": "Black Turtle Dive",
            "agency": "PADI",
            "website_link": "https://www.blackturtledive.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Sairee",
            "vibe_fun": true,
            "vibe_family": true,
            "vibe_backpack": true,
            "vibe_quiet": false,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": false,
            "size_2": false,
            "size_3": true,
            "age_1": true,
            "age_2": true,
            "age_3": false,
            "age_4": true,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 3,
            "school_name": "Koh Tao Divers",
            "agency": "SSI",
            "website_link": "https://kohtaodivers.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Sairee",
            "vibe_fun": true,
            "vibe_family": false,
            "vibe_backpack": true,
            "vibe_quiet": true,
            "vibe_serious": true,
            "price_1": true,
            "price_2": false,
            "price_3": false,
            "size_1": true,
            "size_2": false,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": true,
            "age_4": false,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 4,
            "school_name": "Scuba Birds",
            "agency": "PADI",
            "website_link": "https://www.scubabirds.com/",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Mae Haad",
            "vibe_fun": true,
            "vibe_family": true,
            "vibe_backpack": false,
            "vibe_quiet": true,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": true,
            "size_2": false,
            "size_3": false,
            "age_1": true,
            "age_2": false,
            "age_3": true,
            "age_4": true,
            "pro_1": true,
            "pro_2": false,
            "pro_3": false,
            "next_day_book": false,
            "beach": false
        },
        {
            "id": 5,
            "school_name": "Hydronauts Diving",
            "agency": "RAID",
            "website_link": "https://www.hydronautsdiving.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Chalok",
            "vibe_fun": true,
            "vibe_family": false,
            "vibe_backpack": true,
            "vibe_quiet": true,
            "vibe_serious": true,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": true,
            "size_2": false,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": true,
            "age_4": false,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 6,
            "school_name": "Nava",
            "agency": "PADI",
            "website_link": "https://www.navascuba.com/",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Chalok",
            "vibe_fun": true,
            "vibe_family": false,
            "vibe_backpack": true,
            "vibe_quiet": true,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": true,
            "size_2": false,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": false,
            "age_4": false,
            "pro_1": false,
            "pro_2": true,
            "pro_3": false,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 7,
            "school_name": "Bans",
            "agency": "PADI",
            "website_link": "https://www.bansdivingresort.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Sairee",
            "vibe_fun": true,
            "vibe_family": true,
            "vibe_backpack": true,
            "vibe_quiet": false,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": false,
            "size_2": false,
            "size_3": true,
            "age_1": true,
            "age_2": true,
            "age_3": true,
            "age_4": false,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 8,
            "school_name": "Crystal Dive",
            "agency": "PADI",
            "website_link": "https://www.crystaldive.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Mae Haad",
            "vibe_fun": true,
            "vibe_family": true,
            "vibe_backpack": true,
            "vibe_quiet": false,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": false,
            "size_2": false,
            "size_3": true,
            "age_1": true,
            "age_2": true,
            "age_3": true,
            "age_4": false,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 9,
            "school_name": "Simple Life Divers",
            "agency": "PADI",
            "website_link": "https://simplelifedivers.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Sairee",
            "vibe_fun": true,
            "vibe_family": true,
            "vibe_backpack": true,
            "vibe_quiet": false,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": true,
            "size_2": false,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": false,
            "age_4": false,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": false
        },
        {
            "id": 10,
            "school_name": "Sairee Cottage Diving",
            "agency": "PADI",
            "website_link": "https://www.saireecottagediving.com/",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Sairee",
            "vibe_fun": true,
            "vibe_family": true,
            "vibe_backpack": false,
            "vibe_quiet": false,
            "vibe_serious": true,
            "price_1": false,
            "price_2": false,
            "price_3": true,
            "size_1": false,
            "size_2": true,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": true,
            "age_4": false,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 11,
            "school_name": "Scuba Shack",
            "agency": "PADI",
            "website_link": "https://www.scubashackkohtao.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Sairee",
            "vibe_fun": true,
            "vibe_family": false,
            "vibe_backpack": true,
            "vibe_quiet": false,
            "vibe_serious": false,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": false,
            "size_2": true,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": false,
            "age_4": true,
            "pro_1": false,
            "pro_2": false,
            "pro_3": true,
            "next_day_book": false,
            "beach": true
        },
        {
            "id": 12,
            "school_name": "New Heaven",
            "agency": "SSI",
            "website_link": "https://www.newheavendiveschool.com",
            "country": "Thailand",
            "city": "Koh Tao",
            "neighbourhood": "Chalok",
            "vibe_fun": true,
            "vibe_family": false,
            "vibe_backpack": true,
            "vibe_quiet": true,
            "vibe_serious": true,
            "price_1": false,
            "price_2": true,
            "price_3": false,
            "size_1": true,
            "size_2": false,
            "size_3": false,
            "age_1": true,
            "age_2": true,
            "age_3": true,
            "age_4": false,
            "pro_1": false,
            "pro_2": true,
            "pro_3": false,
            "next_day_book": false,
            "beach": true
        }
    ]


    function onfilter(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries());

        console.log(formJson)
        const filters = []
        for (const key in formJson){
            filters.push(key)
        }

        const filtered = []

        schoolList.forEach(school => {

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
        
        console.log(filtered)

    }
    

    return (
        <div>
            <h1>stuff</h1>
            <form  onSubmit={onfilter}>
            <div className="optionbox">
                    <label htmlFor="VibeFun">I'm looking for a ____ diveschool</label>
                    <label><input name="vibe_fun"  id="VibeFun" type="checkbox"/>Fun</label>
                    <label><input name="vibe_family"  type="checkbox"/>Family Friendly</label>
                    <label><input name="vibe_backpack"  type="checkbox"/>Backpackers</label>
                    <label><input name="vibe_quiet"  type="checkbox"/>Quiet</label>
                    <label><input name="vibe_serious"  type="checkbox"/>Serious</label>
                </div>
                <div className="optionbox">
                    <label htmlFor="Location">Location</label>
                    <label><input name="maehaad" type="checkbox"/>Mae Haad</label>
                    <label><input name="sairee" type="checkbox"/>Sairee</label>
                    <label><input name="chalok" type="checkbox"/>Chalok</label>
                </div>
                <button type="submit">BUTTON</button>
            </form>
        </div>

    )
}

export default ApiView