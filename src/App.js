import { useEffect, useState } from "react";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import ListofCountries from "./components/ListOfCountries"
import Footer from "./components/Footer"

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then(resp => resp.json()).then(data => {
      setCountries(data)
      setFilteredCountries(data)
    })
  }, [])

  const onContinentClick = (e) => {
    setFilteredCountries(countries.filter((country) => {
      if (e.target.value === "America") {
        return ["North America", "South America"].includes(country.continents[0])
      } else {
        return country.continents[0] === e.target.value
      }
    }))
  }

  return <main className="bg-[#202c37] text-[#ffffff] min-h-screen">
    <Header />
    <SearchBar onContinentClick={onContinentClick} />
    <ListofCountries data={filteredCountries} />
    <Footer />
  </main>;
}

export default App;
