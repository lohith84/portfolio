import React from 'react';
import '../../Components/style.css';


function Footer(){
    return(
    <footer className='footer'>
            <div className='text-center'>
              <p>&copy; {new Date().getFullYear()} Made with ❤️ by H Lohith .All rights reserved.</p>
            </div>
    </footer>
    );
}

export default Footer;