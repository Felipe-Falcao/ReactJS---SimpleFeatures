import React from "react";
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu