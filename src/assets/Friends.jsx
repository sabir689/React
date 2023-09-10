

import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends() {
    const [users, setusers] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setusers(data))
    }, [])
    return (
        <div className='box'>
            <h3>Users:{users.length}</h3>
        </div>
    )
}