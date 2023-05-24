
import './App.css';
import Counter from './components/counter/Counter';
import FetchPost from './components/FetchApi/FetchApiData';
import Form from './components/FormHandle/Form';

function App() {
  return (
    <div className="App">
     {/* <Form/> */}
     {/* <Counter/> */}
     <FetchPost/>
    </div>
  );
}

export default App;
