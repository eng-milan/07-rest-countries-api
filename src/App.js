import { useEffect, useState } from "react";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import ListofCountries from "./components/ListOfCountries"
import Footer from "./components/Footer"

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [dropdownContinent, setDropdownContinent] = useState("FilterbyRegion")
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then(resp => resp.json()).then(data => {
      setCountries(data)
      setFilteredCountries(data)
    })
  }, [])

  const filterCountries = (value, continent) => {

    let filteredBySearchTerm = countries.filter((country) => {
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

  return <main className="bg-[#202c37] text-[#ffffff] min-h-screen">
    <Header />
    <SearchBar onCountrySearch={onCountrySearch} onContinentClick={onContinentClick} searchValue={searchTerm} />
    <ListofCountries data={filteredCountries} />
    <Footer />
  </main>;
}

export default App;
