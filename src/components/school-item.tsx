import React from 'react'
import { SchoolData } from '../types/school-data'
import './school-item.css'

type SchoolItemProps = {
    school: SchoolData
}

export const SchoolItem = ({
    school
}: SchoolItemProps) => {
    return <li className='school-item'>{school.name}</li>
}