import logo from "./assets/world.svg"

function Header(){
    return (
        <div className="header">
            <img src={logo} alt="" />
            <p className="header-text">my travel journal</p>
        </div>
    )
}

export default Header