import React, { use } from 'react';

const Mark = ({markPromise})  =>{
    const markdata = use(markPromise);
    const markdata2 = markdata.data

    const markss = markdata2.map(studentData => {
        const student ={
            id: studentData_id,
            name: studentData.name,
            physic: studentData.marks.physics,
            math: studentData.marks.math
        }
        return student;
    })
    console.log(markss)

    return (
        <div>
            
        </div>
    );
}

export default Mark;