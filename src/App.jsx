import './App.css'
import {Article, Brand, Cta, Navbar} from './Components'
import {Blog,Features,Footer,Header,Possability,Whatgtp3} from './Containers'

function App() {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgtp3/>
      <Features/>
      <Possability/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
