import { Link } from "react-router-dom"

function ListOfCountries({ filteredCountries, allCountries }) {
    const renderedCountries = filteredCountries.map((country) => {
        const addCommas = (number) => {
            let string = number.toString()
            let result = ""

            for (let i = 0; i < string.length; i++) {
                if ((string.length - i) % 3 === 0 && i !== 0) {
                    result += ","
                }
                result += string.charAt(i)
            }
            return result
        }

        return <div
            className="flex flex-col mb-[40px] mx-[60px] bg-[#2b3945] rounded-lg sm:items-center md:mx-[20px] lg:mx-[30px] xl:mx-[50px]"
            key={country.name.official}>
            <Link to={`/${country.cca3}`} state={{ country: country, allCountries: allCountries }}>
                <img
                    className="mb-[30px] rounded-t-lg sm:max-h-[340px]"
                    src={country.flags.svg}
                    alt={country.name.official} />
                <div className="ml-[20px] mb-[30px]">
                    <h2 className="mb-[10px] text-[20px] font-bold">{country.name.common}</h2>
                    <h3 className="font-semibold">
                        Population: <span className="font-light">{addCommas(country.population)}</span>
                    </h3>
                    <h4 className="font-semibold">
                        Region: <span className="font-light">{country.region}</span>
                    </h4>
                    <h5 className="font-semibold">
                        Capital: <span className="font-light">{country.capital ? country.capital[0] : "-"}</span>
                    </h5>
                </div>
            </Link>
        </div >

    })

    return <div className="mt-[30px] md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{renderedCountries}</div>
}

export default ListOfCountries