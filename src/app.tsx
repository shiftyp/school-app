import React, { useState } from 'react'
import { SchoolList } from './components/school-list'

export const App = () => {
    // const [counters, setCounters] = useState<number[]>([0])

    // return <h1 onClick={() => {
    //     setCounters([counters[0] + 1, ...counters])
    // }}>Hello World! Counter: {counters.join(',')}</h1>

    return <SchoolList />
}