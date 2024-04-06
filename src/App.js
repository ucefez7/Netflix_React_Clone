import './App.css'
import Banner from './components/Banner/Banner';
import NavBar from "./components/NavBar/NavBar";
import RowPost from './components/RowPost/RowPost';
import { actions, comedy, horror, originals } from './url'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={actions} title='Action' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;
