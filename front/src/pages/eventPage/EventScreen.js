import React from 'react'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'

export const EventScreen = () => {
  return (

    <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}
      <Sidebar /> {/* hijo 1 izquierdo sticky */}

    <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
      
      <div>
        <HeaderInicio propNamePage="Eventos"/>
      </div>
        
    </div>

    </div>
  
  )
}
