const Navbar = () =>{
    return(
        <div className='Navv'>
        <nav>
            <div className='logo'>
                <img src="./images/brand_logo.png" alt="logo" />
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Products</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button>Login</button>
            </nav>
        </div>
    );
}

export default Navbar;