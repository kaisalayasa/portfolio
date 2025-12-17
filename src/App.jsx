import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Hero />
          <Internship />
          <Projects />
          <Hobbies />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
