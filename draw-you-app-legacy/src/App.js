import logo from './logo.svg';
import './App.css';
//import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/themes/nova-accent/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Menu from './components/Menu'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
