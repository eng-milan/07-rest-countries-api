import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import CountryDetail from "./components/CountryDetail"
import HomePage from "./pages/HomePage";

function App() {

  return <BrowserRouter basename="/07-rest-countries-api">
    <main className="bg-[#202c37] text-[#ffffff] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:cca3" element={<CountryDetail />} />
      </Routes>
      <Footer className="mt-[20px]" />
    </main>
  </BrowserRouter>
}

export default App;
