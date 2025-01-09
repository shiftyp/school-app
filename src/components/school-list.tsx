import React, { useEffect, useState } from 'react'
import { SchoolData } from '../types/school-data'
import { SchoolItem } from './school-item'

const fetchData = async (): Promise<SchoolData[]> => {
    const response = await fetch('/data/schools.json')
    const json = await response.json()

    return json
}

export const useSchoolData = () => {
    const [sortColumn, setSortColumn] = useState<keyof SchoolData>('name')
    const [ascending, setAscending] = useState<boolean>(true)
    const [schools, setSchools] = useState<SchoolData[]>([])

    useEffect(() => {
        fetchData().then(setSchools)
    }, [])

    schools.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
            return ascending ? -1 : 1
        } else if (a[sortColumn] > b[sortColumn]) {
            return ascending ? 1 : -1
        }

        return 0
    })

    return { schools, setSortColumn, setAscending, ascending }
}

export const SchoolList = () => {
    const { schools, setSortColumn, setAscending, ascending } = useSchoolData()

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th onClick={() => {
                        setSortColumn('average_student_gpa')
                        setAscending(!ascending)
                    }}>Avg GPA {ascending ? '↑' : '↓'}</th>
                </tr>
            </thead>
            <tbody>
                {schools.map(school => {
                    return <SchoolItem key={school.name} school={school} />
                })}
            </tbody>
        </table>
    )
}