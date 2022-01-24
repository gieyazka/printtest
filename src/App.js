import logo from './logo.svg';
import './App.css';
import printJS from 'print-js'
function App() {
  return (
    <div className="App">
   <button type="button" onClick={()=>printJS('printtest/test.pdf')}>
    Print PDF
 </button>
    </div>
  );
}

export default App;
