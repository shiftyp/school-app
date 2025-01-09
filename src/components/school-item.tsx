import React from 'react'
import { SchoolData } from '../types/school-data'

type SchoolItemProps = {
    school: SchoolData
}

export const SchoolItem = ({
    school
}: SchoolItemProps) => {
    return <li>{school.name}</li>
}