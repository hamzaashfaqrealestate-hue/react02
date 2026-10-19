import './App.css'
import MainPage from './MainPage.jsx';
function Header() {
  return (
    <header>
      <h1>My React App</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}



function Footer() {
  return (
    <footer>
      <div className='footer-links'>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <nav>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#refund">Refund</a>
        </nav>
        <nav>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#refund">Refund</a>
        </nav>
      </div>
      <p className='copyright'>&copy; 2024 My React App. All rights reserved.</p>
    </footer>
  )
}


function App() {

  return (
    <>

      <Header />
      <MainPage />
      <Footer />

    </>
  )
}

export default App
export { Header, Footer };
