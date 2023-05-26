import './App.css';
import React, {useState} from 'react';
import { useAPI } from './REALuseAPI';

function App() {
  const [list, setList] = useState('school-list')
  const {data, loading } = useAPI(`http://127.0.0.1:8000/api/${list}`); // note backticks for using const in string
  const n = (data) => {
    const l = []
    if (list === 'school-list' || list === 'schools-by-location'){
      for (let i =0; i < data.length ; i++) {

        l.push(
          <div className='school'>
          <p>{data[i].school_name}</p>
          <p>{data[i].agency}</p>
          <p>{data[i].website_link}</p>
          <p>{data[i].location}</p>
          <p>---------------------------------------------------</p>

          </div>
        
        )
      }
      return l
    }
    else{
      for (let i =0; i < data.length ; i++) {

        l.push(
          <div className='school'>
          <p>{data[i].name}</p>
          <p>{data[i].school}</p>
          <p>{data[i].price}</p>
          <p>{data[i].location}</p>
          <p>---------------------------------------------------</p>

          </div>
        
        )
      }
      return l
    }};

    function handleListChange(e){
      setList(e.target.value)
    }
  
  return <div>
    <div>
    <select onChange={handleListChange}>
      <option value="school-list">school list</option>
      <option value="course-overview">course-overview</option>
      <option value="school-overview">school overview</option>
      <option value="schools-by-location">schools by location</option>
    </select>
      {/* <button onClick={() => setList(list => 'school-list')}>school list</button>
      <button onClick={() => setList(list => 'course-overview')}>course overview</button>
      <button onClick={() => setList(list => 'school-overview')}>school overview</button>
      <button onClick={() => setList(list => 'schools-by-location')}>schools by location</button> */}

    </div>
    
    {loading ? "loading..." : n(data)}
    
    </div>
};

export default App;



// 'api/school-list'
// 'api/course-detail'
// 'api/course-overview'
// 'api/school-overview', 
// 'api/schools-by-location'