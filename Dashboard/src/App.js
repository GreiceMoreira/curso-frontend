import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigthSide/RightSide'
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
        <div class="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        
          </div>
        
    </div>
  );
}

export default App;
