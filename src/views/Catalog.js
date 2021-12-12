import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Catalog() {

    let { pathname } = useLocation();

    const [list, setList] = useState([]);

    useEffect( () => {
       fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res => {setList(res); console.log(res)})
    }, [])

    console.log('list', list)

        return (
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
            // <div>
            //     <ul>
            //        {list.map(elem =>  <li><Link to={`${pathname}/${elem.id}`}>{elem.title}</Link></li>)}
            //     </ul>
            // </div>

            // <main className="main">
            //     <div className="container">
            //         <div className="main-content">
            //             <div className="main-content-title">Featured Products</div>
            //             <div className="main-card-list">
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses26.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses26.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses26.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses26.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses26.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses37.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses37.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses1458.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="main-content">
            //             <div className="main-content-title">Staff pick</div>
            //             <div className="main-card-list">
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses26.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses1458.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content"> 
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses37.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //                 <div className="card-list-item">
            //                     <div className="card-list-image">
            //                         <img width="260px" src="glasses1458.png" alt="picture" />
            //                     </div>
            //                     <div className="card-list-content">
            //                         <div className="card-info">
            //                             <div className="card-title">Lorem ipsum is simply</div>
            //                             <div className="card-price">$378.00</div>
            //                         </div>
            //                         <img src="basket.jpg" alt="add" className="add-to-cart" />
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </main>
        );
}

export default Catalog;