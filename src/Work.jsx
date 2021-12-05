import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import CarouselBox from './CarouselBox/CarouselBox';
import Catalog from './Catalog/Catalog';
import Footer from './Footer/Footer';

function Work() {
        return (
            <div>
                <Header />
                <CarouselBox />
                <Catalog />
                <Footer />
            </div>
        );
}

export default Work;