import { BsSearch } from "react-icons/bs";

function SearchBar() {
    return <div className="mt-[30px] mx-[20px] rounded">
        <div className="flex items-center bg-[#2b3945] px-[30px] py-[10px] text-[20px] font-bold">
            <BsSearch className="mr-[20px]" />
            <input
                className="py-[10px] w-full bg-[#2b3945]"
                placeholder="Search for a country..." />
        </div>
        <select className="bg-[#2b3945] mt-[30px] px-[30px] py-[15px] rounded">
            <option selected disabled>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>FAsia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    </div>
}

export default SearchBar