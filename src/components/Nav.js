import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { FiMoreVertical ,FiLogOut} from "react-icons/fi"; 
import { HiTranslate,HiMoon,HiSun } from "react-icons/hi";
import ThemeContext from '../contexts/ThemeContext';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const Nav = ({logout}) => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const {locale,toggleLocale} = useContext(LocaleContext)

    const [isOpen,setIsOpen] = useState(false)

        return(
        <nav>
            <h1><Link to='/'>{locale === 'id' ? 'CatatanKU' : 'MyNotes'}</Link><div onClick={toggleTheme} >{theme === 'light' ? <HiMoon size={27} /> : <HiSun size={27} /> }</div></h1>
            <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/archivednotes'>{locale === 'id' ? 'Catatan Terarsip' : 'Archived Notes'}</Link></li>
                <li><Link to='/addnote'>{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</Link></li>
                <li><HiTranslate size="24" onClick={toggleLocale} /></li>
                <li><FiLogOut size="24" onClick={logout} /></li>
            </ul>
            <div className='nav-list-mobile'>
                <FiMoreVertical size="27" className="icon-menu" onClick={() => setIsOpen(!isOpen)} />
                <ul className='nav-list-mobile-child' style={{width: isOpen ? '70vw' : 0}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/archivednotes'>Archived Notes</Link></li>
                    <li><Link to='/addnote'>Add Note</Link></li>
                </ul>
            </div>
        </nav>
        )
}

Nav.prototype = {
    logout: PropTypes.func.isRequired
}

export default Nav