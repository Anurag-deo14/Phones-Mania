import { Navbar, Welcome, Footer, Services, Transactions } from "./components"
import Need from "./components/Need"
import Map from "./components/Map"
const App = () => {


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Services />
        <Need/>
        <Transactions />
        <Map/>
        <Footer />
        </div>
    </div>
  )
}

export default App
