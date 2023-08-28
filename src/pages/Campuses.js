import { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../components/List'
import Card from '../components/Card'

export default function Campuses() {
    const [campuses, setCampuses] = useState([])
    
    useEffect(() => {
        async function fetchCampuses() {
            try {
                const { data } = await axios.get('http://localhost:5000/api/campuses')
                console.log(data)
                setCampuses(data)
            } catch (error) {
             console.log('An error has occurred when fetching students ....', error)   
            }
        }
        fetchCampuses();
    }, [])
    return (
        <div> 
            <h1>Campuses go here</h1> 
            {campuses && 
                <List>
                {campuses.map((campuse, index) => {
                    return (
                        <Card key={index}>
                            <h3>{campuse.name}</h3>
                        </Card>
                    )
                })}
                </List>
            }

        </div>
    )
}