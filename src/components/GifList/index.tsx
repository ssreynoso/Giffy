import React from 'react'
import GifItem from '@/components/GifItem'
import { Gif } from '@/types'
import './GifList.css'

function GifList({ gifs }: { gifs: Gif[] }) {
    return (
        <div className='GifList'>
            {gifs.map(({ title, id, url }) => (
                <GifItem key={id} id={id} title={title} url={url} />
            ))}
        </div>
    )
}

export default GifList
