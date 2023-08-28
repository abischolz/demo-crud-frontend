import { Link } from "react-router-dom"

export default function Nav() {
    console.log('rendering nav')
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/campuses'> Campuses</Link> 
            <Link to='/students'> Students</Link>
        </div>
    )   
}