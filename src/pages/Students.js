import { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../components/List'
import Card from '../components/Card'

export default function Students() {
    const [students, setStudents] = useState([])
    
    useEffect(() => {
        async function fetchStudents() {
            try {
                const { data } = await axios.get('http://localhost:5000/api/students')
                console.log(data)
                setStudents(data)
            } catch (error) {
             console.log('An error has occurred when fetching students ....', error)   
            }
        }
        fetchStudents();
    }, [])
    return (
        <div> 
            <h1>Students go here</h1> 
            {students && 
                <List>
                {students.map((student, index) => {
                    return (
                        <Card key={index}>
                            <h3>{student.firstName} {student.lastName}</h3>
                        </Card>
                    )
                })}
                </List>
            }

        </div>
    )
}