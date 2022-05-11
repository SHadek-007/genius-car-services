import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 bg-light py-3 text-primary'>
            <p><small>Copyright &copy; {year} - The Car-Docter.com</small></p>
        </footer>
    );
};

export default Footer;