import React from 'react';
import PropTypes from 'prop-types';
import {GoBug} from 'react-icons/go'

Footer.propTypes = {};

function Footer(props) {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <GoBug className='text-3xl'/>
        <p>Copyright &copy; {footerYear}</p>
      </div>

    </footer>
  );
}

export default Footer;