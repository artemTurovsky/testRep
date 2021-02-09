import "NavBar.css"

export const NavBar = () => {
    return (
        <nav className="NavBar__container">
            <img alt="Logo"/>
            <button><img alt="Home"/></button>
            <button><img alt="Dashboard"/></button>
            <button><img alt="Earnings"/></button>
            <button><img alt="Chat"/></button>
        </nav>
    )
}
