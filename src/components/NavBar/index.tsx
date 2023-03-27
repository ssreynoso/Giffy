import './NavBar.css'
import React from 'react'
import { Link } from 'wouter'
import GifSearch from '@/components/GifSearch'
import GifCategories from '@/components/GifCategories'

function NavBar() {
    return (
        <div className='NavBar__container'>
            <div className='NavBar__firstContainer'>
                <Link to='/'>
                    <h1 className='NavBar__title'>Busca un gif</h1>
                </Link>
                <GifSearch />
            </div>
            <GifCategories />
        </div>
    )
}

export default NavBar
