function Navbar() {
    return (
        <>
            <nav className="navbar">
                <h1>Royal Enfield</h1>

                <div className="navbar-links">

                    <p className="navbar-link"><a href="#">Motorcycles</a></p>
                    <p className="navbar-link"><a href="#">Shop</a></p>
                    <p className="navbar-link"><a href="#">Services</a></p>
                    <p className="navbar-link"><a href="#">Rides</a></p>
                    <p className="navbar-link"><a href="#">Our World</a></p>
                    <p className="navbar-link"><a href="#">Support</a></p>
                    <p className="navbar-link"><a href="#">Locate Us</a></p>

                </div>

                <div className="nav_icon">
                    <p style={{color: "white" }}>Login <i className={"fa-solid fa-angle-down"} style={{ color: "#f2f2f2"}}></i></p>
                    <i className={"fa-solid fa-magnifying-glass"} style={{color: "#ffffff"}}></i>

                </div>

            </nav>

        </>
    )
}

export default Navbar