import React from 'react'
import TestsIcon from '../../assets/Navbar/tests.svg'
import DollarIcon from '../../assets/Navbar/dollar.svg'
import SettingsIcon from '../../assets/Navbar/settings.svg'
import Exit from '../../assets/Navbar/exit.svg'
import Bubble from '../../assets/Navbar/bubble.svg'
import Document from '../../assets/Navbar/document.svg'
import Calendar from '../../assets/Navbar/calendar.svg'
import People from '../../assets/Navbar/people.svg'
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
      path: '/'
   },
   {
      icon: Bubble,
      path: '/'
   },
   {
      icon: SettingsIcon,
      path: '/'
   },
   {
      icon: People,
      path: '/users'
   },
   {
      icon: DollarIcon,
      path: '/'
   },
   {
      icon: Exit,
      path: '/',
      parentClassName: 'mt-auto'
   }
]

export default function Navbar() {

   const location = useLocation()
   console.log(location)
   return (
      <div className={`fixed top-0 left-0 h-screen z-50 overflow-auto p-4 flex overflow-auto
      ${location.pathname === '/login' ? 'hidden' : 'bg-lightWhite' }`}>
         <div className='min-h-full flex flex-col items-center bg-primary w-110 p-4 rounded-20 self-stretch overflow-auto pt-14'>
            {navdata.map((item, idx) => {
               return <NavLink key={idx} {...item} />
            })}
         </div>
      </div>
   )
}
