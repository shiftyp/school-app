import React, { useEffect, useState } from 'react'
import { SchoolData } from '../types/school-data'
import { SchoolItem } from './school-item'

const fetchData = async (): Promise<SchoolData[]> => {
    const response = await fetch('/data/schools.json')
    const json = await response.json()

    return json
}

export const useSchoolData = () => {
    const [schools, setSchools] = useState<SchoolData[]>([])

    useEffect(() => {
        fetchData().then(setSchools)
    }, [])

    return schools
}

export const SchoolList = () => {
    const schools = useSchoolData()

    return (
        <ul>
            {schools.map(school => {
                return <SchoolItem key={school.name} school={school} />
            })}
        </ul>
    )
}