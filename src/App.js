
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './Menu';
import BasketPage from './BasketPage';
import Navigation from './Navigation';


function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route index element={<Menu/>} />
          <Route path="basket" element ={<BasketPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
