import { Link } from "react-router-dom"

export default function Header({logIn, setLogIn}) {

const logOut =((e)=>{
    e.preventDefault()
    sessionStorage.removeItem("user")
    setLogIn(false)
    sessionStorage.setItem("loggedIn", false)
})

    if(logIn === false || logIn === undefined ){
        return(
            <ul className="navUl">
            <li className="navLi"> <a href="#"> <Link to='/'>Home</Link></a></li>
            <li className="navLi"> <a href="#"> <Link to='/Addforum'>Add Forum</Link></a></li>
            <li className="navLi"> <a href="#"> <Link to='/Login'>Login</Link></a></li>
            <li className="navLi"> <a href="#"> <Link to='/Signup'>Sign Up</Link></a></li>
        </ul>  
        )
    }
    return (
        <ul className="navUl">
            <li className="navLi"> <a href=""> <Link to='/'>Home</Link></a></li>
            <li className="navLi"> <a href=""> <Link to='/Addforum'>Add Forum</Link></a></li>
            <li className="navLi"> <a href=""> <button classname="navButton" onClick={logOut}> Sign Out</button></a></li>
        </ul>
    )
}