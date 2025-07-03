import filter from "../../assets/icons/filter.png";
import block from "../../assets/icons/block.png";
import list from "../../assets/icons/list.png";
import "./filter.css"

export function Filter() {

    return (
        <div className="filter">
            <div>
                <div className="view">
                    <a>
                        <img src={filter} />
                        Filter
                    </a>
                    <a href="">
                        <img src={block} />
                    </a>
                    <a href="">
                        <img src={list} />
                    </a>
                </div>
                <div>
                    <p>Showing</p>
                </div>
            </div>
            <div className="sort">
                <p>Show</p>
                <select name="count-products" id="count-products">
                    <option value="16">16</option>
                </select>
                <p>Sort By</p>
                <select
                    name="sort-products" 
                    id="sort-products" 
                >
                    <option value="All">All</option>
                    <option value="dining">Dining</option>
                    <option value="diving">Living</option>
                    <option value="bedroom">Bedroom</option>
                </select>
            </div>
        </div>
    )
}