import './App.css'
import { Carousel } from './assets/components/Carousel'
import { Esquenta } from './assets/components/Esquenta'
import { Footer } from './assets/components/Footer'
import { Header } from './assets/components/Header'
import { MainButtons } from './assets/components/MainButtons'
import { MainImages } from './assets/components/MainImages'

function App() {
  return (
    <> 
      <div className="relative flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col gap-2 overflow-hidden my-8 items-center">
        <Carousel />
        <MainButtons />
        <Esquenta />
        <MainImages />
      </div>
       <Footer />
      </div>
    </>
  )
}

export default App
