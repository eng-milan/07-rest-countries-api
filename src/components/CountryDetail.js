import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function CountryDetail() {
    const { state } = useLocation()

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

    const currencyFullNameArray = (array) => {
        const currencyShortNameArray = Object.keys(array)
        let currencyFullNameArray = []
        for (let i = 0; i < currencyShortNameArray.length; i++) {
            currencyFullNameArray.push(array[Object.keys(array)[i]].name)
        }
        return currencyFullNameArray
    }

    const languagesArray = (array) => {
        let languages = Object.keys(array)
        let languageName = []
        for (let i = 0; i < languages.length; i++) {
            languageName.push(array[Object.keys(array)[i]])
        }
        return languageName
    }


    const nativeName = () => {
        return state.country.name.nativeName[Object.keys(state.country.name.nativeName)[0]].official
    }

    const renderedBorders = (array) => {
        return array.map((border) => {
            let country = ""
            for (let i = 0; i < state.allCountries.length; i++) {
                if (state.allCountries[i].cca3 === border) {
                    country = state.allCountries[i]
                }
            }
            return <div key={border}>
                <Link to={`/${border}`} state={{ country: country, allCountries: state.allCountries }}>
                    <button className="m-[5px] px-[40px] py-[5px] bg-[#2b3945]" key={border}>{border}</button>
                </Link >
            </div>
        })
    }

    return <div className="mx-[20px]">
        <button className="flex items-center mt-[40px] mb-[60px] px-[30px] py-[5px] text-[18px] bg-[#2b3945] rounded">
            <IoIosArrowRoundBack className="mr-[5px] text-[26px]" />
            Back</button>
        <img
            className="mb-[30px]"
            src={state.country.flags.svg}
            alt={state.country.name.official} />
        <div className="mb-[30px]">
            <div>
                <h2 className="mb-[10px] text-[22px] font-bold">{state.country.name.common}</h2>
                <h3 className="font-semibold">Native Name: <span className="font-light">
                    {state.country.name.nativeName ? nativeName() : state.country.name.common}</span>
                </h3>
                <h4 className="font-semibold">
                    Population: <span className="font-light">{addCommas(state.country.population)}</span>
                </h4>
                <h4 className="font-semibold">
                    Region: <span className="font-light">{state.country.region}</span>
                </h4>
                <h4 className="font-semibold">
                    Sub Region: <span className="font-light">{state.country.subregion ? state.country.subregion : "-"}</span>
                </h4>
                <h4 className="font-semibold">
                    Capital: <span className="font-light">{state.country.capital ? state.country.capital[0] : "-"}</span>
                </h4>
            </div>
            <div className="mt-[30px]">
                <h4 className="font-semibold">
                    Top Level Domain: <span className="font-light">{state.country.tld[0]}</span>
                </h4>
                <h4 className="font-semibold">
                    Currencies: <span className="font-light">
                        {state.country.currencies ? currencyFullNameArray(state.country.currencies).join(", ") : "-"}
                    </span>
                </h4>
                <h4 className="font-semibold">
                    Languages: <span className="font-light">
                        {state.country.languages ? languagesArray(state.country.languages).join(", ") : "-"}
                    </span>
                </h4>
            </div>
            <div className="mt-[20px]">
                <h4 className="text-[16px] font-bold">Border Countries:</h4>
                {state.country.borders ?
                    <div className="grid grid-cols-3">
                        {renderedBorders(state.country.borders)}
                    </div>
                    : null}
            </div>
        </div>
    </div>
}

export default CountryDetail