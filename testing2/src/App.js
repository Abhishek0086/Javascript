import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
// import { navbar } from './components/Navbar';
function App() {
  return (
    <div>
      <div className="App"> </div>
      {/* {navbar()} */}
      <Header name="John Doe" color= "purple" />
      <Main/>
      <Sidebar />
    </div>
  );
}

export default App;
