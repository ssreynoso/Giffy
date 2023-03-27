import React, { Suspense } from 'react'
import Loading from '@/components/GifLoading'
import GifList from '@/components/GifList'
import useGifs from '@/hooks/useGifs'
import './Home.css'
// import { GifTrending } from "@/components/GifTrending";
import { useNearScreen } from '@/hooks/useNearScreen'

const GifTrending = React.lazy(() =>
    import('@/components/GifTrending').then(({ GifTrending }) => ({
        default: GifTrending,
    }))
)

function Home() {
    const GifAPI = 'https://developers.giphy.com/docs/api/#quick-start-guide'

    const { isNearScreen, fromRef } = useNearScreen({})

    const { gifs, loading } = useGifs()

    if (loading) return <Loading />

    return (
        <div className='Home__container'>
            <h1>
                Consumo de la API{' '}
                <a href={GifAPI}>
                    Giffy
                </a>
            </h1>
            <h3>Last searched gifs</h3>
            <section className='mainContentGifs__container'>
                <GifList gifs={gifs} />
            </section>
            <div ref={fromRef}>
                <Suspense fallback={<p>CARGANDO BRO...</p>}>
                    {isNearScreen && <GifTrending />}
                </Suspense>
            </div>
        </div>
    )
}

export default Home
