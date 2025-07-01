import { Nav } from "../header/nav/nav";
import "./footer.css";

export function Footer() {
    return (
        <footer>
            <div className="info">
                <div className="address">
                    <h3>Funiro.</h3>
                    <address>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</address>
                </div>
                <div className="links">
                    <p>Links</p>
                    <Nav />
                </div>
                <div className="help">
                    <p>Help</p>
                    <ul>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div className="newsletter">
                    <p>Newsletter</p>
                    <form action="">
                        <input type="email" placeholder="Enter your email address"/>
                        <input type="submit" value="SUBSCRIBE" />
                    </form>
                </div>
            </div>
            <div className="rights">
                <p>2023 Funiro. All rights reserved</p>
            </div>
        </footer>
    )
}