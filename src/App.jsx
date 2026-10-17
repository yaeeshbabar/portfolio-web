import Hero from './components/Hero'
import NavBar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Story from "./components/Story";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App = () => {
  return (
    <main className="relative min-h-screen w-full">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Experience />
      <Story />
      <Footer />
    </main>
  )
}

export default App