import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Selected from '../../assets/Navbar/selected.svg'
import styles from './navbar.module.css'

export default function NavLink({ icon: Icon, path, parentClassName }) {

   const navigate = useNavigate()
   const handleNavigate = () => navigate(path)
   const location = useLocation()
   return (
      <button className={`mb-14 z-20 relative ${parentClassName ? parentClassName : ''} 
      ${location.pathname === path ? styles.selectedNavLink : ''}`} onClick={handleNavigate} >
         {/* <img src={icon} className={Selected ? styles.selectedNavLink : ''} /> */}
         <Icon />
         {location.pathname === path &&
            <img src={Selected} className={styles.selectedIcon} />
         }
      </button>
   )
}
