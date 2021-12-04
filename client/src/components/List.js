import React from 'react';


function List(props){
    // feel better not using Date as thats an object and Server is just using what TRU set
    let exams = props.dataset.replaceAll('Date','examDate');
    const examData = JSON.parse(exams)
    return examData.map((exam) => {
        return(
        <tr>
           <th>{exam.Course}</th>
           <th>{exam.Instructor}</th>
           <th>{exam.examDate}</th>
           <th>{exam.Time}</th>
           <th>{exam.Room}</th>

        </tr>)
    });
}
export default List;