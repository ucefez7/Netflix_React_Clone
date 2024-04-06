import './App.css'
import Banner from './components/Banner/Banner';
import NavBar from "./components/NavBar/NavBar";
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost/>
    </div>
  );
}

export default App;
