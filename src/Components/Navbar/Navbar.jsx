import './Navbar.css'
import logo from './../../assets/logo.svg'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'

const Menu = () => {
  return <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is Gpt-3</a></p>
    <p><a href="#possibility">open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
}
const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar__links">
        <div className="gpt3__navbar__links__logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar__links__container">
          <Menu />
        </div>
        <div className="gpt3__navbar__sign">
          <p>sign in</p>
          <button type='button'>sign up</button>
        </div>
        <div className="gpt3__navbar__menu">
          {
            toogleMenu ? 
              <RiCloseLine color='#fff' size={27} onClick={() => setToogleMenu(false)} /> : 
              <RiMenu3Line color='#fff' size={27} onClick={() => setToogleMenu(true)} />
          }
          {
            toogleMenu && (
              <div className="gpt3__navbar__menu__container">
                <div className="gpt3__navbar__menu__container__links">
                  <Menu />
                  <div className="gpt3__navbar__menu__container__links__sign">
                    <p>sign in</p>
                    <button type='button'>sign up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar