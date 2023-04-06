import { useEffect, useState } from "react";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import ListofCountries from "./components/ListOfCountries"
import Footer from "./components/Footer"

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then(resp => resp.json()).then(data => setCountries(data))
  }, [])

  return <main className="bg-[#202c37] text-[#ffffff]">
    <Header />
    <SearchBar />
    <ListofCountries data={countries} />
    <Footer />
  </main>;
}

export default App;
