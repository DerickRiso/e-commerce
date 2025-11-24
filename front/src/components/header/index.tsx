import './style.css';
import account from "../../assets/icons/account.png";
import cart from "../../assets/icons/cart.png";
import like from "../../assets/icons/like.png";
import search from "../../assets/icons/search.png";
import Nav from "../nav";

export function Header() {
    return (
        <div className="header">
            <h1>
                <img src="/logo.png" />
                Furniro
            </h1>
            <Nav />
            <ul>
                <li>
                    <a href="#">
                        <img src={account} alt="Conta do usuário" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={search} alt="Pesquisa" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={like} alt="Lista de desejos" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={cart} alt="Carrinho" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;