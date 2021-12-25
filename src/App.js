import React, {useState, useEffect} from 'react';
import Context from './context';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home';
import Catalog from './views/Catalog';
import ItemDetails from './views/ItemDetails';
import Cart from './views/Cart';
import Other from './views/Other';
import Error from './views/Error';

function App() {

  const [list, setList] = useState([]);

    useEffect( () => {
       fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res => {setList(res); console.log(res)})
    }, [])

    console.log('list', list)

        return (
            <div>
              <Context.Provider value={{list, setList}}>
                <Router>
                  <Header />
                  <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/catalog' exact element={<Catalog  />} />
                    <Route path='/catalog/:itemId' exact element={<ItemDetails  />} />
                    <Route path='/cart' exact element={<Cart />} />
                    <Route path='/other' exact element={<Other />} />
                    <Route path="*" element={<Error />} />
                  </Routes>
                    <Footer />
                </Router>
              </Context.Provider>
            </div>
        );
}

export default App;
