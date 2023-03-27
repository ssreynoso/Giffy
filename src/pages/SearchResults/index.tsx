import './SearchResults.css'
import React from 'react'
import Loading from '@/components/GifLoading'
import useGifs from '@/hooks/useGifs'
import GifList from '@/components/GifList'
import debounce from 'just-debounce-it'
import { useCallback, useEffect, useRef } from 'react'
import { useNearScreen } from '@/hooks/useNearScreen'

type SearchResultsProps = {
    params: {
        keyword: string
    }
}

function SearchResults({ params }: SearchResultsProps) {
    const { keyword } = params

    const externalRef = useRef<HTMLDivElement>(null)
    const { gifs, loading, setPage } = useGifs(keyword)
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    })

    const debounceHandleNextPage = useCallback(
        debounce(() => {
            console.log('Next Page')
            setPage((prevPage) => prevPage + 1)
        }),
        []
    )

    useEffect(() => {
        console.log(isNearScreen)
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className='SearchResults__content'>
                        <h3>{decodeURI(keyword)}</h3>
                        <GifList gifs={gifs} />
                    </div>
                    <div id='visor' ref={externalRef}></div>
                </>
            )}
            {/* <button onClick={handleNextPage}>Get Next Page</button> */}
        </>
    )
}

export default SearchResults
