import filter from "../../assets/icons/filter.png";
import block from "../../assets/icons/block.png";
import list from "../../assets/icons/list.png";
import "./filter.css"
import { useState } from "react";

type FilterSelectProps= {
    value: string;
    onChange: (newValue: string) => void;
}

export function Filter( {value, onChange }: FilterSelectProps) {

    const [showValue, setShowValue] = useState("16");

    const filterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setShowValue(e.target.value);
        onChange(showValue);
    };

    return (
        <div className="filter">
            <div>
                <div className="view">
                    <a>
                        <img src={filter} />
                        Filter
                        <select id="filter" >
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
                <select value={value} onChange={filterChange} id="count-products">
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