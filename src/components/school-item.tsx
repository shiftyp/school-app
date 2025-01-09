import React from 'react'
import { SchoolData } from '../types/school-data'

type SchoolItemProps = {
    school: SchoolData
}

export const SchoolItem = ({
    school
}: SchoolItemProps) => {
    return (
        <tr>
            <td>{school.name}</td>
            <td>{school.average_student_gpa}</td>
        </tr>
    )
}