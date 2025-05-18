import AboutUsSection from './components/AboutUsSection'
import Footer from './components/Footer'
import Header from './components/Header'
import KalafProductsSection from './components/KalafProductsSection'
import SliderStats from './components/SliderStats'

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SliderStats />
        <AboutUsSection />
        <KalafProductsSection />
        <Footer />
      </main>
    </div>
  )
}

export default App