import React from 'react'
import TestsIcon from '../../assets/Navbar/tests'
import DollarIcon from '../../assets/Navbar/dollar'
import SettingsIcon from '../../assets/Navbar/settings'
import Exit from '../../assets/Navbar/exit'
import Bubble from '../../assets/Navbar/bubble'
import Document from '../../assets/Navbar/document'
import Calendar from '../../assets/Navbar/calendar'
import People from '../../assets/Navbar/people'
import Selected from '../../assets/Navbar/selected.svg'
import NavLink from './NavLink'
import { useLocation } from 'react-router-dom'

const navdata = [
   {
      icon: Calendar,
      path: '/calendar'
   },
   {
      icon: TestsIcon,
      path: '/assigned-tests'
   },
   {
      icon: Document,
      path: '/all-tests'
   },
   {
      icon: Bubble,
      path: '/graph'
   },
   {
      icon: SettingsIcon,
      path: '/settings'
   },
   {
      icon: People,
      path: '/users'
   },
   {
      icon: DollarIcon,
      path: '/dollar'
   },
   {
      icon: Exit,
      path: '/exit',
      parentClassName: 'mt-auto'
   }
]

export default function Navbar() {

   const location = useLocation()
   // console.log(location)
   return (
      <div className={`fixed top-0 left-0 h-screen z-50 overflow-y-auto p-4 flex overflow-auto
      ${location.pathname === '/login' ? 'hidden' : 'bg-lightWhite' }`}>
         <div className='min-h-full flex flex-col items-center bg-primary w-110 p-4 rounded-20 self-stretch overflow-x-hidden  overflow-y-auto pt-14'>
            {navdata.map((item, idx) => {
               return <NavLink key={idx} {...item} />
            })}
         </div>
      </div>
   )
}
