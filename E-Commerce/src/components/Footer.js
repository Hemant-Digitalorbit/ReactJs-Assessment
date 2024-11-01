import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                    </p>
                    <div className='footer-social'>
                        <ul className="social-media">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a></li>
                        </ul>
                    </div>  
                </div>
                <div className='footer-services'>
                    <div className='foot-ser'>
                        <p>Services</p>
                        <div className='footer-div'></div>
                    </div>
                    <div className='foot-ser'>
                        <p>For Users</p>
                        <div className='footer-div'></div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} E-Commerce. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer