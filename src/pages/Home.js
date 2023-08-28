import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Home() {
    return (
        <div>
            <Nav /> 
            <div>
                <Outlet />
            </div>
        </div>
        
    )
}