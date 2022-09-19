import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FiMoreVertical ,FiLogOut} from "react-icons/fi"; 
import { HiTranslate,HiMoon } from "react-icons/hi";

const Nav = ({logout}) => {
    const [isOpen,setIsOpen] = useState(false)

        return(
        <nav>
            <h1><Link to='/'>CatatanKU</Link><HiMoon size="27" /></h1>
            <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/archivednotes'>Archived Notes</Link></li>
                <li><Link to='/addnote'>Add Note</Link></li>
                <li><HiTranslate size="24" /></li>
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

export default Nav