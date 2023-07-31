import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import Footer from "./components/footer/Footer"
import GetStarted from "./components/get-started/GetStarted"
import Hero from "./components/hero/Hero"
import PreviousWorks from "./components/previous-works/PreviousWorks"
import Services from "./components/services/Services"
import Testimonials from "./components/testimonial/Testimonial"
import Top from "./components/top/Top"
import Video from "./components/video/video"


function App() {

  return (
    <div className="App">
      <Top />
      <Hero />
      <About />
      <Video />
      <Services />
      <PreviousWorks />
      <Testimonials />
      <Blog />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
