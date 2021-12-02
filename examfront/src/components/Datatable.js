import List from './List.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Datatable(){
    const [loadingData,setLoadingData] = useState(true);
    const [examData,setExamData] = useState([]);
  
      async function getData(){
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
          await axios.get('http://localhost:5000/api/schedule')
          .then((response)=>{
              setExamData(response.data.replace('\n',""));
              setLoadingData(false);
          }).catch((err)=>{console.log(err)});
          
      }
  
      useEffect(()=>{
          if (loadingData){
              getData();
          }
  
      },[loadingData]);
      
  return (
    <div className="container">
    <h2>Exams This Term</h2>
   <table >
       <thead>
       <tr>
       <th>Course</th>
       <th>Date</th>
       <th>Instructor</th>
       <th>Room</th>
       <th>Time</th>
       </tr>
       </thead>
       <tbody>
           {
             
               loadingData ? 
               (<tr><th>loading Exams Please wait...</th></tr>): 
               <List dataset={examData}></List>
              
           }
       </tbody>
       
   </table>
</div>
  );
}
export default Datatable;