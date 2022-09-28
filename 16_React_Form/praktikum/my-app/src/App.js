import logo from './logo.svg';
import './App.css'
import {
    IniNavbar, MainContent
} from './component'


function App() {
  return (
    <div className="App">
        <IniNavbar/>
      <div className="App-body">
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
