import React from "react";
import { Link } from 'react-router-dom';


function Header() {
        return (
                <header className="header">
                    <div className="header-top">
                        <div className="container">
                            <div className="header-top-content">
                                <div className="top-content-left">
                                    <div className="content-left-item">Language: <span className="language">English</span></div>
                                    <div className="content-left-item">Currency: <span className="currency">USD</span></div>
                                </div>
                                <div className="top-content-right">
                                    <Link to="/" className="content-right-item">Account</Link>
                                    <Link to="/" className="content-right-item">Wishlist</Link>
                                    <Link to="/" className="content-right-item">Checkout</Link>
                                    <Link to="/" className="content-right-item">Log in</Link>
                                    <Link to="/" className="content-right-item">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-main container">
                        <div className="header-main-content">
                            <Link to="/" className="header-logo">Leo Shop</Link>
                            <div className="header-menu">
                                <Link to="/" className="header-menu-item">Home</Link>
                                <Link to="/catalog" className="header-menu-item">Catalog</Link>
                                {/* <a href="/" className="header-menu-item">Women</a>
                                <a href="/" className="header-menu-item">Men</a> */}
                                <Link to="/other" className="header-menu-item">Other</Link>
                                {/* <a href="/" className="header-menu-item">Purchase</a> */}
                            </div>
                            <div className="header-info">
                                <form action="/" className="search-form">
                                    <input className="search-input" type="search" placeholder="Search..." />
                                    <button className="search-button">
                                        <img src="search-icon.svg" alt="search-icon" className="search-icon" />
                                    </button>
                                </form>
                                <Link to="/" className="stocks">
                                    <img src="stock.png" alt="stock-icon" className="stock-icon" />
                                </Link>
                                <Link to="/cart" className="shopping-cart">
                                    <img src="cart.png" alt="cart-icon" className="cart-icon" />
                                </Link>
                                {/* <div className="shopping-counter">Cart <span className="counter">(0)</span></div> */}
                            </div>
                        </div>
                    </div>
                </header>
        );
}

export default Header;