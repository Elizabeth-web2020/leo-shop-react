import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-top-content">
                    <div class="top-content-left">
                        <div class="content-left-item">Language: <span class="language">English</span></div>
                        <div class="content-left-item">Currency: <span class="currency">USD</span></div>
                    </div>
                    <div class="top-content-right">
                        <a href="#" class="content-right-item">Account</a>
                        <a href="#" class="content-right-item">Wishlist</a>
                        <a href="#" class="content-right-item">Checkout</a>
                        <a href="#" class="content-right-item">Log in</a>
                        <a href="#" class="content-right-item">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-main container">
            <div class="header-main-content">
                <div class="header-logo">Leo Shop</div>
                <div class="header-menu">
                    <a href="#" class="header-menu-item">Home</a>
                    <a href="#" class="header-menu-item">Women</a>
                    <a href="#" class="header-menu-item">Men</a>
                    <a href="#" class="header-menu-item">Other</a>
                    <a href="#" class="header-menu-item">Purchase</a>
                </div>
                <div class="header-info">
                    <form action="#" class="search-form">
                        <input class="search-input" type="search" placeholder="Search..." />
                        <button class="search-button">
                            <img src="../img/search-icon.svg" alt="search-icon" class="search-icon" />
                        </button>
                    </form>
                    <a href="/" class="stocks">
                        <img src="../img/stock.png" alt="stock-icon" class="stock-icon" />
                    </a>
                    <a href="/" class="shopping-cart">
                        <img src="../img/cart.png" alt="cart-icon" class="cart-icon" />
                    </a>
                    <div class="shopping-counter">Cart <span class="counter">(0)</span></div>
                </div>
            </div>
        </div>
        {/* <!-- Slider main container --> */}
        {/* <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div class="slide slide-glasses">
                        <div class="slide-content">
                            <h4 class="slide-title">Aluminum club</h4>
                            <p class="slide-text">Expecience Ray-Ban</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide slide-glasses">
                        <div class="slide-content">
                            <h2 class="slide-title">Aluminum club</h2>
                            <p class="slide-text">Expecience Ray-Ban</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide slide-glasses">
                        <div class="slide-content">
                            <h2 class="slide-title">Aluminum club</h2>
                            <p class="slide-text">Expecience Ray-Ban</p>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- If we need navigation buttons -->
            <div class="slider-buttons">
                <div class="slider-button slider-button-prev">
                    <svg width="90" height="90" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#EBEBEB" fill-opacity="0.7" />
                        <path
                            d="M24.752 31.994L14.879 22.121C14.3166 21.5584 14.0006 20.7955 14.0006 20C14.0006 19.2045 14.3166 18.4416 14.879 17.879L24.746 8.01201L26.16 9.42601L16.293 19.293C16.1055 19.4805 16.0002 19.7348 16.0002 20C16.0002 20.2652 16.1055 20.5195 16.293 20.707L26.166 30.58L24.752 31.994Z"
                            fill="darkgrey" />
                    </svg>
                </div>
                <div class="slider-button slider-button-next">
                    <svg width="90" height="90" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#EBEBEB" fill-opacity="0.7" />
                        <path
                            d="M15.248 8.00599L25.121 17.879C25.6834 18.4416 25.9994 19.2045 25.9994 20C25.9994 20.7955 25.6834 21.5584 25.121 22.121L15.254 31.988L13.84 30.574L23.707 20.707C23.8945 20.5195 23.9998 20.2652 23.9998 20C23.9998 19.7348 23.8945 19.4805 23.707 19.293L13.834 9.41999L15.248 8.00599Z"
                            fill="darkgrey" />
                    </svg>
                </div>
            </div>
        
        </div> */}

    </header>

    <main class="main">
        <div class="container">
           
        </div>
    </main>

    <footer class="footer">
        <div class="order-info">
            <div class="container">
                <div class="order-info-content">
                    <div class="free-shopping">
                        <img src="../img/shopping.png" alt="shopping-icon" class="shopping-icon" />
                        <h2 class="free-shopping-title">Free Shopping On Orders Over $100</h2>
                    </div>
                    <div class="call-us">
                        <img src="../img/call.png" alt="call-icon" class="call-icon" />
                        <h2 class="call-us-title">Call us! toLl free- 409-8888-0099</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="soc-info">
            <div class="container">
                <div class="soc-info-columns">
                    <div class="facebook-column">
                        <div class="facebook-column-title title">Facebook</div>
                        <p class="members">20000 Members</p>
                        <img class="like" src="./img/like.jpg" alt="like" />
                        <div class="members-list">
                            <img src="../img/member1.jpg" alt="member-photo" class="member-item" />
                            <img src="../img/member2.jpg" alt="member-photo" class="member-item" />
                            <img src="../img/member3.jpg" alt="member-photo" class="member-item" />
                            <img src="../img/member4.jpg" alt="member-photo" class="member-item" />
                            <img src="../img/member4.jpg" alt="member-photo" class="member-item" />
                            <img src="../img/member3.jpg" alt="member-photo" class="member-item" />
                            <img src="../img/member2.jpg" alt="member-photo" class="member-item" />
                            <img src="../img/member1.jpg" alt="member-photo" class="member-item" />
                        </div>
                        <p class="facebook-soc-plugin">Facebook Social plugin</p>
                    </div>
                    <div class="from-twitter-column">
                        <div class="from-twitter-column-title title">From Twitter</div>
                        <div class="twitter-content-info">
                            <div class="twitter-content-info-item">
                                <img src="../img/twit-icon.png" alt="logo" class="twitter-logo" />
                                <p class="twitter-some-info-top">Lorem Ipsum is simply dummy text of the printing and <span class="twitter-selected-text">typesetting industry. Lorem Ipsum</span> has been the</p>
                            </div>
                            <div class="twitter-content-info-item">
                                <img src="../img/twit-icon.png" alt="logo" class="twitter-logo" />
                                <p class="twitter-some-info-bottom">Lorem Ipsum is simply dummy text of the printing and <span class="twitter-selected-text">typesetting industry. Lorem Ipsum</span> has been the</p>
                            </div>
                        </div>
                    </div>
                    <div class="information-column">
                        <div class="information-column-title title">Information</div>
                        <ul class="information-list">
                            <li class="information-list-item">Sed ultrices purus non</li>
                            <li class="information-list-item">sodales sodales</li>
                            <li class="information-list-item">Curabitur pretium dui vitae</li>
                            <li class="information-list-item">Donec gravida mi ni nisi</li>
                            <li class="information-list-item">faucibus leo condimentum</li>
                            <li class="information-list-item">Donec et lorem suscipit</li>
                        </ul>
                    </div>
                    <div class="contact-us-column">
                        <div class="contact-us-column-title title">Contact Us</div>
                        <div class="contact-us-list">
                            <p class="contact-us-list-item">Leo Store</p>
                            <p class="contact-us-list-item">Leopards media</p>
                            <p class="contact-us-list-item">KVM Rpad, 4590GH</p>
                            <p class="contact-us-list-item">+1 489-8888-0099</p>
                            <p class="contact-us-list-item">mail@email.com</p>
                        </div>
                        <div class="contact-us-soc-icons">
                            <img src="../img/google-logo.jpg" alt="logo" class="soc-icons-item" />
                            <img src="../img/linkedIn-icon.jpg" alt="logo" class="soc-icons-item" />
                            <img src="../img/net-icon.jpg" alt="logo" class="soc-icons-item" />
                            <img src="../img/facebook-icon.jpg" alt="logo" class="soc-icons-item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="footer-content-right">
                        © Copyright 2021 Elizabeth Popova, All Rights Reserved.
                    </div>
                    <div class="footer-content-left">
                        <a href="/" class="footer-content-menu-item">About Us</a>
                        <a href="/" class="footer-content-menu-item">Delivery & Returns</a>
                        <a href="/" class="footer-content-menu-item">Terms & Conditions</a>
                        <a href="/" class="footer-content-menu-item">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </footer> /
   </div>
  );
}

export default App;
