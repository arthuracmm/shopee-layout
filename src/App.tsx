import './App.css'
import { Esquenta } from './assets/components/Esquenta'
import { Footer } from './assets/components/footer'
import { Header } from './assets/components/Header'
import { MainButtons } from './assets/components/MainButtons'

function App() {
  return (
    <> 
      <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col flex-1 gap-2 overflow-hidden">
        <MainButtons />
        <Esquenta />
      </div>
       <Footer />
      </div>
    </>
  )
}

export default App
