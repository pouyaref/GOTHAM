import Header from './components/Header'
import SliderStats from './components/SliderStats'

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SliderStats />
      </main>
    </div>
  )
}

export default App