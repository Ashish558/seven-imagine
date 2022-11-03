import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavLink({ icon, path, parentClassName }) {

   const navigate = useNavigate()
   const handleNavigate = () => navigate(path)

   return (
      <button className={`mb-14 ${parentClassName}`} onClick={handleNavigate} >
         <img src={icon} />
      </button>
   )
}
