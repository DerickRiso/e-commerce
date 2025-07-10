import { useNavigate } from "react-router-dom";

type CardCategorieProps = {
    img: string;
    alt: string;
    title: string;
    category: string
}

export function CardCategorie(props: CardCategorieProps) {
    const navigate = useNavigate();
    function navigateTo(path: string) {
        navigate(`${path}`);
    }

    return (
        <article 
            className="categorie"
            onClick={() => {
                navigateTo((`/shop?category=${props.category}`));
            }}
        >
            <img src={props.img} alt={props.alt} />
            <p>{props.title}</p>
        </article>
    )
}