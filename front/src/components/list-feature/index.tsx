import './style.css';

type ListFeaturesProps = {
    img: string,
    title: string,
    subtitle: string
}

export function ListFeatures(props: ListFeaturesProps) {
    return (
        <li>
            <img src={props.img} />
            <div>
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
            </div>
        </li>
    )
}

export default ListFeatures;