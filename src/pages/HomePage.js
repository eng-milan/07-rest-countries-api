import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"
import ListofCountries from "../components/ListOfCountries"

function HomePage() {
    const [allCountries, setAllCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [dropdownContinent, setDropdownContinent] = useState("FilterbyRegion")
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all").then(resp => resp.json()).then(data => {
            setAllCountries(data)
            setFilteredCountries(data)
        })
    }, [])

    const filterCountries = (value, continent) => {

        let filteredBySearchTerm = allCountries.filter((country) => {
            return country.name.common.toLowerCase().includes(value.toLowerCase())
        })

        filteredBySearchTerm = filteredBySearchTerm.filter((country) => {
            if (continent === "America") {
                return ["North America", "South America"].includes(country.continents[0])
            } else if (continent === "FilterbyRegion") {
                return true
            } else {
                return country.continents[0] === continent
            }
        })

        setFilteredCountries(filteredBySearchTerm)
    }

    const onCountrySearch = (value) => {
        setSearchTerm(value)

        filterCountries(value, dropdownContinent)
    }

    const onContinentClick = (continent) => {
        setDropdownContinent(continent)

        filterCountries(searchTerm, continent)

    }

    return <>
        <SearchBar onCountrySearch={onCountrySearch} onContinentClick={onContinentClick} searchValue={searchTerm} />
        <ListofCountries filteredCountries={filteredCountries} allCountries={allCountries} />
    </>
}

export default HomePage