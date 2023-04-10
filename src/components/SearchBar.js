import { BsSearch } from "react-icons/bs";

function SearchBar({ onCountrySearch, onContinentClick, searchValue }) {

    return <div className="mt-[30px] mx-[20px] rounded md:mx-[50px] md:flex md:justify-between md:items-center">
        <div className="flex items-center bg-[#2b3945] px-[30px] py-[10px] text-[16px] font-bold">
            <BsSearch className="mr-[20px] cursor-pointer" />
            <input
                className="py-[10px] w-full bg-[#2b3945]"
                onChange={e => onCountrySearch(e.target.value)}
                value={searchValue}
                placeholder="Search for a country..." />
        </div>
        <select
            className="bg-[#2b3945] mt-[30px] px-[30px] py-[15px] cursor-pointer rounded md:m-0 w-[250px]"
            defaultValue="FilterbyRegion"
            onChange={e => onContinentClick(e.target.value)}>
            <option value="FilterbyRegion">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
}

export default SearchBar