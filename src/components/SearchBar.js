import { BsSearch } from "react-icons/bs";

function SearchBar({ onContinentClick }) {

    return <div className="mt-[30px] mx-[20px] rounded">
        <div className="flex items-center bg-[#2b3945] px-[30px] py-[10px] text-[20px] font-bold">
            <BsSearch className="mr-[20px] cursor-pointer" />
            <input
                className="py-[10px] w-full bg-[#2b3945]"
                placeholder="Search for a country..." />
        </div>
        <select
            className="bg-[#2b3945] mt-[30px] px-[30px] py-[15px] cursor-pointer rounded"
            defaultValue="FilterbyRegion"
            onChange={e => onContinentClick(e)}>
            <option value="FilterbyRegion" disabled>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
}

export default SearchBar