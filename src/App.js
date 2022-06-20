
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import FoodDetails from './pages/FoodDetails';
import FoodLists from './pages/FoodLists';



function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<FoodLists />} />
            <Route exact path='/:id' element={<FoodDetails />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
