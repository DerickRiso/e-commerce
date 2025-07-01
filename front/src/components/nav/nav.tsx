import {useNavigate} from "react-router-dom";

export function Nav() {

    // hook para navegacao
    const navigate = useNavigate();
    function navigateTo(path: string) {
        navigate(`${path}`);
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="" onClick={() => {navigateTo("/")}}>Home</a>
                </li>
                <li>
                    <a href="" onClick={() => {navigateTo("/shop")}}>Shop</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}