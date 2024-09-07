import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Main/Home';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
