import Navbar from '../header/Navbar.js'
import CssInfo from '../body/CssInfo';
import React  from "react";
import { Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Navbar />
            <CssInfo />
        </div>
    )
}

export default Home