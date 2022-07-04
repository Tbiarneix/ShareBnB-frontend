import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Components
import Home from './components/home/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
