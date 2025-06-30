import React from "react";
import account from "../../assets/icons/account.png";
import cart from "../../assets/icons/cart.png";
import like from "../../assets/icons/like.png";
import search from "../../assets/icons/search.png";
import "./header.css";

export function Header() {
    return (
        <div className="header">
            <h1>
                <img src="/logo.png" />
                Furniro
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
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