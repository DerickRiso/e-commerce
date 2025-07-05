import filter from "../../assets/icons/filter.png";
import block from "../../assets/icons/block.png";
import list from "../../assets/icons/list.png";
import "./filter.css"
import { useState } from "react";

export function Filter() {

    const [filterValue, setFilterValue] = useState("all");

    const filterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.target.value);
    };

    return (
        <div className="filter">
            <div>
                <div className="view">
                    <a>
                        <img src={filter} />
                        Filter
                        <select id="filter" onChange={filterChange}>
                            <option value="all">All</option>
                            <option value="dining">Dining</option>
                            <option value="diving">Living</option>
                            <option value="bedroom">Bedroom</option>
                        </select>
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
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                </select>
                <p>Sort By</p>
                <select
                    name="sort-products" 
                    id="sort-products" 
                >
                    <option value="default">Default</option>
                    <option value="price">Price</option>
                </select>
            </div>
        </div>
    )
}