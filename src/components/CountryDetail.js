import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function CountryDetail() {
    const { state: { allCountries, country } } = useLocation()

    if (!useLocation().state || !allCountries || !country) {
        return <div>Loading...</div>
    }

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

    const listOfCurrencyOrLanguage = (obj, type) => {
        const keys = Object.keys(obj)
        let output = []
        for (let i = 0; i < keys.length; i++) {
            if (type === "currency") {
                output.push(obj[keys[i]].name)
            } else if (type === "language") {
                output.push(obj[keys[i]])
            }
        }
        return output
    }

    const nativeName = () => {
        return country.name.nativeName[Object.keys(country.name.nativeName)[0]].official
    }

    const renderedBorders = (array) => {
        return array.map((border) => {
            let borderCountry = ""
            for (let i = 0; i < allCountries.length; i++) {
                if (allCountries[i].cca3 === border) {
                    borderCountry = allCountries[i]
                }
            }
            return <div key={border}>
                <Link to={`/${border}`} state={{ country: borderCountry, allCountries: allCountries }}>
                    <button className="m-[5px] py-[5px] w-[120px] bg-[#2b3945]" key={border}>{borderCountry.name.common}</button>
                </Link >
            </div>
        })
    }

    return <div className="mx-[20px] lg:mx-[30px] xl:mx-[50px] lg:h-[800px]">
        <Link
            to="/"
            className="flex items-center justify-center mt-[40px] mb-[60px] py-[5px] text-[18px] bg-[#2b3945] rounded w-[130px]">
            <IoIosArrowRoundBack className="mr-[5px] text-[26px]" />
            Back
        </Link>
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between lg:items-center">
            <img
                className="mb-[30px] sm:max-h-[500px] sm:max-w-[600px] lg:mb-0 lg:mr-[10px] xl:mr-[50px]"
                src={country.flags.svg}
                alt={country.name.official} />
            <div className="mb-[30px] w-full lg:ml-[10px] xl:ml-[50px] lg:mb-0">
                <h2 className="mb-[10px] text-[22px] font-bold">{country.name.common}</h2>
                <div className="lg:flex lg:justify-between">
                    <div className="lg:mr-[20px]">
                        <h3 className="mb-[5px] font-semibold">Native Name: <span className="font-light">
                            {country.name.nativeName ? nativeName() : country.name.common}</span>
                        </h3>
                        <h4 className="mb-[5px] font-semibold">
                            Population: <span className="font-light">{addCommas(country.population)}</span>
                        </h4>
                        <h4 className="mb-[5px] font-semibold">
                            Region: <span className="font-light">{country.region}</span>
                        </h4>
                        <h4 className="mb-[5px] font-semibold">
                            Sub Region: <span className="font-light">{country.subregion ? country.subregion : "-"}</span>
                        </h4>
                        <h4 className="font-semibold">
                            Capital: <span className="font-light">{country.capital ? country.capital[0] : "-"}</span>
                        </h4>
                    </div>
                    <div className="mt-[40px] lg:m-0">
                        <h4 className="mb-[5px] font-semibold">
                            Top Level Domain: <span className="font-light">{country.tld ? country.tld[0] : "-"}</span>
                        </h4>
                        <h4 className="mb-[5px] font-semibold">
                            Currencies: <span className="font-light">
                                {country.currencies ? listOfCurrencyOrLanguage(country.currencies, "currency").join(", ") : "-"}
                            </span>
                        </h4>
                        <h4 className="font-semibold">
                            Languages: <span className="font-light">
                                {country.languages ? listOfCurrencyOrLanguage(country.languages, "language").join(", ") : "-"}
                            </span>
                        </h4>
                    </div>
                </div>
                <div className="mt-[40px] lg:flex lg:flex-nowrap">
                    <h4 className="text-[16px] lg:mr-[10px] font-bold">Border Countries:</h4>
                    {country.borders ?
                        <div className="flex flex-wrap">
                            {renderedBorders(country.borders)}
                        </div>
                        : null}
                </div>
            </div>
        </div>
    </div>
}

export default CountryDetail