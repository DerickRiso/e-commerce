import { useNavigate } from "react-router-dom";

type ShopNavProps = {
    button: boolean,
    pages: boolean
}

export function ShopNav(props: ShopNavProps) {

    // hook para navegacao
    const navigate = useNavigate();
    function navigateTo(path: string) {
        navigate(`${path}`);
    }

    return (
        <div className="shop-nav-container">
            {props.button && <a href="" onClick={()=>{navigateTo("/shop")}} className="show-more">Show More</a>}
        </div>
    )
}

export default ShopNav;