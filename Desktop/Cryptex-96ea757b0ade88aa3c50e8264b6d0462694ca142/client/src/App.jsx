import { Navbar, Welcome, Footer, Services, Transactions } from "./components"
import Need from "./components/Need"
import Map from "./components/Map"
import Team from "./components/Team"
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
        <Team/>
        <Footer />
        </div>
    </div>
  )
}

export default App
