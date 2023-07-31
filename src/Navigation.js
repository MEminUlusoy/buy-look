import React from 'react'
import {Link} from "react-router-dom"

function Navigation() {
  return (
    <div className='outter-nav'>
        <div className="left-nav">
            <h1><Link to="/">LOGO</Link></h1>
        </div>
        <div className="right-nav">
            <ul>
                <li>Ürünler</li>
                <li>Hakkımızda</li>
                <li><Link to='basket'>Sepet</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation