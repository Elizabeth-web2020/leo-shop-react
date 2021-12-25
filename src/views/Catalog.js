import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Context from '../context';

function Catalog() {

    let { pathname } = useLocation();

    // const [list, setList] = useState([]);

    // useEffect( () => {
    //    fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(res => {setList(res); console.log(res)})
    // }, [])

    // console.log('list', list)

    const {list} = useContext(Context);

        return (
            // <Context.Provider value={{list, setList}}>
                <main className="main">
                    <div className="container">
                        <div className="main-content">
                            <div className="main-content-title">Featured Products</div>
                            <div className="main-card-list">
                                {list.map(elem => 
                                    <div className="card-list-item">
                                    <div className="card-list-image">
                                        <img width="150px" src={elem.image} alt="picture" />
                                    </div>
                                    <div className="card-list-content">
                                        <div className="card-info">
                                            <Link to={`${pathname}/${elem.id}`} className="card-title">{elem.title}</Link>
                                            <div className="card-price">${elem.price}</div>
                                        </div>
                                        <img src="basket.jpg" alt="add" className="add-to-cart" />
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            // </Context.Provider>
        );
}

export default Catalog;