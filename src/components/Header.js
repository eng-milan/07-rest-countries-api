import { MdDarkMode } from "react-icons/md";

function Header() {
    return <section className="flex justify-between items-center bg-[#2b3945] px-[20px] py-[30px] lg:px-[30px] xl:px-[50px]">
        <h1 className="text-[20px] font-bold">Where in the world?</h1>
        <button className="flex items-center text-[16px] font-bold">
            <MdDarkMode className="mr-[10px]" />
            Dark Mode
        </button>
    </section>
}

export default Header