import { BsSearch } from "react-icons/bs";

function SearchBar({ onCountrySearch, onContinentClick, searchValue }) {

    return <div className="mt-[30px] mx-[20px] rounded md:flex md:justify-between md:items-center lg:mx-[30px] xl:mx-[50px]">
        <div className="flex items-center px-[30px] py-[10px] bg-[#2b3945] text-[16px] rounded font-bold w-[500px]">
            <BsSearch className="mr-[20px] cursor-pointer" />
            <input
                className="py-[10px] w-full bg-[#2b3945]"
                onChange={e => onCountrySearch(e.target.value)}
                value={searchValue}
                placeholder="Search for a country..." />
        </div>
        <select
            className="mt-[40px] px-[30px] py-[15px] bg-[#2b3945] cursor-pointer rounded md:m-0 w-[250px]"
            defaultValue="FilterbyRegion"
            aria-label="Select an option"
            onChange={e => onContinentClick(e.target.value)}>
            <option defaultValue="FilterbyRegion">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
}

export default SearchBar