import { ListFeatures } from "./list-feature/list";
import trophy from "../../assets/icons/trophy.png";
import check from "../../assets/icons/check.png";
import shipping from "../../assets/icons/shipping.png";
import support from "../../assets/icons/support.png";
import "./features.css";

export function Features() {
    return (
        <aside className="features" id="about">
            <ul>
                <ListFeatures img={trophy} title="High Quality" subtitle="Crafted from top materials"/>
                <ListFeatures img={check} title="Warranty Protection" subtitle="Over 2 years"/>
                <ListFeatures img={shipping} title="Free Shipping" subtitle="Order over 150 $"/>
                <ListFeatures img={support} title="24/7 Support" subtitle="Dedicated support"/>
            </ul>
        </aside>
    )
}