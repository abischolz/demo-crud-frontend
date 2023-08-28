import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from '../pages/Home'
import Students from "../pages/Students";
import Campuses from "../pages/Campuses";
import ErrorPage from "../pages/ErrorPage";

import './App.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element= {<Home />}> 
          <Route path='/students' element={<Students />} />
          <Route path='/campuses' element={<Campuses />} />
          <Route path="*" element={<ErrorPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
