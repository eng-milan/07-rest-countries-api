
function ListOfCountries({ data }) {

    const renderedCountries = data.map((country) => {
        return <div
            className="flex flex-col mb-[40px] mx-[60px] pb-[50px] bg-[#2b3945] rounded-lg"
            key={country.name.official}>
            <img
                className="mb-[30px] rounded-t-lg"
                src={country.flags.svg}
                alt={country.name.official} />
            <div className="ml-[20px]">
                <h2 className="mb-[10px] text-[20px] font-bold">{country.name.official}</h2>
                <h3 className="font-semibold">
                    Population: <span className="font-light">{country.population}</span>
                </h3>
                <h4 className="font-semibold">
                    Region: <span className="font-light">{country.region}</span>
                </h4>
                <h5 className="font-semibold">
                    Capital: <span className="font-light">{country.capital ? country.capital[0] : ""}</span>
                </h5>
            </div>
        </div>
    })

    return <div className="mt-[50px]">{renderedCountries}</div>
}

export default ListOfCountries