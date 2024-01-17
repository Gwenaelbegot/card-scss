import { Link } from "react-router-dom"

import '../assets/Sakura.png'
import "./Header.css";

function Header() {
    return (

        <nav className="navBar">

        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/articles/1">Article 1</Link></button>
        <button><Link to="/articles/2">Article 2</Link></button>
        <button><Link to="/articles/3">Article 3</Link></button>

        </nav>
    )
}

export default Header;