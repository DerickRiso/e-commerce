type CardCategorieProps = {
    img: string;
    alt: string;
    title: string;
}

export function CardCategorie(props: CardCategorieProps) {
    return (
        <article className="categorie">
            <img src={props.img} alt={props.alt} />
            <p>{props.title}</p>
        </article>
    )
}