import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"
// import MyBooksPage from "./pages/MyBooksPage"


const App = () => {
  const isLoggedIn = true
  return (
    <div className="bg-cornsilk h-[100vh]">
      {isLoggedIn ? (
        <main>
          <HomePage />
          {/* <MyBooksPage /> */}
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
