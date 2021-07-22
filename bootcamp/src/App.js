import logo from './logo.svg';
import './App.css';
import Registration  from './components/Registration';
import  RegTool  from './components/RegTool';
import  AppFooter from  './components/AppFooter'

function App() {
  return (
    <div className="App">
      <RegTool />
      <Registration />
      <AppFooter />
    </div>
  );
}

export default App;
