import filt from "../../assets/icons/filter.png";
import block from "../../assets/icons/block.png";
import list from "../../assets/icons/list.png";
import "./filter.css"
import { useState } from "react";

type FilterSelectProps= {
    value: string;
    filter: string;
    onChange: (newValue: string) => void;
    onSelect: (newSelect: string) => void
}

export function Filter( {value, filter, onSelect, onChange }: FilterSelectProps) {

    const [showValue, setShowValue] = useState(value || "16");
    const [filterValue, setFilterValue] = useState(filter || "all");

    const filterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setShowValue(newValue);
        // Mudança aqui muda o filtro (não sei se é bug)
        onChange(newValue);
    };

    const filterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newFilter = e.target.value;
        setFilterValue(newFilter);
        onSelect(newFilter);
    };

    return (
        <div className="filter">
            <div>
                <div className="view">
                    <a>
                        <img src={filt} />
                        Filter
                        <select id="filter" onChange={filterSelect}>
                            <option value="all">All</option>
                            <option value="dining">Dining</option>
                            <option value="living">Living</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="new">New</option>
                            <option value="sale">Sale</option>
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