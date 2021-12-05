

function Footer() {
        return (
            <footer className="footer">
                <div className="order-info">
                    <div className="container">
                        <div className="order-info-content">
                            <div className="free-shopping">
                                <img src="shopping.png" alt="shopping-icon" className="shopping-icon" />
                                <h2 className="free-shopping-title">Free Shopping On Orders Over $100</h2>
                            </div>
                            <div className="call-us">
                                <img src="call.png" alt="call-icon" className="call-icon" />
                                <h2 className="call-us-title">Call us! toLl free- 409-8888-0099</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="soc-info">
                    <div className="container">
                        <div className="soc-info-columns">
                            <div className="facebook-column">
                                <div className="facebook-column-title title">Facebook</div>
                                <p className="members">20000 Members</p>
                                <img className="like" src="like.jpg" alt="like" />
                                <div className="members-list">
                                    <img src="member1.jpg" alt="member-photo" className="member-item" />
                                    <img src="member2.jpg" alt="member-photo" className="member-item" />
                                    <img src="member3.jpg" alt="member-photo" className="member-item" />
                                    <img src="member4.jpg" alt="member-photo" className="member-item" />
                                    <img src="member4.jpg" alt="member-photo" className="member-item" />
                                    <img src="member3.jpg" alt="member-photo" className="member-item" />
                                    <img src="member2.jpg" alt="member-photo" className="member-item" />
                                    <img src="member1.jpg" alt="member-photo" className="member-item" />
                                </div>
                                <p className="facebook-soc-plugin">Facebook Social plugin</p>
                            </div>
                            <div className="from-twitter-column">
                                <div className="from-twitter-column-title title">From Twitter</div>
                                <div className="twitter-content-info">
                                    <div className="twitter-content-info-item">
                                        <img src="twit-icon.png" alt="logo" className="twitter-logo" />
                                        <p className="twitter-some-info-top">Lorem Ipsum is simply dummy text of the printing and <span className="twitter-selected-text">typesetting industry. Lorem Ipsum</span> has been the</p>
                                    </div>
                                    <div className="twitter-content-info-item">
                                        <img src="twit-icon.png" alt="logo" className="twitter-logo" />
                                        <p className="twitter-some-info-bottom">Lorem Ipsum is simply dummy text of the printing and <span className="twitter-selected-text">typesetting industry. Lorem Ipsum</span> has been the</p>
                                    </div>
                                </div>
                            </div>
                            <div className="information-column">
                                <div className="information-column-title title">Information</div>
                                <div className="information-list">
                                    <div className="information-list-item">
                                        <img src="tick.jpg" alt=">" className="info-tick" />
                                        <div className="info-text">Sed ultrices purus non</div>
                                    </div>
                                    <div className="information-list-item">
                                        <img src="tick.jpg" alt=">" className="info-tick" />
                                        <div className="info-text">sodales sodales</div>
                                    </div>
                                    <div className="information-list-item">
                                        <img src="tick.jpg" alt=">" className="info-tick" />
                                        <div className="info-text">Curabitur pretium dui vitae</div>
                                    </div>
                                    <div className="information-list-item">
                                        <img src="tick.jpg" alt=">" className="info-tick" />
                                        <div className="info-text">Donec gravida mi ni nisi</div>
                                    </div>
                                    <div className="information-list-item">
                                        <img src="tick.jpg" alt=">" className="info-tick" />
                                        <div className="info-text">faucibus leo condimentum</div>
                                    </div>
                                    <div className="information-list-item">
                                        <img src="tick.jpg" alt=">" className="info-tick" />
                                        <div className="info-text">Donec et lorem suscipit</div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-us-column">
                                <div className="contact-us-column-title title">Contact Us</div>
                                <div className="contact-us-list">
                                    <p className="contact-us-list-item">Leo Store</p>
                                    <p className="contact-us-list-item">Leopards media</p>
                                    <p className="contact-us-list-item">KVM Rpad, 4590GH</p>
                                    <p className="contact-us-list-item">+1 489-8888-0099</p>
                                    <p className="contact-us-list-item">mail@email.com</p>
                                </div>
                                <div className="contact-us-soc-icons">
                                    <img src="google-logo.jpg" alt="logo" className="soc-icons-item" />
                                    <img src="linkedIn-icon.jpg" alt="logo" className="soc-icons-item" />
                                    <img src="net-icon.jpg" alt="logo" className="soc-icons-item" />
                                    <img src="facebook-icon.jpg" alt="logo" className="soc-icons-item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-content">
                            <div className="footer-content-right">
                                © Copyright 2021 Elizabeth Popova, All Rights Reserved.
                            </div>
                            <div className="footer-content-left">
                                <a href="/" className="footer-content-menu-item">About Us</a>
                                <a href="/" className="footer-content-menu-item">Delivery & Returns</a>
                                <a href="/" className="footer-content-menu-item">Terms & Conditions</a>
                                <a href="/" className="footer-content-menu-item">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
}

export default Footer;