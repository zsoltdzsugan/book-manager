import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"


const App = () => {
  const isLoggedIn = true
  return (
    <div className="bg-lightBgBase dark:bg-darkBgBase h-[100vh]">
      {isLoggedIn ? (
        <main>
          <HomePage />
        </main>
      ) : (
        <main>
          <LandingPage />
        </main>
      )}
    </div>
  )
}

export default App
