import React, { Component } from 'react';
import './footerStyles.css'

class Footer extends Component {

    render() { 
        return (

            <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-youtube"></i></a>
                <a href="#"><i class="bi bi-globe"></i></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">UCSC InterHub © 2022</p>
        </footer>
    </div>

        );
    }
}
 
export default Footer;