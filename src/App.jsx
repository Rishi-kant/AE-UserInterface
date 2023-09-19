import "./App.css"
import Body from "./components/body/Body"
import LeftSideNav from "./components/leftSideNav/LeftSideNav"
import Navbar from "./components/navbar/Navbar"
import RightSideNav from "./components/rightSideNav/RightSideNav"
function App() {
  return (
  <div className="container">
    <div className="navdiv">
      <Navbar/>
    </div>
    <div className="bodydiv">
    <LeftSideNav/>
    <Body/>
    <RightSideNav/>
    </div>
    
  </div>
  )
}

export default App
