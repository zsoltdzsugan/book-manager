import Navbar from "./components/navbar/Navbar"
import LandingPage from "./pages/LandingPage"


const App = () => {
  const isLoggedIn = false
  return (
    <div className="bg-bgBase h-[100vh]">
      {isLoggedIn ? (<Navbar />) : (
        <main>
          <LandingPage />
        </main>
      )}
    </div>
  )
}

export default App
