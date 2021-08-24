import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main'
import Details from './views/Details'
import New from './views/New'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Details path="/pirates/:id" />
        <New path="/pirates/new" />
      </Router>
    </div>
  );
}

export default App;
