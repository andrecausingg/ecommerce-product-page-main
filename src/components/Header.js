// State
import React, {useState} from 'react'
// Css
import '../scss/style.css';
// Image
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

const Header = () => {
  const [isActive, setActive] = useState("false");

  const hamburgerToggle = () => {
    setActive(!isActive);
  };

  return (

    <>
      <header className='yot-header yot-bg-white yot-z-index-3'>
        <nav className='yot-container yot-padding-tb-24 yot-flex yot-flex-ai-c-jc-sb'>
          <div className='yot-flex yot-flex-ai-c'>
            {/* Hamburger */}
            <div className={`yot-z-index-3 yot-hamburger yot-hide-for-desktop ${!isActive ? "yot-hamburger-open" : ''}`} onClick={hamburgerToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* Logo */}
            <img src={logo} alt="Logo" className='yot-margin-l-16'/>
            {/* Navigator Desktop */}
            <div className='yot-hide-for-mobile'>
              <ul className='nav-links'>
                <li className='yot-margin-l-48'><span>Collection</span></li>
                <li className='yot-margin-lr-24'><span>Men</span></li>
                <li><span>Women</span></li>
                <li className='yot-margin-lr-24'><span>About</span></li>
                <li><span>Contact</span></li>
              </ul>
            </div>
          </div>
          {/* Cart and Profile */}
          <div className='yot-flex yot-flex-ai-c'>
            <img src={cart} alt='Cart' className='yot-margin-r-24' style={{width:'16px', height:'16px'}}/>
            <img src={avatar} alt='Avatar' className='nav-avatar' style={{width:'24px', height:'24px'}}/>
          </div>
        </nav>
        <hr className='yot-hide-for-mobile yot-container'/>
        {/* Nav Side Mobile*/}
        <div className={`yot-z-index-1  yot-overlay-header-1 yot-arrow-top ${!isActive ? "yot-overlay-header-2" : ''}`}>
          <div className='yot-overlay-child yot-content-space-padding-t-120 yot-padding-l-16'>
            <h4>Collection</h4>
            <h4 className='yot-margin-tb-24'>Men</h4>
            <h4>Women</h4>
            <h4 className='yot-margin-tb-24'>About</h4>
            <h4>Contact</h4>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header