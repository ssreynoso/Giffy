import React from 'react'
import { useCategories } from '@/hooks/useCategories'
import { Link } from 'wouter'
import './GifCategories.css'

function GifCategories() {
    const { loading, categories } = useCategories()

    if (loading) return null

    return (
        <div className='GifCategories__container'>
            <h3>Categories</h3>
            <ul className='GifCategories__list'>
                {categories.map((category) => (
                    <Link key={category.name} to={`/search/${category.name}`}>
                        <li>{category.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default GifCategories
