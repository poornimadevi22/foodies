import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
            <div className="footer-content"></div>
            <div className="copyright">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
            <div className="additional-content">
                <p>AdChoices</p>
                <p>Privacy Notice</p>
                <p>Visitor Agreement</p>
            </div>
        </footer>
    );
}

export default Footer;
