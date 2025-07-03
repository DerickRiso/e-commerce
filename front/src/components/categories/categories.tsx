import dining from "../../assets/dining.png";
import living from "../../assets/living.png";
import bedroom from "../../assets/bedroom.png";
import { CardCategorie } from "./categorie-card/card";
import "./categories.css";

export function Categories() {
    return (
        <section className="categories-section">
            <h2>Browse the Range</h2>
            <div>
                <CardCategorie img={dining} alt={"Dining categorie"} title={"Dining"}/>

                <CardCategorie img={living} alt={"Living categorie"} title={"Living"}/>
                
                <CardCategorie img={bedroom} alt={"Bedroom categorie"} title={"Bedroom"}/>
            </div>
        </section>
    )
}