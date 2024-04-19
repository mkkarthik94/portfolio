import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div >
      <Navbar classname="z-0" />
      <Home classname="z-10"/>
      <About/>
    </div>
  );
}

export default App;
