import './GifTrending.css'
import React from 'react'
import { useTrending } from '@/hooks/useTrending'
import GifList from '../GifList'
import GifLoading from '../GifLoading'

export const GifTrending = function () {
    const { trendingGifs, trendingLoading } = useTrending()

    if (trendingLoading) return <GifLoading />

    return (
        <>
            <section className='trendingGifs__container'>
                <h3>Trending</h3>
                <GifList gifs={trendingGifs} />
            </section>
        </>
    )
}
